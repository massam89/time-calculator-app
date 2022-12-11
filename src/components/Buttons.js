import { Row, Col, Button } from "react-bootstrap";

const Buttons = () => {
  return (
    <Row>
      <Col className="text-center mt-3">
        <Button variant="success" className="mx-1">Add</Button>
        <Button variant="danger" className="mx-1">Clear</Button>
      </Col>
    </Row>
  );
};

export default Buttons;
