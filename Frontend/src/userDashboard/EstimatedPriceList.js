import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import NavBar from './NavBar'
import "../styles/Home.css";

// Retrieve the JSON string from localStorage
const estimateString = localStorage.getItem('price');

// Parse the JSON string back to an object
const estimate = JSON.parse(estimateString);

// Now you can use the 'estimate' object

const price = JSON.parse(localStorage.getItem('price'));
const distance = JSON.parse(localStorage.getItem('distance'));
const price_per_km = JSON.parse(localStorage.getItem('price_per_km'));
export default class EstimatedPriceList extends Component {

  render() {
  return (
    <div>
    <NavBar/>
    <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>
    <Table bordered striped>
               <thead>
                   <tr>
                       <th> price</th>
                       {/* <th> Range 2 (201-500)KMs</th>
                       <th> Range 3 (above 500)KMs</th> */}
                       <th> Actions</th>
                   </tr>
               </thead>
               <tbody>
                        <tr>   
                                <td> {estimate} </td>   
                                {/* <td> {range_200_500}</td>
                                <td> {range_500_above}</td> */}
                                <td><Button name="submit" href ="/kilometerRangeForm" style={{marginLeft: "20px"}} className="btn btn-info">Proceed</Button></td>
                        </tr>
                </tbody>
    </Table>
    </div>
    </div>
                   )
        }
}

