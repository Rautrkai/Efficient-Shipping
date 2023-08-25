import React, { Component, useState } from 'react'
import NavBar from './NavBar'
import "../styles/Home.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default function CPayment() {

  const[account_number,setAccountNumber]=useState('')
  const cust_payment = JSON.parse(localStorage.getItem('price'));


const submitForm = (e) => {
 const item_Id = JSON.parse(localStorage.getItem('item_Id'));
  const cust_id =JSON.parse(localStorage.getItem('cust_id'));
  const cust_payment = JSON.parse(localStorage.getItem('price'));

    const url = "http://localhost:8282/customer/payment?cust_id=" + cust_id + "&item_Id=" + item_Id;
    const paymentdetails = {account_number,cust_payment};
    fetch(url,
      {
       
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(paymentdetails)
    }
    ).then(response => response.json())
            .then(data => 
                {
                          
            });
            alert("Payment Done SuccessFully");
            window.location.href="/items";

}

  
    return (
      <div>
        <NavBar/>
        <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>

        <Form style={{paddingTop:"120px"}}>
      <h3>Enter Account Number</h3><br/>

  <Row form>
    <Col md={6}>
      <FormGroup>
          <Input
          id="account_number"
          name="account_number"
          placeholder="Enter your Account No"
          type="text"
          value={account_number}
          onChange={(e)=>setAccountNumber(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
          <Input
          id="cust_payment"
          name="cust_payment"
          value={parseFloat(cust_payment).toFixed(2)}
          readOnly= {true}
         
        />
      </FormGroup>


      <FormGroup check>
    <Input type="checkbox"
        />
    
    <Label check>
     Terms & Conditions : Your Kilometer Range should be accurate if not then I will add penalty to your payment
    </Label>
  </FormGroup>
    </Col>
    </Row>
    <Button
   onClick={submitForm}
    > 
    Submit
  </Button>
</Form>
            </div> 
      </div>
    )
  }

