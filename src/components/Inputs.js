import { Row, Col, Form } from "react-bootstrap"

const Inputs = () => {
  return (
    <Row>
        <Col>
          <Form.Control placeholder="Hour" />
        </Col>
        <Col>
          <Form.Control placeholder="Minute" />
        </Col>
      </Row>
  )
}

export default Inputs