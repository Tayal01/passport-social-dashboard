import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/postRoutes.js";
import exportRoutes from "./routes/exportRoutes.js";

dotenv.config();

const app = express();

//CORS CONFIGURATION

app.use(
  cors({
    origin: ["http://localhost:5173",
    "https://passport-social-dashboard.vercel.app",
  ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

//ROUTES

app.use("/api/posts", postRoutes);
app.use("/api/export", exportRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

//SERVER

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
