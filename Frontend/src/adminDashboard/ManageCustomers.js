import React, { Component } from 'react'
import { Table } from 'reactstrap'

import DirectBookingService from '../components/userService/DirectBookingService'

import NavBar from './NavBar'

export default class ManageCustomers extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            customers: [],
           
        }
      
    }

    //for transporter verification

    onSubmit(cust_id)
    {
      console.log(cust_id);
     
      const requestOption=
      {
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ title: 'React PUT Request Example' })
        
      }
     
        fetch(`http://localhost:8282/admin/customer/${cust_id}`,requestOption).then(
          resp=>resp.text()
          ).then(()=> {
            console.log("status changed successfully");
        window.location.href = "/manageCustomers";
      })
    } 
 
    
   
    componentDidMount(){
       

        DirectBookingService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
            console.log(this.state.customers);
        });

      
    
  

    }
    
   
  render() {
    return (
      <div>
        <NavBar/>
        <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>
    <Table bordered striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th>  First Name  </th>
                  <th>Last Name </th>
                  <th>Email Id</th>
                  <th> Address </th>
                  <th>Phone Number</th>
                  
                  <th>BlackList</th>
                  
                  <th>Block/Clear</th>
                
                </tr>
              </thead>
              <tbody>
              {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.cust_id}>
                                            <td>{customer.cust_id}</td>
                                             <td> { customer.cust_fName} </td>   
                                             <td> {customer.cust_lName}</td>
                                             <td> {customer.cust_email_id}</td>
                                             <td> {customer.cust_address}</td>
                                             <td> {customer.cust_phone_no}</td>
                                           
                                            
                                             <td> {customer.cust_blacklist}</td>
                                           
                                               <td>
                                               <button style={{marginLeft: "10px"}} 
                                            onClick={ () => this.onSubmit(customer.cust_id)} 
                                            className="btn btn-info"
                                            
                                            >Block/Clear </button>
                                               </td>
                                           
                                        </tr>
                                    )
                                }  
              </tbody>
              </Table>

</div>

</div>
)
}
}
