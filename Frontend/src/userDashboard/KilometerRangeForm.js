import React, { useState,Component } from 'react'

import NavBar from './NavBar'
import "../styles/Home.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import axios from 'axios';


export default class KilometerRangeForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
        // kmrange: "",
        t_id: JSON.parse(localStorage.getItem('t_id')),
        item_Id: JSON.parse(localStorage.getItem('item_Id')),
        cust_id: JSON.parse(localStorage.getItem('cust_id')),
        price:JSON.parse(localStorage.getItem("price"))
      
    }
  }
//   handleChange1 = (a) => {
//     this.setState({ kmrange: a.target.value });
//     console.log(this.state.kmrange);

// }

submitForm = (e) => {
  
  alert(this.state.price)
  alert(this.state.cust_id)
  alert(this.state.item_Id)
  
  console.log(this.state.t_id,this.state.item_Id,this.state.cust_id,this.state.price);
    const url = "http://localhost:8080/customer/bidder?t_id=" + this.state.t_id + "&item_id=" + this.state.item_Id + "&cust_id=" + this.state.cust_id + "&price=" + this.state.price;
    fetch(url,{method:"POST"}
    ).then(response => response.json())
            .then(data => 
                {
                   localStorage.setItem('b_price',data.b_price);
                        // console.log(url);
                        console.log(data);       
            });
            alert("your product is added for booking");
            window.location.href="/cPayment";

}

   

    render() {
    return (
      <div>
        
      <NavBar/>
      <Form style={{paddingTop:"120px"}}>
      <h3>Enter Your Kilometer Range</h3><br/>

  <Row form>
    <Col md={6}>
      {/* <FormGroup>
          <Input
          id="kmrange"
          name="kmrange"
          placeholder="confirm your order"
          type="text"
          value={this.state.kmrange}
          onChange={this.handleChange1}
        />
      </FormGroup> */}
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