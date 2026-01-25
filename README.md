# F.A.R.T
F.A.R.T. Site (Project Name)A full-stack sports management and "Pick-Em" platform designed for tracking standings, managing team articles, and engaging in playoff predictions. 
This project features a robust administrative backend and a modern, reactive frontend.

🚀 Tech Stack
Frontend: Angular (TypeScript)Backend:
Django (Python)Database: PostgreSQL
Media Storage: Cloudinary (for team logos and player headshots)
External Integration: Google Sheets (for supplementary data tracking)
Hosting: Railway (Backend/API) & GitHub Pages (Frontend)

🏗️ Architecture & "The Backrooms"
The project follows a decoupled architecture ensuring high availability and separation of concerns:
Deployment: The Django API is hosted on Railway, while the Angular client is served via GitHub Pages.
Data Flow: The frontend communicates with the Django REST API to fetch data stored in PostgreSQL.
Asset Management: Dynamic images like player headshots and team logos are managed via Cloudinary for optimized delivery.

📱 Key Features
1. Pick-Em & Standings System
   Playoff & Per-Game Logic: Integrated systems for users to make picks for both full playoff brackets and individual regular-season games.
   Live Leaderboard: Real-time updates on user pick accuracy and overall standings.
   Team Dynamics: Detailed views for team records, schedules, and player rosters.
2. Content Management
   (Admin Suite)CRUD Functionality: A dedicated admin portal to Add, Update, and Delete articles and team information.
   Rich Articles: Support for figure-based articles with dates and image integration.
3. User Experience
   Interactive UI: Dynamic modals for viewing specific team details and player headshots.
   Navigation: A structured layout featuring a global Header/Footer, dedicated News sections, and an FAQ.
   Authentication: Secure Login system to track personal "Pick-Em" records and profile settings (PFP support up to $320 \times 320$).
