import axios from "axios";
import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import custLoginImg from "../assets/custLogin.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

function CustomerLogin() {

  const[cust_email_id,setEmail]=useState('')
  const[cust_password,setPassword]=useState('')

  


  
  const handleClick=()=>{
    const custlogin = {cust_email_id,cust_password }
    
    axios.post(`http://localhost:8282/home/custlogin`,custlogin).then(
        (response)=>{
           // toast.success('login successfull');
            console.log("success");
            console.log(response);
             window.location.href = "/items";
            localStorage.setItem('cust_id',response.data.cust_id)
            
        },
        (error)=>{
         
            alert("Invalid Login Details",error);
            toast.error('invalid login');
            console.log(error);
            console.log("Error");
        }
    );
};


  return (
    <div>
 
    <Navbar></Navbar>
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${custLoginImg})` }}
      >
        {/* //leftside */}
        
        </div>
      <div className="rightSide">
        <h1> Login as Customer</h1>

        <Form inline>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="cust_email_id"
    >
      Email
    </Label>
    <Input
      id="cust_email_id"
      name="cust_email_id"
      placeholder="Enter Email"
      type="email"
      value={cust_email_id}
      onChange={(e)=>setEmail(e.target.value)}
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password
    </Label>
    <Input
      id="cust_password"
      name="cust_password"
      placeholder="Enter Password"
      type="password"
      value={cust_password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>
  <Button
   onClick={handleClick}
  >
    Submit
  </Button>
</Form> 
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CustomerLogin;
