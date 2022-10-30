
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {NavLink,/* Link */ } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

import './navbar.css';

function NavBar() {
  return (
    <>
      {['lg' ].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid bg="primary">
            <Navbar.Brand href="/">
              <img src="'../../image/Solo-LogoSVTS-Blanco.svg" width="100" height="50" className="d-inline-block " alt=""/>
              
            </Navbar.Brand>
            <Navbar.Toggle className='navbar-toggler' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='menu-toggle' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start  flex-grow-1" >
                <NavLink to="/" className="text-3">inicio</NavLink>
                <NavLink to="/RevistaDigital" className="text-3">Revista Digital</NavLink>
                <NavLink to="/SingUpPage" className="text-3">Observatorio</NavLink>   
                </Nav>
                <Nav className="navbar-buttons">
                  <Button >iniciar sesión</Button>
                  <Button >registrarse</Button>
                  {/* <Button ><Link to="/Login" >iniciar secion</Link></Button>
                  <Button ><Link to="/SingUp" >registrarse</Link></Button> */}
                  <img src="'../../image/Escudo-UNSL-Blanco.svg" width="100" height="50" className="d-inline-block " alt=""/>
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