import { Navbar, Container, Nav,Button  } from 'react-bootstrap';  
 


 function  NavBar() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg" bg="primary" >  
        <Container>  
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link href="#features">INICIO</Nav.Link>
              <Nav.Link href="#features">CATALOGO</Nav.Link>  
              <Nav.Link href="#pricing">REVISTA DIGITRAL</Nav.Link>  
            </Nav>  
            <Nav >  

              <Button>Registrarse</Button>
              <Button>Inicio de sesion</Button>

            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
  );  
}   



export default NavBar;  