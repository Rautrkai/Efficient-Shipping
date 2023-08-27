import React, { useState,Component } from 'react'

import NavBar from './NavBar'
import "../styles/Home.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import axios from 'axios';


export default class KilometerRangeForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
       
        t_id: JSON.parse(localStorage.getItem('t_id')),
        item_Id: JSON.parse(localStorage.getItem('item_Id')),
        cust_id: JSON.parse(localStorage.getItem('cust_id')),
        price:JSON.parse(localStorage.getItem("price"))
      
    }
  }


submitForm = (e) => {
 
  
  const url = `http://localhost:8282/customer/bidder/${this.state.item_Id}?t_id=${this.state.t_id}&cust_id=${this.state.cust_id}&price=${this.state.price}`;
  fetch(url, { method: "POST" })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
  
  })
  .catch(error => {
    alert("Your product is added for booking");
    window.location.href = "/cPayment";
  });}
    render() {
    return (
      <div>
        
      <NavBar/>
      <Form style={{paddingTop:"120px"}}>
      <h3>Enter Your Kilometer Range</h3><br/>

  <Row form>
    <Col md={6}>
      <h1>confirm your order</h1>
      <FormGroup check>
    <Input type="checkbox"
        />
    {/* {' '} */}
    <Label check>
     Terms & Conditions : Your Kilometer Range should be accurate if not then it will add penalty to your payment
    </Label>
  </FormGroup>
    </Col>
    </Row>
    <Button
   onClick={this.submitForm}
    > 
    Submit
  </Button>
</Form>
     </div>
    
    )
  }
}