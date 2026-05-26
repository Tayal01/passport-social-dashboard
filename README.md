# Passport Social Dashboard

A MERN stack based social media analytics dashboard that aggregates passport-related discussions and performs NLP-based analysis on posts.

The project helps monitor social conversations related to passport services such as renewal, visa issues, Tatkal processing, appointments, and travel experiences.

---

# Live Demo

Frontend:
https://passport-social-dashboard.vercel.app

Backend API:
https://passport-social-dashboard.onrender.com

---

# Features

## Social Media Aggregation
- Reddit-based post aggregation
- Passport-related social discussion monitoring
- Structured social feed dashboard

---

## NLP Processing
- Sentiment Analysis
- Category Detection
- Language Detection
- Summary Generation
- Spam Filtering Logic

---

## Dashboard Features
- Search functionality
- Category filtering
- Sentiment filtering
- Analytics visualization
- Responsive UI
- CSV export functionality

---

# Analytics Features

The dashboard provides:

- Positive / Neutral / Negative sentiment distribution
- Passport issue categorization
- Engagement metrics
- Real-time dashboard analytics

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

│ ├── components/

│ └── App.jsx

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
- sentiment data
- category data
- NLP processed analytics

---

## Export CSV

GET

/api/export/csv

Downloads analytics report in CSV format.

---

# Dashboard Workflow

1. Fetch social media posts
2. Process NLP analysis
3. Generate categories
4. Detect sentiment
5. Display analytics
6. Enable filtering & export

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
- MongoDB database storage
- Authentication system
- AI-generated summaries
- Real-time analytics
- Advanced NLP models

---

# Author

Lakshay Tayal
