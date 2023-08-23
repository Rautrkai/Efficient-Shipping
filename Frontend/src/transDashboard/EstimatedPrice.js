import React, { useState } from 'react'
import axios from 'axios'
// import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import NavBar from './NavBar'
export default function EstimatedPrice() {

    
  const[Rate,setRate]=useState('')
  // const[range_200_500,setRange2]=useState('')
  // const[range_500_above,setRange3]=useState('')

  const handleClick=(e)=>{
   
    const EstimatePrice = {price_per_km:Rate}
    const t_id = JSON.parse(localStorage.getItem('t_id'));
    // console.log(itemdetail,cust_id);
    axios.post(`http://localhost:8282/transporter/estimatedprice`,EstimatePrice,{ params: {
      t_id
    }}).then(
      (response)=>{
         // toast.success('login successfull');
          console.log("success");
          console.log(response);
           window.location.href = "/transSetting";
          //localStorage.setItem('c_id',response.data.c_id)
          
      },
      (error)=>{
       
          // alert("Invalid Login Details",error);
          toast.error('invalid login');
          console.log(error);
          console.log("Error");
      }
  );
  } 


  return (
    <div>
    <NavBar/>
    <Form style={{paddingTop:"120px"}}>
        <h1>Estimated Price</h1>
        <h5>Fill your estimated price as per the weight of item per kg</h5>

        <FormGroup>
  <Label for="Rate">
   Rate per km For 1 kg 
  </Label>
  <Input
    id="Rate"
    name="Rate"
    type="text"
    placeholder="Enter Rate per km For 1 kg "
    value={Rate }
    // value={this.state.range_0_200}
    onChange={(e)=>setRate(e.target.value)}
  >
    
  </Input>
</FormGroup>

{/* <FormGroup>
  <Label for="range_200_500">
   Range (200-500)Kms
  </Label>
  <Input
    id="range_200_500"
    name="range_200_500"
    type="text"
    placeholder="Enter price per kg for above range"
    value={range_200_500}
    onChange={(e)=>setRange2(e.target.value)}
  >
    
    
  </Input>
</FormGroup>

<FormGroup>
  <Label for="range_500_above">
   Range (500 & Above)Kms
  </Label>
  <Input
    id="range_500_above"
    name="range_500_above"
    type="text"
    placeholder="Enter price per kg for above range"
    value={range_500_above}
    onChange={(e)=>setRange3(e.target.value)}
  > */}
   
  {/* </Input>
</FormGroup> */}

<div>
<Button
onClick={handleClick}
>
submit</Button>
</div>
        </Form>
  </div>
)
}
