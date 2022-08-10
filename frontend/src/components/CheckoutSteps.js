import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.steps1 ? 'active' : ''}>Sign-In</Col>
      <Col className={props.steps2 ? 'active' : ''}>Shipping</Col>
      <Col className={props.steps3 ? 'active' : ''}>Payment</Col>
      <Col className={props.steps4 ? 'active' : ''}>Place Order</Col>
    </Row>
  );
}
