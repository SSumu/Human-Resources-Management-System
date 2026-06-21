import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "../controllers/employeeController.js";
import { adminOnly, adminOrHR, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getEmployees);
router.get("/:id", protect, getEmployeeById);
router.post("/", protect, adminOrHR, addEmployee);
router.put("/:id", protect, adminOrHR, updateEmployee);
router.delete("/:id", protect, adminOnly, deleteEmployee);

export default router;
