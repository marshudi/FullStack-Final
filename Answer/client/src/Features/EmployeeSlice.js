import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const addEmployee = createAsyncThunk("employees/addEmployee", async (empData)=>{
  try{
    const response=await axios.post("http://localhost:3002/addEmployee", {
      rname:empData.cname,
      remail:empData.cemail,
      rphone:empData.cphone
    });

    return response.data.employeeServer;

  }
  catch(error){
    console.log(error);

  }
})



export const getEmployee = createAsyncThunk("employees/getEmployee", async (empData)=>{
  try{
    const response=await axios.get("http://localhost:3002/getEmployee");

    return response.data.employeeServer;

  }
  catch(error){
    console.log(error);

  }
})


export const deleteEmployee = createAsyncThunk("employees/deleteEmployee", async (empId)=>{
  try{
    await axios.delete(`http://localhost:3002/deleteEmployee/${empId}`);

    return empId;

  }
  catch(error){
    console.log(error);

  }
})

export const updateEmployee = createAsyncThunk("employees/updateEmployee", async (empData)=>{
  try{
    const response=await axios.put("http://localhost:3002/updateEmployee", {
      rname:empData.cname,
      remail:empData.cemail,
      rphone:empData.cphone,
      rempid:empData.cempid,
    });

    return response.data.employeeServer;

  }
  catch(error){
    console.log(error);

  }
})






const initVal = {
    employee: [],
    status: "idle",
    error: null,
  };



  const EmployeeSlice = createSlice({
    name: "employees",
    initialState:initVal ,
    reducers: {},
    extraReducers: (builder) => {
      builder
      //add
        .addCase(addEmployee.pending,(state,action)=>{
          state.status="loading";
        })
        .addCase(addEmployee.fulfilled,(state,action)=>{
          state.status="sucess";
          state.employee.push(action.payload)
        })
        .addCase(addEmployee.rejected,(state,action)=>{
          state.status="rejected";
         
        })


        //get
        .addCase(getEmployee.pending,(state,action)=>{
          state.status="loading";
        })
        .addCase(getEmployee.fulfilled,(state,action)=>{
          state.status="sucess";
          state.employee = action.payload
        })
        .addCase(getEmployee.rejected,(state,action)=>{
          state.status="rejected";
         
        })

      //delete
        .addCase(deleteEmployee.pending,(state,action)=>{
          state.status="loading";
        })
        .addCase(deleteEmployee.fulfilled,(state,action)=>{
          state.status="sucess";
          state.employee= state.employee.filter((emp)=>emp._id !== action.payload)
        })
        .addCase(deleteEmployee.rejected,(state,action)=>{
          state.status="rejected";
         
        })

      //update
        .addCase(updateEmployee.pending,(state,action)=>{
          state.status="loading";
        })
        .addCase(updateEmployee.fulfilled,(state,action)=>{
          state.status="sucess";

          const updateEmpIndex=state.employee.findIndex((emp)=>emp._id === action.payload)

            if(updateEmpIndex !== -1){
              state.employee[updateEmpIndex]=action.payload;
            }
        })
        .addCase(updateEmployee.rejected,(state,action)=>{
          state.status="rejected";
         
        })
    },
  });
  
  export default EmployeeSlice.reducer;
  