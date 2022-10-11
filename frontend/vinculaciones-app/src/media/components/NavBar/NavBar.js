import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
  return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="ms-0">
            <Navbar.Brand href="#" c>LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="" >
                    
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