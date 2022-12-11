import { ListGroup } from "react-bootstrap";

const TimeList = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">02:00</ListGroup.Item>
      <ListGroup.Item as="li">02:00</ListGroup.Item>
      <ListGroup.Item as="li">02:00</ListGroup.Item>
    </ListGroup>
  );
};

export default TimeList;
