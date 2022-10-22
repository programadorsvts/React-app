
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {['lg' ].map((expand) => (
        <Navbar key={expand}  bg="primary" expand={expand} className="">
          <Container fluid bg="primary">

            <Navbar.Brand href="#" className="text-secondary" bg="primary"></Navbar.Brand>

                <img src="'../../image/icons/escudounslweb.png" width="30" height="30" className="d-inline-block align-top  justify-content-start" alt=""/>
                <img src="'../../image/icons/escudounslweb.png" width="30" height="30" className="d-inline-block align-top  " alt=""/>  
               

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />

            <Navbar.Offcanvas  id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton >
                
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>

              </Offcanvas.Header>
              
              <Offcanvas.Body bg="primary" >
                
                <Nav className="justify-content-start  flex-grow-1 pe-3" >
                  
                  
                <Nav.Link href="#features" className="text-light">INICIO</Nav.Link>
                
                <Nav.Link href="#pricing" className="text-light">REVISTA DIGITRAL</Nav.Link>
                <Nav.Link href="#pricing" className="text-light">OBSERVATORIO</Nav.Link>   
                

                </Nav>
                <Nav className="justify-content-end">

                  <Button className="bg-secondary text-dark ms-1 mt-1 ms-2  ">Registrarse</Button>
                  <Button className="bg-secondary text-dark ms-1 mt-1 ms-2  ">Iniciar sesion</Button>
                   
                </Nav>
                
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;