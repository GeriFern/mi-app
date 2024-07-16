import React from 'react';
import { Col, Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <Col lg={3} className="bg-light sidebar" style={{ height: '100%', overflowY: 'auto' }}>
      <Nav className="flex-column">
        <Nav.Link href="#dashboard">Menu item 1</Nav.Link>
        <Nav.Link href="#orders">Menu item 2</Nav.Link>

      </Nav>
    </Col>
  );
}

export default Sidebar;