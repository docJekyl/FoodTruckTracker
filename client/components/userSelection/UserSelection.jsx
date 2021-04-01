import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const UserSelect = (props) => {
  return(
    <div className="userSelect">
      <Container className="userSelectContainer">
      <h1>Hello from the FTTracker App!</h1>
        <Row>
          <Col>
            <Button
              name="vendor"
              onClick={props.setUser}
            >I'm a Vendor!</Button>
          </Col>
          <Col>
            <Button
              name="customer"
              onClick={props.setUser}
            >I'm Hungry!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserSelect;