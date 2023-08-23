import React, { useState } from 'react'
import NavBar from './NavBar'
import "../styles/Home.css";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function FeedBack() {

  
  const[i_id,setIId]=useState('')
  const[cust_id,setTId]=useState('')
  const[description,setDescription]=useState('')
  
  const handleClick=(e)=>{
    
    const cust_id = JSON.parse(localStorage.getItem('cust_id'));

  // console.log("c_id is "+c_id);
  // console.log("i_id" +i_id);
    const customer = {description}
    alert(description);
    const url = "http://localhost:8282/customer/feedback?cust_id=" +cust_id;
    alert(url);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log("Response data:", data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch operation
        console.error("Fetch error:", error);
      });
    }

  return (
    <div>
      <NavBar/>
      <div className="home" >
   
      <div className="headerContainer">
        <h1 style={{color:"black"}}>Feedback and Complaint</h1><br></br>
       
        <br></br>
       
        
      </div>
      
      <Form inline>
 
 
  
  {' '}
  {/* <FormGroup>
    <Label
      for="i_id"
      hidden
    >
      Item ID
    </Label>
    <Input
      id="i_id"
      name="i_id"
      placeholder="Item ID"
      type="text"
      // value={i_id}
      value={i_id === null ? '-1' : i_id}

      onChange={(e)=>setIId(e.target.value)}
     
    />
  </FormGroup> */}
  {' '}
  {/* <FormGroup>
    <Label
      for="c_id"
      hidden
    >
      Transporter Id
    </Label>
    <Input
      id="c_id"
      name="c_id"
      placeholder="Customer ID"
      type="text"
      value={c_id}
      // value={t_id === null ? '' : this.state[row_array[0]]}

      onChange={(e)=>setTId(e.target.value)}
   
    />
  </FormGroup> */}
  {' '}
  <FormGroup>
    <Label
      for="description"
      hidden
    >
      Password
    </Label>
    <Input
      id="description"
      name="description"
      placeholder="Description"
      type="textarea"
      value={description}
      
      onChange={(e)=>setDescription(e.target.value)}
    />
  </FormGroup>
  <Button
   onClick={handleClick}
   
  >
    Submit
  </Button>
</Form>
      </div>
      
    </div>
  )
}
