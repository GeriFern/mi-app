import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const MenuLeft: React.FC = () =>{
    return(
        <Container fluid style={{ flex: 1, overflow: 'hidden' }}>
        <Row style={{ height: '100%' }}>
        {/* Menú lateral izquierdo */}
        <Col md={3} className="bg-light sidebar" style={{ height: '100%', overflowY: 'auto' }}>
            <Nav className="flex-column">
            <Nav.Link href="#dashboard">Menu item 1</Nav.Link>
            <Nav.Link href="#orders">Menu item 2</Nav.Link>
            {/* Puedes agregar más elementos al menú lateral aquí */}
            </Nav>
        </Col>

        {/* Contenido principal */}
        <Col md={9} style={{ height: '100%', overflowY: 'auto' }}>
            <h1>Contenido Principal</h1>
            {/* Aquí iría el contenido principal de tu aplicación */}
        </Col>
        </Row>
    </Container>
    )
}

export default MenuLeft;