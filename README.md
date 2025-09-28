AI-Powered Content Moderation System

📌 Overview

This project is a demo AI-powered content moderation system that allows users to upload files (images/videos/documents) and simulates moderation using simple AI logic. An Admin Dashboard is also provided to review flagged content and manage moderation statistics.

The project demonstrates:

File upload functionality.

AI-based moderation (safe, flagged, rejected).

Real-time updates of moderation results.

Admin view for flagged/approved/rejected content tracking.

🚀 Features

User Side

Upload content via form.

Simulated AI moderation (Safe ✅ / Flagged ⚠️ / Rejected ❌).

Real-time feedback with reason for rejection/flagging.

Admin Side

Dashboard with statistics: Total Uploads, Flagged, Approved, Rejected.

View flagged content dynamically.

Intuitive UI built with HTML, CSS, and FontAwesome icons.

🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript

Libraries: FontAwesome (icons)

Logic: Basic JavaScript for moderation simulation

📂 Project Structure
├── admin.html     # Admin dashboard UI
├── admin.css      # Styling for admin dashboard (not provided in repo)
├── admin.js       # Admin-side logic (not provided in repo)
├── user.js        # User upload + moderation logic
├── index.html     # (Optional) User-side UI for uploading content

⚙️ How It Works

User uploads content through the form.

AI moderation (simulated) randomly classifies as Safe, Flagged, or Rejected.

Admin Dashboard displays flagged content with moderation statistics.

🔮 Future Enhancements

Integrate real AI/ML models (e.g., TensorFlow.js, AWS Rekognition, Google Vision API).

Store uploads & moderation results in a database.

Role-based authentication for Admin vs User.

Advanced moderation categories (nudity, violence, hate speech, copyright).

👩‍💻 Author

Khushi Gupta
B.Tech IT, Banasthali Vidyapith
