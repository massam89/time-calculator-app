import { Col, Row, Container } from "react-bootstrap";
import FormComp from "./components/FormComp";
import TimeList from "./components/TimeList";
import TotalTime from "./components/TotalTime";
import Help from "./components/Help";

function App() {

  return (
    <Container>
      <Row>
        <Col><h2 className="text-center mt-4">Time Calculator</h2></Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <FormComp />
          <TotalTime />
          <Help />
        </Col>
        <Col className="border mx-2 p-2">
          <TimeList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
