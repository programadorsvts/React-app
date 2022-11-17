
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {NavLink,useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';


import './navbar.css';

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      {['lg' ].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar" sticky="top">
          <Container fluid bg="primary">
            <Navbar.Brand href="/">
              <img src='/assets/svgs/Solo-LogoSVTS.svg'  width="100" height="50" className="d-inline-block " alt=""/>
              
            </Navbar.Brand>
            <Navbar.Toggle className='navbar-toggler' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='menu-toggle' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start  flex-grow-1" >
                <NavLink to="/" className="text-3">inicio</NavLink>
                <NavLink to="/RevistaDigitalPage" className="text-3">Revista Digital</NavLink>
                <NavLink to="/HerramientasPage" className="text-3">Herramientas</NavLink>   
                <NavLink to="/ObservatorioPage" className="text-3">Observatorio</NavLink>   
                </Nav>
                <Nav className="navbar-buttons">
                  
                  <Button onClick={() => navigate("/LoginPage")}>iniciar sesión</Button>
                  <Button onClick={() => navigate("/SingUpPage")}>registrarse</Button>
            
                  <img src='/assets/svgs/Escudo-UNSL-Blanco.svg'  width="100" height="50" className="d-inline-block " alt=""/>
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