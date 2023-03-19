import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate,NavLink} from "react-router-dom";
import './navbar.css';
import  {useAuthUserContext, useLogOutContext}  from '../../../../LoginProvider';
import { useState,useEffect,useRef } from 'react';




function NavBar() {
  
  const navigate = useNavigate();
  const logout=useLogOutContext();
  const AuthUser=useAuthUserContext();
  const [auth,setAuth]=useState()
  let UserButtons=''
  useEffect(() => {
          setAuth(AuthUser()); 
  }, [AuthUser])

  const [show, setShow] = useState(true);

  const closeOffCanvas = () => {
    setShow((show) => !show);
  };
  const openToogle=()=>{
    setShow(true)
  }
  

  
   if(auth){
              UserButtons= 
              <>
                <Button onClick={() => {  navigate("/MisProyectosPage") }} >Mis proyectos</Button>
                <Button onClick={() => {  logout()  }} >Cerrar sesion</Button>
              </>
      }
      else {
              UserButtons=
              <>
                <Button onClick={() => {  navigate("/LoginPage") }} >Iniciar sesión</Button>
                <Button onClick={() => {  navigate("/SingUpPage")}} >Registrarse</Button>
              </>
      }  

  return (
    <>
        <Navbar expand="lg" className="navbar" sticky="top"  >
              <Container fluid>
                     <NavLink to="/" id="navlogo" >
                      <img src='assets/svgs/Solo-LogoSVTS.svg' width="100" height="50" className="d-inline-block " alt="logo1" id="imglogo"/>
                    </ NavLink >
                <Navbar.Toggle  className='navbar-toggler' aria-controls="offcanvasNavbar"  onClick={openToogle}/>
                <Navbar.Collapse id="basic-navbar-nav" >
                   <Navbar.Offcanvas className='menu-toggle' placement="end" restoreFocus={false} show={show} onHide={closeOffCanvas}>
                      <Offcanvas.Header closeButton >
                        <Offcanvas.Title>Tocar fuera del menu para volver</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        <Nav className="justify-content-start flex-grow-1"  id="navbtns">
                          <NavLink to="/" className="text-3"  id="inicio" >inicio</NavLink>
                          <NavLink to="/RevistaDigitalPage"className="text-3" id="revista">Revista Digital</NavLink>
                          <NavLink to="/ObiPage" className="text-3" id="obi">Ubi </NavLink>  
                          <NavLink to="/ObservatorioPage"className="text-3" id="observatorio">Observatorio</NavLink>   
                        </Nav>
                        <Nav className="navbar-buttons" id="btnuser" >
                          { UserButtons}
                          <img src='assets/svgs/Escudo-UNSL-Blanco.svg'  width="100" height="50" className="d-inline-block " alt=""/>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
              </Container>
            </Navbar>


     {/*  {['lg' ].map((expand) => (
        <Navbar id="navbar" key={expand} expand={expand} className="navbar" sticky="top" >
          <Container fluid id="container" >
            <NavLink to="/" id="navlogo" >
                <img src='assets/svgs/Solo-LogoSVTS.svg' width="100" height="50" className="d-inline-block " alt="logo1" id="imglogo"/>
            </ NavLink >
            <Navbar.Toggle className='navbar-toggler' aria-controls={`offcanvasNavbar-expand-${expand}`} id="navtoggle" / >
            <Navbar.Offcanvas className='menu-toggle' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" restoreFocus={false}  ref={offCanvasRef} >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-start flex-grow-1"  id="navbtns">
                  <NavLink to="/" className="text-3" id="inicio" onClick={closeOffCanvas}>inicio</NavLink>
                  <NavLink to="/RevistaDigitalPage" onClick={closeOffCanvas} className="text-3" id="revista"  >Revista Digital</NavLink>
                  <NavLink to="/ObiPage"  onClick={closeOffCanvas} className="text-3" id="obi"   >Ubi </NavLink>  
                  <NavLink to="/ObservatorioPage"  onClick={closeOffCanvas}  className="text-3" id="observatorio"  >Observatorio</NavLink>   
                </Nav>
                <Nav className="navbar-buttons" id="btnuser" >
                  { UserButtons}
                  <img src='assets/svgs/Escudo-UNSL-Blanco.svg'  width="100" height="50" className="d-inline-block " alt=""/>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
    </>
  );
}

export default NavBar;