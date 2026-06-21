import express from "express";
import { login, register } from "../controllers/authController.js";
import {
  adminOnly,
  employeeOnly,
  hrOnly,
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Test Routes

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Profile accessed successfully", user: req.user });
});

// Admin only
router.get("/admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// HR only
router.get("/hr", protect, hrOnly, (req, res) => {
  res.json({ message: "Welcome HR" });
});

// Employee only
router.get("/employee", protect, employeeOnly, (req, res) => {
  res.json({ message: "Welcome Employee" });
});

export default router;
