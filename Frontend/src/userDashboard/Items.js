import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import NavBar from './NavBar'
import DirectBookingService from '../components/userService/DirectBookingService'

export default class Items extends Component{

  
  constructor(props) {
    super(props)

    this.state = {
        items: []
    }
  
}


getItemsById(item_Id)
{
    console.log(item_Id);
    localStorage.setItem('item_Id',item_Id);
    window.location.href = "/directBooking"
   
}

getItemsByIdAuction(item_Id)
{
    console.log(item_Id);
    localStorage.setItem('item_Id',item_Id);
   window.location.href = "/auctionItemForm"

   
}



componentDidMount(){
    DirectBookingService.getItems().then((res) => {
        this.setState({ items: res.data});
        console.log(this.state.items);

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
      <th>Item Id</th>
      <th>Item Name </th>
      <th>Item Weight</th>
      <th>Pickup City </th>
      <th>Delivery City</th>

      <th> Book Item </th>
    </tr>
  </thead>
  <tbody>
  {
                                    this.state.items.map(
                                        item_details => 
                                        <tr key = {item_details.item_Id}>
                                           <td>{item_details.skuId}</td>
                           
                                        <td>{item_details.item_name}</td>
                                        <td>{item_details.item_weight}</td>
                                        <td>{item_details.pickup_city}</td>
                                        <td>{item_details.delivery_city}</td>
                                             <td>
                                             
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.i_id)} className="btn btn-info">View </button> */}
                                                 <button style={{marginLeft: "20px"}}  
                                                  onClick={ () => this.getItemsById(item_details.item_Id)} 
                                                 className="btn btn-warning">  Direct Booking</button>

                                                <button style={{marginLeft: "20px"}}  
                                                 onClick={ () => this.getItemsByIdAuction(item_details.item_Id)} 
                                                 className="btn btn-info"> Go for Auction </button>
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
