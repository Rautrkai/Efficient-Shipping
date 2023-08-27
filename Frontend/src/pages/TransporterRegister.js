import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function TransporterRegister() {
  const [t_full_name, setFirstName] = useState('');
  const [t_email_id, setEmail] = useState('');
  const [t_password, setPassword] = useState('');
  const [t_confirm_password, setConfirmPassword] = useState(''); // New state for confirm password
  const [t_ph_no, setPhoneNumber] = useState('');
  const [t_address, setAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [businessRegistrationImage, setBusinessRegistrationImage] = useState(null);

  const handleBusinessRegistrationImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const allowedFormats = ['image/jpeg', 'application/pdf'];
      const maxSize = 81920; // 80KB in bytes

      if (allowedFormats.includes(selectedFile.type) && selectedFile.size <= maxSize) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageData = event.target.result;
          setBusinessRegistrationImage(imageData);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        alert('Please select a valid file format (jpg/jpeg or pdf) within 80KB.');
        e.target.value = '';
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!t_email_id.toLowerCase().endsWith('@gmail.com')) {
      alert('Enter a valid email Id');
      return;
    }

    if (t_ph_no.length !== 10 || !/^\d+$/.test(t_ph_no)) {
      alert('Invalid phone number. Please enter a valid 10-digit phone number.');
      return;
    }

    if (!t_full_name || !t_password || !t_ph_no || !t_address || !isChecked || !businessRegistrationImage) {
      alert('Please fill in all required fields and upload a valid business registration image.');
      return;
    }

    if (t_password !== t_confirm_password) {
      alert('Password and confirm password do not match.');
      return;
    }

    const transporter = {
      t_full_name,
      t_email_id,
      t_address,
      t_ph_no,
      t_password,
      businessRegistrationImage: businessRegistrationImage.split(',')[1]
    };
    
    console.log(transporter);
    
    fetch("http://localhost:8282/home/transporter",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(transporter)
    }).then(() => {
      window.location.href = "/login";
      console.log("New transporter added");
    });
  } 
  
  return (
    <div>
      <Navbar />
      <Form>
        <h1>Transporter Register</h1>
  <FormGroup>
    <Input
      type="text"
      id="t_full_name"
      name="t_full_name"
      placeholder="Full Name"
      value={t_full_name}
      onChange={(e) => setFirstName(e.target.value)}
      required // Required attribute for the field
    />
  </FormGroup>

  <FormGroup>
  <Input
  id="t_email_id"
  name="t_email_id"
  placeholder="Email Id"
  type="email"
  value={t_email_id}
  onChange={(e) => setEmail(e.target.value)}
  required // Required attribute for the field
  pattern="[a-z0-9._%+-]+@gmail\.com$" // Pattern for @gmail.com emails
/>

  </FormGroup>
  <FormGroup>
          <Label for="t_password">Password</Label>
          <Input
            type="password"
            id="t_password"
            name="t_password"
            value={t_password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="t_confirm_password">Confirm Password</Label>
          <Input
            type="password"
            id="t_confirm_password"
            name="t_confirm_password"
            value={t_confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormGroup>
  <FormGroup>
  <Input
  type="text"
  id="t_ph_no"
  name="t_ph_no"
  placeholder="Phone Number"
  value={t_ph_no}
  onChange={(e) => setPhoneNumber(e.target.value)}
  required // Required attribute for the field
  pattern="[0-9]{1,10}" // Accept 1 to 10 digits
  maxLength={10} // Set maximum length to 10 characters
/>

  </FormGroup>

  <FormGroup>
    <Input
      id="t_address"
      name="t_address"
      type="textarea"
      placeholder="Address"
      value={t_address}
      onChange={(e) => setAddress(e.target.value)}
      required // Required attribute for the field
    />
  </FormGroup>

  <FormGroup>
          <Label for="businessRegistrationImage">Business Registration Image (Max 80KB)</Label>
          <Input
            type="file"
            id="businessRegistrationImage"
            name="businessRegistrationImage"
            accept=".jpg, .jpeg, .pdf"
            onChange={handleBusinessRegistrationImageChange}
            required // Required attribute for the field
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

  <Button onClick={handleClick}>Submit</Button>
</Form>

<Footer/>
    </div>
  )
}
