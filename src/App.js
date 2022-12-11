import { Col, Row, Container } from "react-bootstrap";
import FormComp from "./components/FormComp";
import TimeList from "./components/TimeList";
import TotalTime from "./components/TotalTime";

function App() {

  return (
    <Container>
      <Row>
        <Col><h1 className="text-center mt-4">Time Calculator</h1></Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <FormComp />
          <TotalTime />
        </Col>
        <Col>
          <TimeList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
