import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../store/ContextProvider";

const TimeList = () => {
  const {state} = useContext(Context)

  return (
    <ListGroup as="ul">
      {state.list.map((item, index) => <ListGroup.Item key={index} as="li">{item}</ListGroup.Item>)}
    </ListGroup>
  );
};

export default TimeList;
