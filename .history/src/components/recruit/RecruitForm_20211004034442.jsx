import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import Left from "../images/background.jpg";
import "./RecruitForm.css";

const recruitForm = () => {
  return (
    <div className="container-fluid" id="recruit">
      <div className="mt-2 justify-content-md-center" id="top">
        <h1 className="text-center">Logistics with unquestionable services</h1>
        <h3 className="text-center">Your best delivery choice</h3>
        <h5 className="text-center">we are recruiting riders within Lagos</h5>
      </div>
      <Row className="mt-2">
        <Col className=" mb-2 ms-auto text-center">
          <img src={Left} alt="" />
        </Col>
        <Col className="me-auto">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label className='ms-1'>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className='ms-auto'>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default recruitForm;
