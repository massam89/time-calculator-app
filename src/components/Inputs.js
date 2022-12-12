import { useContext, useRef } from "react"
import { Row, Col, Form } from "react-bootstrap"
import { Context } from "../store/ContextProvider"

const Inputs = () => {
  const {state, updateFormStates, addItemToList, clearList} = useContext(Context)
  const hourInputRef = useRef()

  const formHandler  = (e) => {
    updateFormStates({
      type: e.target.placeholder,
      value: e.target.value
    })
  }

  const keyboardHandler = (e) => {
    if(e.key === 'Enter'){
      addItemToList()
      hourInputRef.current.focus()
    }else if(e.key === 'Escape'){
      clearList()
    }
  }

  return (
    <Row>
        <Col>
          <Form.Control ref={hourInputRef} placeholder="Hour" type="number" min='0' max='24' tabIndex="1" autoFocus onKeyDown={keyboardHandler} onChange={formHandler} value={state.hour} />
        </Col>
        <Col>
          <Form.Control placeholder="Minute" type="number" min='0' max='59' tabIndex="2" onKeyDown={keyboardHandler} onChange={formHandler} value={state.minute} />
        </Col>
      </Row>
  )
}

export default Inputs