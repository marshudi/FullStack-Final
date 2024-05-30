import { useSelector,useDispatch } from "react-redux";
import { Container, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {addEmployee} from "../Features/EmployeeSlice"
import { useEffect, useState } from "react";
import { EmployeeValidation } from "../Validation/EmployeeValidation";

const Register=()=>{
    
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNum, setphoneNum] = useState(0);

  const dispatch = useDispatch();


    const {
        register,
        handleSubmit: submitForm, 
        formState: { errors },
      } = useForm({
        resolver: yupResolver(EmployeeValidation), //Associate your Yup validation schema using the resolver
      });


      const handleSubmit = () => {
        const data={
          cname:name,
          cemail:email,
          cphone:phoneNum
        }
        dispatch(addEmployee(data));

      };
    
    return(
        <>

        <Col>

          <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Employee name..."
                  //register this input to the react-hook
                  {...register("name",{
                    value:name,
                    onChange: (e) => setname(e.target.value),

                  })

                  }
                />
              </div>
              <p className="error">{errors.name?.message}</p>
        
            <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Employee Email..."
                  //register this input to the react-hook
                  {...register("email",{
                    value:email,
                    onChange: (e) => setemail(e.target.value),

                  })

                  }
                />
              </div>
              <p className="error">{errors.email?.message}</p>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  placeholder="Enter Employee Phone Number..."
                  //register this input to the react-hook
                  {...register("phone",{
                    value:phoneNum,
                    onChange: (e) => setphoneNum(e.target.value),

                  })

                  }
                />
              </div>
              <p className="error">{errors.phone?.message}</p>

              <Button
                color="primary"
                className="button"
                onClick={submitForm(handleSubmit)} //Validate first the form data by invoking submitForm, if all is good execute handleSubmit
              >
                Register
              </Button>
        
        
        </Col>
        
        </>
    )
}

export default Register;
