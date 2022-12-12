import { Row, Card, ListGroup } from "react-bootstrap"

const Help = () => {
  return (
    <Row className="mt-3">
      <Card>
        <Card.Header>Help: How to work with keyboard</Card.Header>
        <Card.Body>
          <Card.Title>
          <ListGroup as="ul" style={{fontSize: '14px'}}>
            <ListGroup.Item as="li">Tab Key: change focus between inputs</ListGroup.Item>
            <ListGroup.Item as="li">Escape Key: Reset App</ListGroup.Item>
            <ListGroup.Item as="li">Enter Key: Add time to list</ListGroup.Item>
          </ListGroup>
          </Card.Title>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default Help