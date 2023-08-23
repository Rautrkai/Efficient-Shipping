import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function CustomerRegister() 
{
  const[cust_fName,setFirstName]=useState('')
  const[cust_mName,setMiddleName]=useState('')
  const[cust_lName,setLastName]=useState('')
  const[cust_email_id,setEmail]=useState('')
  const[cust_password,setPassword]=useState('')
  const[cust_phone_no,setPhoneNumber]=useState('')
  const[cust_address,setAddress]=useState('')
  
  const handleClick=(e)=>{
    e.preventDefault()
    const customer = {cust_fName,cust_mName,cust_lName,cust_email_id,cust_password,cust_phone_no,cust_address}
    console.log(customer);
    fetch("http://localhost:8282/home/customer",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(customer)
    }).then(()=>{
      window.location.href = "/contact";
      console.log("new customer added")
    })
  } 

  return (
    <div>
      <Navbar/>
      <Form>
          <h1>Customer Register</h1>
          <FormGroup>
   
    <Input
      id="cust_fName"
      name="cust_fName"
      placeholder="First Name"
      value={cust_fName}
      onChange={(e)=>setFirstName(e.target.value)}
      
    />
  </FormGroup>
  <FormGroup>
    
    <Input
      id="cust_mName"
      name="cust_mName"
      placeholder=" Middle Name"
      value={cust_mName}
      onChange={(e)=>setMiddleName(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
   
    <Input
      id="cust_lName"
      name="cust_lName"
      placeholder="Last Name"
      value={cust_lName}
      onChange={(e)=>setLastName(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    
    <Input
      id="cust_email_id"
      name="cust_email_id"
      placeholder="Email Id"
      type="email"
      value={cust_email_id}
      onChange={(e)=>setEmail(e.target.value)}
    />

  </FormGroup>
  <FormGroup>
   
    <Input
      id="cust_password"
      name="cust_password"
      placeholder="Set Password"
      type="password"
      value={cust_password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    
    {/* <Input
      id="cpassword"
      name="cpassword"
      placeholder="Confirm password"
      type="password"
      // value={Cpassword}
      // onChange={(e)=>setCPassword(e.target.value)}
    /> */}
  </FormGroup>
  <FormGroup>
   
   <Input
     id="cust_phone_no"
     name="cust_phone_no"
     placeholder="Phone Number"
     value={cust_phone_no}
      onChange={(e)=>setPhoneNumber(e.target.value)}
   />
 </FormGroup>
  
  
  <FormGroup>
   
    <Input
      id="cust_address"
      name="cust_address"
      type="textarea"
      placeholder="Address"
      value={cust_address}
      onChange={(e)=>setAddress(e.target.value)}
    />
  </FormGroup>
  
  
    
   
 
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
     Accept the terms
    </Label>
  </FormGroup>

  <Button 
  onClick={handleClick}
  >
    Submit
  </Button>
</Form>
<Footer/>
    </div>
  )
}
