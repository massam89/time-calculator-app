import { useContext } from "react"
import { Row, Col, Form } from "react-bootstrap"
import { Context } from "../store/ContextProvider"

const Inputs = () => {
  const {state, updateFormStates} = useContext(Context)

  const formHandler  = (e) => {
    updateFormStates({
      type: e.target.placeholder,
      value: e.target.value
    })
  }

  return (
    <Row>
        <Col>
          <Form.Control placeholder="Hour" type="number" min='0' max='24' onChange={formHandler} value={state.hour} />
        </Col>
        <Col>
          <Form.Control placeholder="Minute" type="number" min='0' max='59' onChange={formHandler} value={state.minute} />
        </Col>
      </Row>
  )
}

export default Inputs