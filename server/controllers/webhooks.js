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


/* ---------------------  Stripe Webhooks  --------------------- */
const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhooks = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // IMPORTANT: req.body must be raw (express.raw) for signature check
    event = stripeInstance.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Stripe signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const { purchaseId } = session.metadata;

        const purchase = await Purchase.findById(purchaseId);
        if (!purchase) throw new Error("Purchase not found");

        const user = await User.findById(purchase.userId);
        const course = await Course.findById(purchase.courseId);

        if (!user || !course) throw new Error("User or Course not found");

        // push only ObjectIds
        course.enrolledStudents.push(user._id);
        await course.save();

        user.enrolledCourses.push(course._id);
        await user.save();

        purchase.status = "completed";
        await purchase.save();

        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object;
        const { purchaseId } = session.metadata;

        const purchase = await Purchase.findById(purchaseId);
        if (purchase) {
          purchase.status = "failed";
          await purchase.save();
        }
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Error handling Stripe event:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};