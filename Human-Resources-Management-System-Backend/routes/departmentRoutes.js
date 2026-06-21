import express from "express";
import {
  addDepartment,
  deleteDepartment,
  getDepartmentById,
  getDepartments,
  updateDepartment,
} from "../controllers/departmentController.js";
import { adminOnly, adminOrHR, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getDepartments);
router.get("/:id", protect, getDepartmentById);
router.post("/", protect, adminOrHR, addDepartment);
router.put("/:id", protect, adminOrHR, updateDepartment);
router.delete("/:id", protect, adminOnly, deleteDepartment);

export default router;
