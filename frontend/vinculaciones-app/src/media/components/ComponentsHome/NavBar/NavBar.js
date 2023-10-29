import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from "react-router-dom";
import './navbar.css';
import { useAuthUserContext, useLogOutContext } from '../../../../LoginProvider';
import { useState, useEffect, useRef } from 'react';


function NavBar() {
  const offCanvasRef = useRef();
  const closeOffCanvas = () => offCanvasRef.current.backdrop.click();
  const ref = useRef();
  
const navigateAndClose = () => {
  ref.current._offcanvas.hide(); 
}  
  const navigate = useNavigate();
  const logout = useLogOutContext();
  const AuthUser = useAuthUserContext();
  const [auth, setAuth] = useState()
  let UserButtons = ''
  useEffect(() => {
    setAuth(AuthUser());
  }, [AuthUser])



  if (auth) {
    UserButtons =
      <>
        <Button onClick={() => { navigate("/MisProyectosPage"); closeOffCanvas() }} >Mis proyectos</Button>
        <Button onClick={() => { logout(); closeOffCanvas() }} >Cerrar sesion</Button>
      </>
  }
  else {
    UserButtons =
      <>
        <Button onClick={() => { navigate("/LoginPage"); closeOffCanvas() }} >Iniciar sesión</Button>
        <Button onClick={() => { navigate("/SingUpPage"); closeOffCanvas() }} >Registrarse</Button>
      </>
  }

  return (
    <>
    <Navbar expand="lg" className="navbar" sticky="top"  >
      <Container fluid>
        <NavLink to="/" >
          <img src='assets/svgs/Solo-LogoSVTS.svg' width="100" height="50" className="d-inline-block " alt="logo1" />
        </ NavLink >
        <Navbar.Toggle className='navbar-toggler' aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Navbar.Offcanvas className='menu-toggle' placement="end" restoreFocus={false}>
            <Offcanvas.Header closeButton >
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className="justify-content-start flex-grow-1">
                <NavLink to="/" className="text-3" onClick={() => navigateAndClose()}>inicio</NavLink>
                <NavLink to="/RevistaDigitalPage" className="text-3" onClick={() => navigateAndClose()}>Revista Digital</NavLink>
                <NavLink to="/ObiPage" className="text-3" onClick={() => navigateAndClose()}>Ubi </NavLink>
                <NavLink to="/ObservatorioPage" className="text-3" onClick={() => navigateAndClose()}>Observatorio</NavLink>
                <NavLink to="/CartillaDePrensa" className="text-3" onClick={() => navigateAndClose()}>WORKSHOP</NavLink>
              </Nav>
              <Nav className="navbar-buttons" id="btnuser" >
                {UserButtons}
                <img src='assets/svgs/Escudo-UNSL-Blanco.svg' width="100" height="50" className="d-inline-block " alt="" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </> 

  );
}

export default NavBar;
    {/*  </>
    <>
      <Navbar expand="lg" className="navbar" sticky="top"  >
        <Container fluid>
          <NavLink to="/" >
            <img src='assets/svgs/Solo-LogoSVTS.svg' width="100" height="50" className="d-inline-block " alt="logo1" />
          </ NavLink >
          <Navbar.Toggle className='navbar-toggler' aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Navbar.Offcanvas className='menu-toggle' placement="end" restoreFocus={false}>
              <Offcanvas.Header closeButton >
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-start flex-grow-1">
                  <NavLink to="/" className="text-3">inicio</NavLink>
                  <NavLink to="/RevistaDigitalPage" className="text-3">Revista Digital</NavLink>
                  <NavLink to="/ObiPage" className="text-3">Ubi </NavLink>
                  <NavLink to="/ObservatorioPage" className="text-3">Observatorio</NavLink>
                </Nav>
                <Nav className="navbar-buttons" id="btnuser" >
                  {UserButtons}
                  <img src='assets/svgs/Escudo-UNSL-Blanco.svg' width="100" height="50" className="d-inline-block " alt="" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> */}

    {/*    <>
      {[ 'md'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">          <NavLink to="/" >
            <img src='assets/svgs/Solo-LogoSVTS.svg' width="100" height="50" className="d-inline-block " alt="logo1" />
          </ NavLink ></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1">
                  <NavLink to="/" className="text-3" onClick={() => navigateAndClose('/')} >inicio</NavLink>
                  <NavLink to="/RevistaDigitalPage" className="text-3" onClick={() => navigateAndClose('/')}>Revista Digital</NavLink>
                  <NavLink to="/ObiPage" className="text-3" >Ubi </NavLink>
                  <NavLink to="/ObservatorioPage" className="text-3" >Observatorio</NavLink>
                </Nav>
                <Nav className="navbar-buttons" id="btnuser" >
                  {UserButtons}
                  <img src='assets/svgs/Escudo-UNSL-Blanco.svg' width="100" height="50" className="d-inline-block " alt="" />
                </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      ))}
    </> */}