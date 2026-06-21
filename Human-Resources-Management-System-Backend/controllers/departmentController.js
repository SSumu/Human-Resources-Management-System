import Department from "../models/Department.js";

// Get all departments
export const getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
};

// Get department by ID
export const getDepartmentById = async (req, res) => {
  const department = await Department.findById(req.params.id);
  res.json(department);
};

// Add new department
export const addDepartment = async (req, res) => {
  const department = await Department.create(req.body);
  res.json(department);
};

// Update department
export const updateDepartment = async (req, res) => {
  const updated = await Department.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// Delete department
export const deleteDepartment = async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ message: "Department deleted successfully" });
};
