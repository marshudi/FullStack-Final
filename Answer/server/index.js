import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import EmployeeModel from "./Models/Employees.js";


let app = express();

app.use(cors());
app.use(express.json());

app.post("/addEmployee", async (req,res)=>{
  try{

     const {rname,remail,rphone}=req.body;
    
     const newEmp=new EmployeeModel({
      name:rname,
      email:remail,
      phone:rphone,
     });

     await newEmp.save();
     res.send({employeeServer:newEmp,msg:"Added!"})

  }

  catch(error){
    res.status(500).json({error:"Something went wrong!"})
    console.log(error);
  }



})





app.get("/getEmployee", async (req,res)=>{
  try{

     const employee=await EmployeeModel.find()
     res.send({employeeServer:employee,msg:"Found!"})

  }

  catch(error){
    res.status(500).json({error:"Something went wrong!"})
    console.log(error);
  }

})



app.delete("/deleteEmployee/:empid", async (req,res)=>{
  try{

    const eid=req.params.empid;
     await EmployeeModel.findOneAndDelete({_id:eid})
     

  }

  catch(error){
    res.status(500).json({error:"Something went wrong!"})
    console.log(error);
  }

})


app.put("/updateEmployee", async (req,res)=>{
  try{

     const {rname,remail,rphone,rempid}=req.body;
    
     const employeeUpdate=await EmployeeModel.findOne({_id:rempid})
     employeeUpdate.name=rname;
     employeeUpdate.email=remail;
     employeeUpdate.phone=rphone;


     await employeeUpdate.save();
     res.send({employeeServer:employeeUpdate,msg:"Updated!"})

  }

  catch(error){
    res.status(500).json({error:"Something went wrong!"})
    console.log(error);
  }



})


var conn =
  "mongodb+srv://admin:admin@project.ludeoui.mongodb.net/empDB?retryWrites=true&w=majority&appName=Project";

mongoose.connect(conn);

app.listen(3002, () => {
  console.log("Server Connected..");
});
