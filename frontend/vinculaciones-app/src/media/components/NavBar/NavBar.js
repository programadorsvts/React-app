import { Navbar, Container, Nav,Button  } from 'react-bootstrap';  
 


 function  NavBar() {  
  return (  
    <>  
      <Navbar collapseOnSelect expand="lg"  bg="primary" >  
        <Container>  
          <Navbar.Brand href="" className="ms-0">
            <Navbar.Brand href="">
              
                <img src="'../../image/icons/escudounslweb.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
          
          </Navbar.Brand>
                 
            </Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="me-auto ">  
              <Nav.Link href="#features" className="text-light">INICIO</Nav.Link>
              <Nav.Link href="#features" className="text-light">CATALOGO</Nav.Link>  
              <Nav.Link href="#pricing" className="text-light">REVISTA DIGITRAL</Nav.Link>  
            </Nav>  
            <Nav >  

              <Button className="bg-secondary text-dark ms-1 mt-1 ms-2">registrarse</Button>
              <Button className="bg-secondary text-dark ms-1 mt-1 ms-2">iniciar sesion</Button>

            </Nav>  
            
          </Navbar.Collapse>  
          <img src="'../../image/icons/escudounslweb.png" width="30" height="30" className="d-inline-block align-top ms-2" alt=""/>
        </Container>  
      </Navbar>  
    </>  
  );  
}   



export default NavBar;  