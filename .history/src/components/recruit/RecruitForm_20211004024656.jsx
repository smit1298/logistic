import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import {Left} from '../images/'
import "./RecruitForm.css";

const recruitForm = () => {
  return (
    <div className="container-fluid" id="recruit">
      <div className="mt-2 justify-content-md-center" id="top">
        <h1 className="text-center">Logistics with unquestionable services</h1>
        <h3 className="text-center">Your best delivery choice</h3>
        <h5 className="text-center">we are recruiting riders</h5>
      </div>
      <Row className="justify-content-md-center">
        <Col><img src={Left} alt="" /></Col>
        <Col >2 of 2</Col>
      </Row>
    </div>
  );
};
export default recruitForm;
