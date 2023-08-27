import React, { useState } from 'react'
import axios from 'axios'
// import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import NavBar from './NavBar'
export default function EstimatedPrice() {

    
  const[Rate,setRate]=useState('')
  const[Weight_charge_per_kg,setWeight_charge_per_kg]=useState('')
  // const[range_200_500,setRange2]=useState('')
  // const[range_500_above,setRange3]=useState('')

  const handleClick=(e)=>{
   
    const EstimatePrice = {
      price_per_km: Rate
    };    const t_id = JSON.parse(localStorage.getItem('t_id'));
  
    axios.post(`http://localhost:8282/transporter/estimatedprice/${Weight_charge_per_kg}`,EstimatePrice,{ params: {
      t_id
    }}).then(
      (response)=>{
         
           window.location.href = "/transSetting";
          
          
      },
      (error)=>{
       
          
          toast.error('invalid login');
          
      }
  );
  } 


  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,color:'crimson'}}>
  <div style={{ boxSizing: 'border-box', width: '50%', maxWidth: '600px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', background: 'white', marginTop: '80px' }}>
    <NavBar />
    <h1 style={{ fontFamily: 'Arial, sans-serif', color: 'black', marginBottom: '20px', textAlign: 'center' }}>Estimated Price</h1>
  
      <Form>
        <FormGroup>
          <Label for="Weight_charge_per_kg">Charges per kg</Label>
          <Input required
          style={{ width: '80%', borderWidth: '2px' }}        
              id="charge per kg"
            name="charge per kg"
            type="number"
            placeholder="charge per kg"
            value={Weight_charge_per_kg}
            onChange={(e) => setWeight_charge_per_kg(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Rate">Rate per km</Label>
          <Input
          style={{ width: '80%', borderWidth: '2px' }}        
          id="Rate"
            name="Rate"
            type="number"
            placeholder="Enter Rate per km For 1 kg"
            value={Rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </FormGroup>
  
        <Button
          onClick={handleClick}
          className="custom-button"
          style={{ width: '100%', color: 'white', border: 'none', outline: 'none', cursor: 'pointer' }}
        >
          Submit
        </Button>
      </Form>
    </div>
  </div>
  
)
}
