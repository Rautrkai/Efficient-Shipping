import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import axios from 'axios';


const cust_id=localStorage.getItem("cust_id")
const item_Id=localStorage.getItem("item_Id")
const b_price=localStorage.getItem("b_price")


export default function CPayment() {
  const [account_number, setAccountNumber] = useState('');
  const cust_payment = parseInt(JSON.parse(localStorage.getItem('price')), 10);
  const [paymentAmount, setPaymentAmount] = useState(cust_payment || b_price);
  const [razorpay_payment_id, setrazorpay_payment_id ] = useState("");

  razorpay_payment_id
  useEffect(() => {
    // Load the Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const Payment={
    account_number:account_number,
    cust_payment:paymentAmount,
    paymentId:razorpay_payment_id,
    cust_id:cust_id
  }
  const handlePayment = () => {
    const amountInPaisa = paymentAmount * 100;

    const options = {
      key: 'rzp_test_Ru6qlRB4cmPDhH',
      amount: amountInPaisa,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for your order',
      image: 'https://your-company-logo.png',
      "handler": function (response){
        axios.post(`http://localhost:8282/customer/payment/${cust_id}/${item_Id}`,Payment)
        .then((response) => {
          // Handle the response from the backend
          console.log('Payment success notification sent:', response.data);
          alert('Payment successful!'); // Show alert for successful payment
        })
        .catch((error) => {
          // Handle errors if the request fails
          console.error('Error sending payment success notification:', error);
        });
        setrazorpay_payment_id(response.razorpay_payment_id);
}
    };

    const rzpInstance = new window.Razorpay(options);
    rzpInstance.open();

    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
 
  };

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px' }}>
        <Form style={{ paddingTop: '120px' }} onSubmit={handleSubmit}>
          <h3>Enter Account Number and Payment Amount</h3>
          <br />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="account_number">Account Number</Label>
                <Input
                  required
                  id="account_number"
                  name="account_number"
                  placeholder="Enter account number"
                  type="text"
                  value={account_number}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
  <Label for="payment_amount">Payment Amount (in Rupees)</Label>
  <Input
    id="payment_amount"
    name="payment_amount"
    placeholder="Enter payment amount"
    type="number"
    min={1}
    value={paymentAmount}
    onChange={(e) => setPaymentAmount(parseInt(e.target.value, 10))}
    readOnly // Add this attribute to make the input read-only
  />
</FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" required />
            <Label check>
              Terms & Conditions: Please verify the account details before proceeding.
            </Label>
          </FormGroup>
          <Button type="submit">Pay with Razorpay</Button>
        </Form>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import NavBar from './NavBar';
// import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
// import axios from 'axios';


//  export default function CPayment() {

//   const [account_number, setAccountNumber] = useState('');
//   const cust_payment = parseInt(JSON.parse(localStorage.getItem('price')), 10); // Parse as integer
//   const [paymentAmount, setPaymentAmount] = useState(cust_payment || 1); // Default to cust_payment or 1 rupee

//   useEffect(() => {
//     // Load the Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);
//   const handlePayment = () => {
//     const amountInPaisa = paymentAmount * 100; // Convert to paisa

//     const options = {
//       key: 'rzp_test_Ru6qlRB4cmPDhH', // Replace with your Razorpay API key
//       amount: amountInPaisa,
//       currency: 'INR',
//       name: 'Your Company Name',
//       description: 'Payment for your order',
//       image: 'https://your-company-logo.png',
//       // Add other required options here
//     };

//     const rzpInstance = new window.Razorpay(options);
//     rzpInstance.open();
//   };
//   let rzpInstance; 
//    const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     alert("hh")

//     // Open Razorpay payment modal
//     handlePayment();
//     rzpInstance.on('payment.success', (response) => {
//       // Payment successful, send Axios POST request to your Java backend
//       alert("hello")
//       const paymentData = {
//         orderId: response.razorpay_order_id,
//         paymentId: response.razorpay_payment_id,
//         signature: response.razorpay_signature,
//         amount: paymentAmount,
//         accountNumber: account_number,
//         // Other relevant data
//       };
      
//       axios.get('http://localhost:8282/customer/payment')
//         .then((response) => {
//           // Handle the response from the backend
//           console.log('Payment success notification sent:', response.data);
//         })
//         .catch((error) => {
//           // Handle errors if the request fails
//           console.error('Error sending payment success notification:', error);
//         });
//     });
    
//   }
//   return (
//     <div>
//       <NavBar />
//       <div style={{ paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px' }}>
//         <Form style={{ paddingTop: '120px' }} onSubmit={handleSubmit}>
//           <h3>Enter Account Number and Payment Amount</h3>
//           <br />
//           <Row form>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="account_number">Account Number</Label>
//                 <Input
//                   required
//                   id="account_number"
//                   name="account_number"
//                   placeholder="Enter account number"
//                   type="text"
//                   value={account_number}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="payment_amount">Payment Amount (in Rupees)</Label>
//                 <Input
//                   id="payment_amount"
//                   name="payment_amount"
//                   placeholder="Enter payment amount"
//                   type="number"
//                   min={1}
//                   value={paymentAmount}
//                   onChange={(e) => setPaymentAmount(parseInt(e.target.value, 10))}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <FormGroup check>
//             <Input type="checkbox" required />
//             <Label check>
//               Terms & Conditions: Please verify the account details before proceeding.
//             </Label>
//           </FormGroup>
//           <Button type="submit">Pay with Razorpay</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// // const submitForm = (e) => {
// //  const item_Id = JSON.parse(localStorage.getItem('item_Id'));
// //   const cust_id =JSON.parse(localStorage.getItem('cust_id'));
// //   const cust_payment = JSON.parse(localStorage.getItem('price'));

// //     const url = "http://localhost:8282/customer/payment?cust_id=" + cust_id + "&item_Id=" + item_Id;
// //     const paymentdetails = {account_number,cust_payment};
// //     fetch(url,
// //       {
       
// //         method:"POST",
// //         headers:{"Content-Type":"application/json"},
// //         body:JSON.stringify(paymentdetails)
// //     }
// //     ).then(response => response.json())
// //             .then(data => 
// //                 {
                          
// //             });
// //             alert("Payment Done SuccessFully");
// //             window.location.href="/items";

// // }

  
// //     return (
// //       <div>
// //         <NavBar/>
// //         <div style={{paddingTop:"120px", paddingLeft:"20px" , paddingRight:"20px" }}>

// //         <Form style={{paddingTop:"120px"}}>
// //       <h3>Enter Account Number</h3><br/>

// //   <Row form>
// //     <Col md={6}>
// //       <FormGroup>
// //           <Input
// //           id="account_number"
// //           name="account_number"
// //           placeholder="Enter your Account No"
// //           type="text"
// //           value={account_number}
// //           onChange={(e)=>setAccountNumber(e.target.value)}
// //         />
// //       </FormGroup>
// //       <FormGroup>
// //           <Input
// //           id="cust_payment"
// //           name="cust_payment"
// //           value={parseFloat(cust_payment).toFixed(2)}
// //           readOnly= {true}
         
// //         />
// //       </FormGroup>


// //       <FormGroup check>
// //     <Input type="checkbox"
// //         />
    
// //     <Label check>
// //      Terms & Conditions : Your Kilometer Range should be accurate if not then I will add penalty to your payment
// //     </Label>
// //   </FormGroup>
// //     </Col>
// //     </Row>
// //     <Button
// //    onClick={submitForm}
// //     > 
// //     Submit
// //   </Button>
// // </Form>
// //             </div> 
// //       </div>
// //     )
// //   }

// import React, { useState, useEffect } from 'react';
// import NavBar from './NavBar';
// import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

// export default function CPayment() {
//   const [account_number, setAccountNumber] = useState('');
//   const [paymentAmount, setPaymentAmount] = useState(1); // Initialize with 1 rupee

//   useEffect(() => {
//     // Load the Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handlePayment = () => {
//     const amountInPaisa = paymentAmount * 100; // Amount in paisa

//     const options = {
//       key: 'rzp_test_Ru6qlRB4cmPDhH', // Replace with your Razorpay API key
//       amount: amountInPaisa,
//       currency: 'INR',
//       name: 'Your Company Name',
//       description: 'Payment for your order',
//       image: 'https://your-company-logo.png',
//       // Add other required options here
//     };

//     const rzpInstance = new window.Razorpay(options);
//     rzpInstance.open();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Set the payment amount based on the input value
//     setPaymentAmount(parseFloat(paymentAmount));

//     // Open Razorpay payment modal
//     handlePayment();
//   };

//   return (
//     <div>
//       <NavBar />
//       <div style={{ paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px' }}>
//         <Form style={{ paddingTop: '120px' }} onSubmit={handleSubmit}>
//           <h3>Enter Account Number and Payment Amount</h3>
//           <br />
//           <Row form>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="account_number">Account Number</Label>
//                 <Input
//                   required
//                   id="account_number"
//                   name="account_number"
//                   placeholder="Enter account number"
//                   type="text"
//                   value={account_number}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="payment_amount">Payment Amount (in Rupees)</Label>
//                 <Input
//                   required
//                   id="payment_amount"
//                   name="payment_amount"
//                   placeholder="Enter payment amount"
//                   type="number"
//                   min={1} // Set minimum value to 1
//                   value={paymentAmount}
//                   onChange={(e) => setPaymentAmount(parseFloat(e.target.value))}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <FormGroup check>
//             <Input type="checkbox" required />
//             <Label check>
//               Terms & Conditions: Please verify the account details before proceeding.
//             </Label>
//           </FormGroup>
//           <Button type="submit">Pay with Razorpay</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }


// export default function CPayment() {
//   const [account_number, setAccountNumber] = useState('');
//   const cust_payment = parseInt(JSON.parse(localStorage.getItem('price')), 10); // Parse as integer
//   const [paymentAmount, setPaymentAmount] = useState(cust_payment || 1); // Default to cust_payment or 1 rupee

//   useEffect(() => {
//     // Load the Razorpay script
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handlePayment = () => {
//     const amountInPaisa = paymentAmount * 100; // Convert to paisa
   
//     const options = {
//       key: 'rzp_test_Ru6qlRB4cmPDhH', // Replace with your Razorpay API key
//       amount: amountInPaisa,
//       currency: 'INR',
//       name: 'Your Company Name',
//       description: 'Payment for your order',
//       image: 'https://your-company-logo.png',
//       // Add other required options here
//     };
   
//     const rzpInstance = new window.Razorpay(options);
  
//     rzpInstance.on('payment.success', (response) => {
//       // Payment successful, send Axios POST request to your Java backend
      
//       const paymentData = {
//         orderId: response.razorpay_order_id,
//         paymentId: response.razorpay_payment_id,
//         signature: response.razorpay_signature,
//         amount: paymentAmount,
//         accountNumber: account_number,
//         // Other relevant data
//       };
//       alert("he")
//       axios.post('http://localhost:8282/customer/payment', paymentData)
//         .then((response) => {
//           // Handle the response from the backend
//           console.log('Payment success notification sent:', response.data);
//         })
//         .catch((error) => {
//           // Handle errors if the request fails
//           console.error('Error sending payment success notification:', error);
//         });
//     });
  
//     rzpInstance.open();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Open Razorpay payment modal
//     handlePayment();
//   };

//   return (
//     <div>
//       <NavBar />
//       <div style={{ paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px' }}>
//         <Form style={{ paddingTop: '120px' }} onSubmit={handleSubmit}>
//           <h3>Enter Account Number and Payment Amount</h3>
//           <br />
//           <Row form>
//             <Col md={6}>
//               <FormGroup>
//                 <Label for="account_number">Account Number</Label>
//                 <Input
//                   required
//                   id="account_number"
//                   name="account_number"
//                   placeholder="Enter account number"
//                   type="text"
//                   value={account_number}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="payment_amount">Payment Amount (in Rupees)</Label>
//                 <Input
//                   id="payment_amount"
//                   name="payment_amount"
//                   placeholder="Enter payment amount"
//                   type="number"
//                   min={1}
//                   value={paymentAmount}
//                   onChange={(e) => setPaymentAmount(parseInt(e.target.value, 10))}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//           <FormGroup check>
//             <Input type="checkbox" required />
//             <Label check>
//               Terms & Conditions: Please verify the account details before proceeding.
//             </Label>
//           </FormGroup>
//           <Button type="submit">Pay with Razorpay</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }