import { useContext } from "react";
import { Row, Card } from "react-bootstrap";
import { Context } from "../store/ContextProvider";

const TotalTime = () => {
  const {state} = useContext(Context)
  return (
    <Row className="mt-5">
      <Card>
        <Card.Header>Total Time</Card.Header>
        <Card.Body>
          <Card.Title>{state.total}</Card.Title>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default TotalTime;
