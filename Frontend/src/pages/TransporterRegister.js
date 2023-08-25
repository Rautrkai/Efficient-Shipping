import React ,{ useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function TransporterRegister() {

  const[t_full_name,setFirstName]=useState('')
  const[t_email_id,setEmail]=useState('')
  const[t_password,setPassword]=useState('')
  const[t_ph_no,setPhoneNumber]=useState('')
  const[t_address,setAddress]=useState('')
  
  const handleClick=(e)=>{
    e.preventDefault()
    const transporter = {t_full_name,t_email_id,t_address,t_ph_no,t_address,t_password}
    console.log(transporter);
    fetch("http://localhost:8282/home/transporter",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(transporter)
    }).then(()=>{
      window.location.href = "contact";
      console.log("new transporter added")
    })
  } 
  return (
    <div>
     <Navbar/>
     <Form>
          <h1>Transporter Register</h1>
          <FormGroup>
   
    <Input type='text'
      id="t_full_name"
      name="t_full_name"
      placeholder="Full Name"
      value={t_full_name}
      onChange={(e)=>setFirstName(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Input 
      id="t_email_id"
      name="t_email_id"
      placeholder="Email Id"
      type="email"
      value={t_email_id}
      onChange={(e)=>setEmail(e.target.value)}
    />

  </FormGroup>
  <FormGroup>
   
    <Input
      id="t_password"
      name="t_password"
      placeholder="Set Password"
      type="password"
      value={t_password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
   
   <Input type='number'
     id="t_ph_no"
     name="t_ph_no"
     placeholder="Phone Number"
     value={t_ph_no}
     onChange={(e)=>setPhoneNumber(e.target.value)}
   />
 </FormGroup>

  <FormGroup>
    <Input
      id="t_address"
      name="t_address"
      type="textarea"
      placeholder="Address"
      value={t_address}
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
