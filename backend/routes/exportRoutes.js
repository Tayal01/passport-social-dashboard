import express from "express";

import { exportCSV, } from "../controllers/exportController.js";

const router = express.Router();

router.get("/csv", exportCSV);

export default router;