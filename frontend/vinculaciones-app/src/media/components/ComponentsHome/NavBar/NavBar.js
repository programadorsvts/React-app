import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate, NavLink } from "react-router-dom";
import './navbar.css';
import { useAuthUserContext, useLogOutContext } from '../../../../LoginProvider';
import { useState, useEffect, useRef } from 'react';


function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const tabRef = useRef(null);
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
    <Navbar expand="xxl" className="navbar" sticky="top" expanded={expanded} onToggle={setExpanded}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && expanded) {
          closeOffCanvas();
          tabRef.current?.focus();
        }
      }}>
      <Container fluid>
        <NavLink to="/" className="institutional-brand" onClick={closeOffCanvas}>
          <img src='/assets/svgs/logo-institucional-subvt.svg' className="institutional-logo" alt="Universidad Nacional de San Luis · SIDI · Subsecretaría de Vinculación Territorial" />
        </ NavLink >
        <div className="navbar-dropdown">
        <Navbar.Collapse id="basic-navbar-nav" className="menu-toggle">
            <div className="navbar-menu-body">
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
            </div>
        </Navbar.Collapse>
        <Navbar.Toggle ref={tabRef} className="navbar-folder-tab" aria-controls="basic-navbar-nav"
          aria-expanded={expanded} label={expanded ? 'Cerrar menú' : 'Abrir menú'}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Navbar.Toggle>
        </div>
      </Container>
    </Navbar>
  </>

  );
}

export default NavBar;
