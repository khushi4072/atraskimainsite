import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './Paymentform.css';
import { useNavigate } from "react-router-dom";


const PaymentForm = () => {
const[name,setname]=useState(" ")
const[email,setemail]=useState(" ")
const[Town,settown]=useState(" ")
const[Number,setno]=useState(" ")

const navigate= useNavigate()


  const handleChange = async() => {
    let data= await fetch("http://localhost:5000/formdata",{
      method:'post',
      body:JSON.stringify({name,email,Town,Number}),
      headers:{
        'Content-Type':'application/json',
      }

    })
    data= await data.json()

    if(Number.length !=10){
  alert('enter correct vakue')

    }
    else{
console.log(data);
alert("done")
navigate('/')
}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black mm">
    <div style={{backgroundColor:'#eee'}}>
    <Container className="py-5" style={{ width: "70vh"  }}>
      <h3 className="mb-3 text-black">Book a Hotel Room</h3>
      <Row>
        
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className="text-black">Name</Form.Label>
          <Form.Control
          style={{border:'1px solid black'}}
            type="text"
            name="name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            placeholder="Enter your name"
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="text-black">Email address</Form.Label>
          <Form.Control
          style={{border:'1px solid black'}}
            type="email"
            name="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            placeholder="Enter email"
            className="mb-3"
            required
          />
        </Form.Group>

        
            <Form.Group controlId="checkIn">
              <Form.Label className="text-black">Town/City</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="checkIn"
                value={Town}
                onChange={(e)=>{settown(e.target.value)}}
                className="mb-3"
                required
              />
            </Form.Group>
        
          
        
            <Form.Group controlId="checkOut">
              <Form.Label className="text-black">Mobile(whatsapp)</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="checkOut"
                value={Number}
                onChange={(e)=>{setno(e.target.value)}}
                className="mb-3"
               
                required
              />
            </Form.Group>
{/* 
        <Form.Group controlId="guests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            as="select"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
          </Form.Control>
        </Form.Group> */}

        {/* <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Optional: Leave a message for the hotel"
          />
        </Form.Group> */}

        <Button variant="primary" type="submit" onClick={handleChange}>
          Submit
        </Button>
      </Form>

        
      </Row>
          </Container>
          </div>
          </div>

  );
};

export default PaymentForm;
