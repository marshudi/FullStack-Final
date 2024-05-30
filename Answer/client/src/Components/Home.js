import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import EmployeeImg from "../Assets/employee.webp";
import Register from "./Register";
import Display from "./Display";
const Home=()=>{
    return(
        <>
        <Col>
        
            <Row>
                <Col>
                    <img src={EmployeeImg} />
                </Col>
                <Col>
                    <Register/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Display/>
                </Col>
            </Row>
        
        </Col>
        
        
        </>
    )
}

export default Home;
