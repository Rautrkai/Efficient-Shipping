import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import NavBar from './NavBar'
import "../styles/Home.css";



 const price  = localStorage.getItem('price');
 const distance  = localStorage.getItem('distance');
 const price_per_km  = localStorage.getItem('price_per_km');
 const item_weight  = localStorage.getItem('item_weight');

export default class EstimatedPriceList extends Component {
  render() { 
  return (  
    <div>
    <NavBar/>
    <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>
    <Table bordered striped>
               <thead>
                   <tr>
                       <th> price_per_km</th>
                       <th> total distance</th>
                       <th> item weight</th>
                       <th> Total price</th> 
                        <th> Actions</th>
                   </tr>
               </thead>
               <tbody>
                            <tr>   
                            <td> {price_per_km}</td>
                            <td> {parseFloat(distance).toFixed(2)}  Km</td>  
                            <td> {item_weight}</td>
                            <td> {parseFloat(price).toFixed(2)} </td>
                                <td><Button name="submit" href ="/kilometerRangeForm" style={{marginLeft: "20px"}} className="btn btn-info">Proceed</Button></td>
                           </tr>
                           </tbody>
           </Table>
    </div>
</div>                 )
             }
}

