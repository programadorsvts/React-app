import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate, NavLink } from "react-router-dom";
import './navbar.css';
import { useAuthUserContext, useLogOutContext } from '../../../../LoginProvider';
import { useState, useEffect } from 'react';


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const closeOffCanvas = () => setExpanded(false);
  const navigateAndClose = closeOffCanvas;
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
    <Navbar expand="xxl" className="navbar" sticky="top" expanded={expanded} onToggle={setExpanded}>
      <Container fluid>
        <NavLink to="/" className="institutional-brand" onClick={closeOffCanvas}>
          <img src='/assets/svgs/logo-institucional-subvt.svg' className="institutional-logo" alt="Universidad Nacional de San Luis · SIDI · Subsecretaría de Vinculación Territorial" />
        </ NavLink >
        <Navbar.Toggle className='navbar-toggler' aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Navbar.Offcanvas id="offcanvasNavbar" className='menu-toggle' placement="end" restoreFocus={false}>
            <Offcanvas.Header closeButton >
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className="navbar-links">
                <NavLink to="/" end className="text-3" onClick={() => navigateAndClose()}>inicio</NavLink>
                <NavLink to="/RevistaDigitalPage" className="text-3" onClick={() => navigateAndClose()}>Revista Digital</NavLink>
                <NavLink to="/ObiPage" className="text-3" onClick={() => navigateAndClose()}>Ubi </NavLink>
                <NavLink to="/ObservatorioPage" className="text-3" onClick={() => navigateAndClose()}>Observatorio</NavLink>
                {/* <NavLink to="/CartillaDePrensa" className="text-3" onClick={() => navigateAndClose()}>WORKSHOP</NavLink> */}
              </Nav>
              <Nav className="navbar-buttons" id="btnuser" >
                {UserButtons}
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
