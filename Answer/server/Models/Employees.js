import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  }
});

const EmployeeModel = mongoose.model("EmployeeDetails", EmployeeSchema,"EmployeeDetails");

export default EmployeeModel;