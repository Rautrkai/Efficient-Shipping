import React, { useState } from 'react';
import NavBar from './NavBar';
import { FormGroup, Input, Label, Form, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function RegisterItem() {
  const [item_name, setItemName] = useState('');
  const [item_weight, setItemWeight] = useState('');
  // const [pickup_date, setPickupDate] = useState('');
  const [pickup_pincode, setPickupLocation] = useState('');
  const [pickup_state, setPickupState] = useState('');
  const [pickup_city, setPickupCity] = useState('');
  // const [delivery_date, setDeliveryDate] = useState('');
  const [delivery_city, setDeliveryCity] = useState('');
  const [delivery_state, setDeliveryState] = useState('');
  const [delivery_pincode, setDeliveryLocation] = useState('');
  const [description, setDescription] = useState('');
  const [item_image, setItemImage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (
      !item_name ||
      !item_weight ||
      !pickup_state ||
      !pickup_city ||
      !pickup_pincode ||
      !delivery_state ||
      !delivery_city ||
      !delivery_pincode ||
      !description ||
      !item_image ||
      !isChecked
    ) {
      alert('Please fill  all fields ');
      return;
    }

    const itemdetail = {
      item_name,
      item_weight,
      description,
      pickup_pincode,
      pickup_state,
      pickup_city,
      delivery_pincode,
      delivery_state,
      delivery_city,
      item_image

    };

    const cust_id = JSON.parse(localStorage.getItem('cust_id'));

    axios
      .post(`http://localhost:8282/customer/itemdetails`, itemdetail, {
        params: {
          cust_id,
        },
      })
      .then(
        (response) => {
          console.log('success');
          console.log(response);
          window.location.href = '/items';
        },
        (error) => {
          toast.error('An error occurred while submitting the form.');
          console.log(error);
          console.log('Error');
        }
      );
  };

  return (
    <div>
      <NavBar />
      <Form style={{ paddingTop: '120px' }}>
        <h1>Register Item</h1>
        <br />

        <FormGroup>
          <Label for="item_name">Item Name</Label>
          <Input
            id="item_name"
            name="item_name"
            placeholder="Item Name"
            type="text"
            value={item_name}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="item_weight">Item Weight (in kgs)</Label>
          <Input
            id="item_weight"
            name="item_weight"
            placeholder="Item Weight"
            type="number"
            value={item_weight}
            onChange={(e) => setItemWeight(e.target.value)}
            required
          />
        </FormGroup>
  
  
 
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
  onChange={(e) => setPickupCity(e.target.value)}
>
  <option value="none" disabled>
    Select an Option
  </option>
  
  <option value="Ahmednagar">Ahmednagar</option>
  <option value="Akola">Akola</option>
  <option value="Amravati">Amravati</option>
  <option value="Aurangabad">Aurangabad</option>
  <option value="Bhiwandi">Bhiwandi</option>
  <option value="Bhusawal">Bhusawal</option>
  <option value="Chandrapur">Chandrapur</option>
  <option value="Dhule">Dhule</option>
  <option value="Kalyan">Kalyan</option>
  <option value="Kolhapur">Kolhapur</option>
  <option value="Latur">Latur</option>
  <option value="Malegaon">Malegaon</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Nanded">Nanded</option>
  <option value="Nasik">Nasik</option>
  <option value="Parbhani">Parbhani</option>
  <option value="Pune">Pune</option>
  <option value="Sangli">Sangli</option>
  <option value="Sholapur">Sholapur</option>
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
  onChange={(e) => setDeliveryCity(e.target.value)}
>
  <option value="none" selected disabled>
    Select an Option
  </option>
  
  <option value="Ahmednagar">Ahmednagar</option>
  <option value="Akola">Akola</option>
  <option value="Amravati">Amravati</option>
  <option value="Aurangabad">Aurangabad</option>
  <option value="Bhiwandi">Bhiwandi</option>
  <option value="Bhusawal">Bhusawal</option>
  <option value="Chandrapur">Chandrapur</option>
  <option value="Dhule">Dhule</option>
  <option value="Kalyan">Kalyan</option>
  <option value="Kolhapur">Kolhapur</option>
  <option value="Latur">Latur</option>
  <option value="Malegaon">Malegaon</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Nanded">Nanded</option>
  <option value="Nasik">Nasik</option>
  <option value="Parbhani">Parbhani</option>
  <option value="Pune">Pune</option>
  <option value="Sangli">Sangli</option>
  <option value="Sholapur">Sholapur</option>
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
  onClick={handleClick}>
    Submit
  </Button>
</Form>
    </div>
  
  )
}