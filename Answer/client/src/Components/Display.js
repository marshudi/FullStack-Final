import {getEmployee,deleteEmployee,updateEmployee} from "../Features/EmployeeSlice"
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";



const Display=()=>{
    const employee=useSelector((state)=>state.employees.employee)
    let [modal, setModal] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNum, setphoneNum] = useState("");
    const [employeeID, setemployeeID] = useState("");


    const dispatch = useDispatch();


    const toggle = (name,email,phoneNum, eid) => {
        setModal(!modal);
        setname(name);
        setemail(email);
        setphoneNum(phoneNum);
        setemployeeID(eid);
      };


      const handleUpdate = () => {

        const data={
          cname:name,
          cemail:email,
          cphone:phoneNum,
          cempid:employeeID
        }
        dispatch(updateEmployee(data));



      };

      useEffect(() => {
       dispatch(getEmployee())
      }, [employee]);


      const handleDelete = (id) => {
        dispatch(deleteEmployee(id))

      };
    return(
<div>
<table className="table table-striped">
        <tbody>
          {employee.map((x) => (
            <tr>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>
                <span>
                
                
                    <>
                      <a
                        href="#"
                        onClick={() => toggle(x.name,x.email,x.phone, x._id)}
                      >
                        <CiEdit />
                      </a>

                      <a href="#">
                        <RiDeleteBinLine
                          onClick={() => handleDelete(x._id)}
                        />
                      </a>
                    </>
              
                </span>
                <div>{x.phone}</div>


              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Update Employee</ModalHeader>
        <ModalBody>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />
        <Input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e)=>setemail(e.target.value)}

          />

        <Input
            id="phone"
            name="phone"
            type="text"
            value={phoneNum}
            onChange={(e)=>setphoneNum(e.target.value)}

          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleUpdate();
              toggle();
            }}
          >
            UPDATE
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    )
}

export default Display;
