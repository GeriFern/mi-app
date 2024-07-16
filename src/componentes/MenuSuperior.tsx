import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BellFill, GearFill, Grid3x3GapFill, PersonCircle } from 'react-bootstrap-icons';

const MenuSuperior: React.FC = () =>{

  const imageStyle = {
    width: 189,
    height: 30,
    position: 'absolute' as 'absolute',
    top: 20,
    left: 68
  };

    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Grid3x3GapFill size={44} color="#666667" /> 
            <Image src={logo} alt="Logo" style={imageStyle} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#notifications"><BellFill size={44}  /></Nav.Link>
            <Nav.Link href="#settings"><GearFill size={44} /></Nav.Link>
            <Nav.Link href="#profile"><PersonCircle size={44} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MenuSuperior;