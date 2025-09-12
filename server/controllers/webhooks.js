import { Webhook } from "svix";
import User from "../models/User.js";
import Stripe from "stripe";
import { Purchase } from "../models/Purchase.js";
import Course from "../models/Course.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0]?.email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url, // correct Clerk property
        };
        await User.create(userData);
        return res.json({ success: true });
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0]?.email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        return res.json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({ success: true });
      }

      default:
        return res.json({ message: "Event type not handled" });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
export const stripeWebhooks = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("Received event:", event.type); // Add logging

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        // Use checkout.session.completed instead of payment_intent.succeeded
        const session = event.data.object;
        const { purchaseId } = session.metadata;

        console.log("Processing purchase:", purchaseId); // Add logging

        const purchaseData = await Purchase.findById(purchaseId);
        if (!purchaseData) {
          console.log("Purchase not found:", purchaseId);
          return res.status(404).json({ error: "Purchase not found" });
        }

        const userData = await User.findById(purchaseData.userId);
        const courseData = await Course.findById(purchaseData.courseId.toString());

        if (!userData || !courseData) {
          console.log("User or course not found");
          return res.status(404).json({ error: "User or course not found" });
        }

        // Update course
        courseData.enrolledStudents.push(userData._id);
        await courseData.save();

        // Update user
        userData.enrolledCourses.push(courseData._id);
        await userData.save();

        // Update purchase status
        purchaseData.status = "completed";
        await purchaseData.save();

        console.log("Purchase completed successfully:", purchaseId);
        break;
      }
      case "checkout.session.expired": {
        const session = event.data.object;
        const { purchaseId } = session.metadata;

        const purchaseData = await Purchase.findById(purchaseId);
        if (purchaseData) {
          purchaseData.status = "failed";
          await purchaseData.save();
        }
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  res.json({ received: true });
};