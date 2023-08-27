import React, { Component } from 'react'
import { Button, Card, CardText, CardTitle, Col, Row, Table } from 'reactstrap'
import DirectBookingService from '../components/userService/DirectBookingService'
import NavBar from './NavBar'

export default class History extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            directhistory: [],
            auctionhistory: [],
            bidders: [],
           
        }
      
    }
 

    componentDidMount(){
        DirectBookingService.getDirectHistory().then((res) => {
            this.setState({ directhistory: res.data});
           
        });
      }



  render() {
    return (
      <div>
        <NavBar/>
        <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>

        <Row>
  <Col sm="12">
    <Card body>
      <CardTitle tag="h5">
        <b>Direct Booking History</b>
      </CardTitle>
      <CardText>
      <Table bordered striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th> Item Name  </th>
                  <th>Item Weight </th>
                  <th>Item Pickup Date</th>
                  <th>Item Delivery Date</th>
                  <th>Transporter Name</th>
                  <th>Transporter Contact No</th>
                  <th>status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                       this.state.directhistory.map(
                        dhistory => 
                        <tr key={dhistory.item_detail[0].item_Id}>
                            <td>{dhistory.item_detail[0].item_Id}</td>
                           <td>  {dhistory.item_detail[0].item_name} </td> 
                           <td>  {dhistory.item_detail[0].skuId} </td>  
                           <td>{new Date(dhistory.item_detail[0].pickup_date).toLocaleDateString()}</td>
                            <td>{new Date(dhistory.item_detail[0].delivery_date).toLocaleDateString()}</td>

                           <td>  {dhistory.transporter.t_full_name}</td> 
                           <td> {dhistory.transporter.t_ph_no}</td>
                           <td> {dhistory.item_detail[0].operation_status}</td>
                        </tr>
                       )
                  }
              </tbody>
        </Table>
      </CardText>
    </Card>
  </Col>
</Row>

        </div>
      </div>
    )
  }
}
