📚 Learning Management System (LMS)

A full-stack Learning Management System that allows educators to create and sell courses, and learners to enroll, track progress, and rate courses.
Deployed live at [https://lms-learnmate.vercel.app/].


✨ Features
👩‍🏫 For Educators

Secure educator registration & role upgrade
Create, edit, and publish courses with chapters and lectures
Upload and manage lecture videos
Real-time purchase and revenue tracking

🎓 For Learners

Browse and purchase courses using Stripe checkout
View lectures with a built-in video player
Track lecture completion progress in real time
Rate and review purchased courses

🛠️ Core System
Authentication & Authorization powered by Clerk
Secure Payments through Stripe
RESTful API built with Node.js & Express
MongoDB for scalable data storage
React + Vite frontend with responsive UI
Deployed on Vercel (frontend) and vercel backend host

🏗️ Tech Stack
Category	      Technology
Frontend	      React, Vite, Tailwind CSS
Backend	        Node.js, Express.js
Database	      MongoDB Atlas
Authentication	Clerk
Payments	      Stripe
Deployment	    Vercel (frontend), Vercel(backend)


🚀 Getting Started

1️⃣ Prerequisites
Node.js v18 or above
npm or yarn

A MongoDB Atlas cluster
Stripe account & secret key
Clerk account & keys

2️⃣ Environment Variables
Create a .env file in both the client and server directories:

Backend .env
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
CLERK_WEBHOOK_SECRET=<your_clerk_webhook_secret>
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_SECRET_KEY=<your_cloudinary_secret_key>


Frontend .env
VITE_CURRENCY='₹' 
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=https://your-backend-api.com

3️⃣ Installation
# Clone the repository
git clone https://github.com/Madhav-kolasani/Learning-Management-System.git
cd learning-management-system

# Install dependencies
cd server && npm install
cd ../client && npm install

4️⃣ Run Locally
Backend
cd server
npm run dev

Frontend
cd client
npm run dev


Visit: http://localhost:5173

📡 API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/user/data	Get user details
GET	/api/user/enrolled-courses	Get courses the user enrolled in
POST	/api/course/purchase	Purchase a course
POST	/api/course/progress/update	Update lecture completion progress
GET	/api/course/progress/:courseId	Get user progress for a course
POST	/api/course/rating	Add or update course rating

📷 Screenshots
(screenshots or GIFs of my application)

🛡️ Security & Best Practices
All API routes protected with JWT tokens via Clerk.
Payments secured with Stripe Checkout.
Environment variables hidden via .env files.

🌍 Deployment
Frontend deployed on Vercel.
Backend can be hosted on Render, Railway, Heroku, or your own VPS.

🧩 Future Enhancements
🎥 Add real-time chat or Q&A for each course
🏆 Gamification (badges, certificates)
📱 Native mobile app (React Native)

🧑‍💻 Author
Madhav Kolasani
📧 [madhavkolasani@gmail.com]
🔗 LinkedIn:- https://www.linkedin.com/in/madhav-kolasani/
 • GitHub:- https://github.com/Madhav-kolasani

📝 License
This project is licensed under the MIT License.

⭐ If you like this project, give it a star on GitHub!
