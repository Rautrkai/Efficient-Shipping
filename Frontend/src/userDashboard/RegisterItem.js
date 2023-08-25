import React, { useState } from 'react'
import NavBar from './NavBar'
// import "../styles/Home.css";
import { FormGroup, Input,Label,FormText,Form, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function RegisterItem() {

  const[item_name,setItemName]=useState('')
  const[item_weight,setItemWeight]=useState('')
  const[pickup_date,setPickupDate]=useState('')
  const[pickup_pincode,setPickupLocation]=useState('')
  const[pickup_state,setPickupState]=useState('')
  const[pickup_city,setPickupCity]=useState('')
  const[delivery_date,setDeliveryDate]=useState('')
  const[delivery_city,setDeliveryCity]=useState('')
  const[delivery_state,setDeliveryState]=useState('')
  const[delivery_status,setDeliveryStatus]=useState('')
  const[delivery_pincode,setDeliveryLocation]=useState('')
  const[description,setDescription]=useState('')
  const[item_image,setItemImage]=useState('')
  
  const handleClick=(e)=>{
   
    const itemdetail = {item_name,item_weight,description,pickup_pincode,pickup_state,pickup_city,delivery_pincode,delivery_state,delivery_city,delivery_status,item_image,delivery_date,pickup_date}
    const cust_id = JSON.parse(localStorage.getItem('cust_id'));
    // console.log(itemdetail,cust_id);
    axios.post(`http://localhost:8282/customer/itemdetails`,itemdetail,{ params: {
      cust_id
    }}).then(
      (response)=>{
         // toast.success('login successfull');
          console.log("success");
          console.log(response);
           window.location.href = "/items";
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
          <h1>Register Item</h1><br/>
  
  
  <FormGroup>
  <Label for="item_name">
      Item Name
    </Label>
    <Input
      id="item_name"
      name="item_name"
      placeholder="Item Name"
      type="text"
      value={item_name}
      onChange={(e)=>setItemName(e.target.value)}
    />
  </FormGroup>
 
  <FormGroup>
  <Label for="item_weight">
      Item Weight ( in kgs)
    </Label>
    <Input
      id="item_weight"
      name="item_weight"
      placeholder="Item Weight"
      type="text"
      value={item_weight}
      onChange={(e)=>setItemWeight(e.target.value)}
    />
  </FormGroup>
  
  <FormGroup hidden>
    <Label for="pickup_date" >
      Pickup Date
    </Label>
    <Input
      id="pickup_date"
      name="pickup_date"
      placeholder="Pickup Date"
      type="date"
      value={pickup_date}
      onChange={(e)=>setPickupDate(e.target.value)}
    />
  </FormGroup>
  {/* <FormGroup>
    <Label for="exampleTime">
      Pickup Time
    </Label>
    <Input
      id="exampleTime"
      name="Pickup time"
      placeholder="Pickup time "
      type="time"
    />
  </FormGroup> */}
   <FormGroup>
    <Label for="pickup_state">
      Pickup State
    </Label>
    <Input
      id="pickup_state"
      name="pickup_state"
      placeholder="Pickup State "
      type="text"
      value={pickup_state}
      onChange={(e)=>setPickupState(e.target.value)}
    />
  </FormGroup>
  <FormGroup>
    <Label for="pickup_city">
      Pickup City
    </Label>
    <Input
      id="pickup_city"
      name="pickup_city"
      type="select"
      value={pickup_city}
      onChange={(e)=>setPickupCity(e.target.value)}
    >
       <option value="none" selected disabled >
         Select an Option
         </option>
      <option>
        
      </option>
      <option>Pune</option>
      <option>Mumbai</option>
      <option>Kolhapur</option>
      <option>Nashik</option>
      <option>Dhule</option>
      <option>Nagpur</option>
    </Input>
  </FormGroup>

  <FormGroup>
    <Label for="pickup_pincode">
      Pickup Location
    </Label>
    <Input
      id="pickup_pincode"
      name="pickup_pincode"
      placeholder="Pickup Location "
      type="text"
      value={pickup_pincode}
      onChange={(e)=>setPickupLocation(e.target.value)}
    />
  </FormGroup>

  <FormGroup hidden>
    <Label for="delivery_date" > 
      Delivery Date
    </Label>
    <Input
      id="delivery_date"
      name="delivery_date"
      placeholder="Delivery Date"
      type="date"
      value={delivery_date}
      onChange={(e)=>setDeliveryDate(e.target.value)}
    />

  </FormGroup>
  <FormGroup>
    <Label for="delivery_state">
      Delivery State
    </Label>
    <Input
      id="delivery_state"
      name="delivery_state"
      placeholder="Delivery State "
      type="text"
      value={delivery_state}
      onChange={(e)=>setDeliveryState(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Label for="delivery_city">
      Delivery City
    </Label>
    <Input
      id="delivery_city"
      name="delivery_city"
      type="select"
      value={delivery_city}
      onChange={(e)=>setDeliveryCity(e.target.value)}
    >
       <option value="none" selected disabled>
         Select an Option
         </option>
        
         <option>
       </option>
      <option>Pune</option>
      <option>Mumbai</option>
      <option>Dhule</option>
      <option>Kolhapur</option>
      <option>Nashik</option>
      <option>Nagpur</option>
    </Input>
  </FormGroup>
  

  <FormGroup>
    <Label for="delivery_pincode">
      Delivery Location
    </Label>
    <Input
      id="delivery_pincode"
      name="delivery_pincode"
      placeholder="Delivery Location "
      type="text"
      value={delivery_pincode}
      onChange={(e)=>setDeliveryLocation(e.target.value)}
    />
  </FormGroup>

  <FormGroup>
    <Label for="description">
      Item Description
    </Label>
    <Input
      id="description"
      name="description"
      type="textarea"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
    />
  </FormGroup>
  
  <FormGroup>
  <Label for="item_image">
      Item image
    </Label>
    <Input
      id="item_image"
      name="item_image"
      type="text"
      value={item_image}
      onChange={(e)=>setItemImage(e.target.value)}
    />

  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Check me out
    </Label>
    
  </FormGroup>
  <Button
  onClick={handleClick}>
    Submit
  </Button>
</Form>
     
    </div>
  )
}
