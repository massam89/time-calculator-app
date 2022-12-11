import { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/ContextProvider";

const Buttons = () => {
  const {addItemToList} = useContext(Context)

  const addHandler = () => {
    addItemToList()
  }

  return (
    <Row>
      <Col className="text-center mt-3">
        <Button variant="success" className="mx-1" onClick={addHandler}>Add</Button>
        <Button variant="danger" className="mx-1">Clear</Button>
      </Col>
    </Row>
  );
};

export default Buttons;
