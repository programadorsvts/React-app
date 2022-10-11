import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Button } from 'react-bootstrap';

function NavBar() {
  return (
        <Navbar bg="dark" variant="dark"  expand="lg" >
        <Container >
            <Navbar.Brand href="#" className="ms-0">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="ms-5" bg="primary">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Catalogo</Nav.Link>
                    <Nav.Link href="#">Revista Digital</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default NavBar;