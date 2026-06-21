import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Verify JWT Token
export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin Only Access
export const adminOnly = async (req, res, next) => {
  if (req.user && req.user.role === "admin") next();
  else res.status(403).json({ message: "Admin access only" });
};

// HR Only Access
export const hrOnly = async (req, res, next) => {
  if (req.user && req.user.role === "hr") {
    next();
  } else {
    res.status(403).json({ message: "HR access only" });
  }
};

// Employee Only Access
export const employeeOnly = async (req, res, next) => {
  if (req.user && req.user.role === "employee") {
    next();
  } else {
    res.status(403).json({ message: "Employee access only" });
  }
};

// Admin or HR Access
export const adminOrHR = async (req, res, next) => {
  if (req.user && (req.user.role === "admin" || req.user.role === "hr")) next();
  else res.status(403).json({ message: "Admin or HR access only" });
};
