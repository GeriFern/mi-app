import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';

interface MobileSidebarProps {
  show: boolean;
  onHide: () => void;
}

function MobileSidebar({ show, onHide }: MobileSidebarProps) {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>MenÃº</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#orders">Pedidos</Nav.Link>
          <Nav.Link href="#products">Productos</Nav.Link>
          <Nav.Link href="#customers">Clientes</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default MobileSidebar;