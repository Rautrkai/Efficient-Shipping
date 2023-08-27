import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function CustomerRegister() {
  const [cust_fName, setFirstName] = useState('');
  const [cust_mName, setMiddleName] = useState('');
  const [cust_lName, setLastName] = useState('');
  const [cust_email_id, setEmail] = useState('');
  const [cust_password, setPassword] = useState('');
  const [cust_confirm_password, setConfirmPassword] = useState('');
  const [cust_phone_no, setPhoneNumber] = useState('');
  const [cust_address, setAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // Validation
    if (!cust_fName || !cust_mName || !cust_lName || !cust_email_id || !cust_password || !cust_confirm_password || !cust_phone_no || !cust_address ||
      !isChecked ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@gmail\.com$/.test(cust_email_id)) {
      alert('Invalid email. Please provide a valid Gmail email address.');
      return;
    }

    if (cust_password !== cust_confirm_password) {
      alert('Passwords do not match. Please enter the same password in both fields.');
      return;
    }

    if (cust_phone_no.length !== 10 || !/^\d+$/.test(cust_phone_no)) {
      alert('Invalid phone number. Please enter valid phone number.');
      return;
    }

    const customer = {
      cust_fName,
      cust_mName,
      cust_lName,
      cust_email_id,
      cust_password,
      cust_phone_no,
      cust_address
    };

    console.log(customer);

    fetch("http://localhost:8282/home/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    }).then(() => {
      window.location.href = "/login";
      console.log("new customer added");
    });
  }

  return (
    <div>
      <Navbar />
      <Form>
          <h1>Customer Register</h1>
          <FormGroup>
   
    <Input
      id="cust_fName"
      name="cust_fName"
      placeholder="First Name"
      value={cust_fName}
      onChange={(e)=>setFirstName(e.target.value)}
      required
      
    />
  </FormGroup>
  <FormGroup>
    
    <Input
      id="cust_mName"
      name="cust_mName"
      placeholder=" Middle Name"
      value={cust_mName}
      onChange={(e)=>setMiddleName(e.target.value)}
      required
    />
  </FormGroup>
  <FormGroup>
   
    <Input
      id="cust_lName"
      name="cust_lName"
      placeholder="Last Name"
      value={cust_lName}
      onChange={(e)=>setLastName(e.target.value)}
      required
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
      required
    />

  </FormGroup>
  <FormGroup>
            <Input
              id="cust_password"
              name="cust_password"
              placeholder="Set Password"
              type="password"
              value={cust_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="cust_confirm_password"
              name="cust_confirm_password"
              placeholder="Confirm Password"
              type="password"
              value={cust_confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
  </FormGroup>
  <FormGroup>
   
  <Input
  id="cust_phone_no"
  name="cust_phone_no"
  placeholder="Phone Number"
  type="text"
  value={cust_phone_no}
  onChange={(e) => setPhoneNumber(e.target.value)}
  required
  pattern="[0-9]*"
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
      required
    />
  </FormGroup>
  
  
    
   
  <FormGroup check>
          <Input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            required
          />
          <Label check>
            accept the Terms & Conditions
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
