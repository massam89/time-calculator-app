import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Context } from "../store/ContextProvider";

const TimeList = () => {
  const {state, deleteItem} = useContext(Context)



  return (
    <ListGroup as="ul">
      {state.list.map((item, index) => <ListGroup.Item key={index} as="li">
        <div className="d-flex justify-content-between">
          <span className="d-block h4">{item.text}</span>
          <Button variant="danger" size="sm" onClick={() => deleteItem(item)} >Remove</Button>
        </div>
       </ListGroup.Item>)}
    </ListGroup>
  );
};

export default TimeList;
