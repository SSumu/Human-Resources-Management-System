import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  department: String,
  position: String,
  salary: String,
});

export default mongoose.model("Employee", employeeSchema);
