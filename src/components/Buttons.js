import { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Context } from "../store/ContextProvider";

const Buttons = () => {
  const {addItemToList, clearList} = useContext(Context)

  const addHandler = () => {
    addItemToList()
  }

  const resetHandler = () => {
    clearList()
  }

  return (
    <Row>
      <Col className="text-center mt-3">
        <Button variant="success" className="mx-1" tabIndex="-1" onClick={addHandler}>Add</Button>
        <Button variant="danger" className="mx-1" tabIndex="-1" onClick={resetHandler}>Reset</Button>
      </Col>
    </Row>
  );
};

export default Buttons;
