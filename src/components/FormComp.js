import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const FormComp = () => {
  return (
    <>
      <Row>
        <Col>
          <Form.Control placeholder="Hour" />
        </Col>
        <Col>
          <Form.Control placeholder="Minute" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <Button variant="success" className="mx-1">
            Add
          </Button>
          <Button variant="danger" className="mx-1">
            Clear
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default FormComp;
