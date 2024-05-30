import * as yup from "yup";

export const EmployeeValidation=yup.object().shape({
    name:yup.string().min(3).required("Name is required"),

    email:yup.string().email("Not a Valid Email").required("Emial is required"),

    phone:yup.number().min(8).required("Phone Number is required"),

})
