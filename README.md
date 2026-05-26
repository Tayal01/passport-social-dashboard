# Passport Social Dashboard

A MERN stack based social media analytics dashboard that aggregates passport-related discussions and performs NLP-based analysis on posts.

The project helps monitor passport-related social conversations such as:
- passport renewal issues
- visa appointment discussions
- Tatkal passport experiences
- travel-related passport concerns
- appointment availability updates

---

# Live Demo

## Frontend
https://passport-social-dashboard.vercel.app

## Backend API
https://passport-social-dashboard.onrender.com

---

# Features

## Social Media Aggregation
- Reddit-based social media aggregation
- Passport-related discussion monitoring
- Structured analytics feed

---

## NLP Processing
- Sentiment Analysis
- Category Detection
- Language Detection
- Summary Generation
- Spam Filtering Logic

---

# API Integration Note

The application architecture supports live Reddit API based social media aggregation for passport-related discussions.

To maintain a stable and deterministic analytics experience during deployment and demonstration, the production demo currently utilizes structured sample data while preserving the live API integration logic within the service layer.

---

# Dashboard Features

- Search functionality
- Category filtering
- Sentiment filtering
- Interactive analytics visualization
- CSV export functionality
- Responsive dashboard UI

---

# Analytics Features

The dashboard provides:
- Positive / Neutral / Negative sentiment distribution
- Passport issue categorization
- Engagement analytics
- Structured post insights

---

# Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Recharts

---

## Backend
- Node.js
- Express.js

---

## NLP Libraries
- Sentiment
- Franc

---

# Project Structure

passport-social-dashboard/

├── frontend/

│ ├── src/

│ ├── App.jsx

│ └── components/

│

├── backend/

│ ├── controllers/

│ ├── routes/

│ ├── services/

│ └── server.js

│

└── README.md

---

# API Endpoints

## Get Posts

GET

/api/posts

Returns:
- social media posts
- category analytics
- sentiment analytics
- NLP processed insights

---

## Export CSV Report

GET

/api/export/csv

Downloads dashboard analytics report in CSV format.

---

# Dashboard Workflow

1. Fetch social media posts
2. Process NLP analysis
3. Detect categories
4. Detect sentiment
5. Generate analytics
6. Display dashboard insights
7. Export CSV reports

---

# Deployment

## Frontend
Deployed on Vercel

## Backend
Deployed on Render

---

# Future Improvements

- YouTube API integration
- Twitter/X integration
- MongoDB database integration
- Authentication system
- Real-time analytics
- AI-generated summaries
- Advanced NLP models

---

# Author

Lakshay Tayal
