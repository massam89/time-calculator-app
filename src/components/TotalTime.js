import { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { Context } from "../store/ContextProvider";

const TotalTime = () => {
  const {state} = useContext(Context)
  return (
    <Row className="mt-4">
      <Card>
        <Card.Header>Total Time</Card.Header>
        <Card.Body>
          <Card.Title><span className="h2">{state.total}</span></Card.Title>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default TotalTime;
