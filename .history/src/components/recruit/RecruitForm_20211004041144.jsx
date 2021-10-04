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
        <Col className="me-auto ">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter firstname" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter lastname" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="12 Smit St, ikeja, Lagos Mainland" />
            </Form.Group>

            <Form.Group>
                <p>Do you have a rider permit ?</p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
            </Form.Group>
<br />
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
