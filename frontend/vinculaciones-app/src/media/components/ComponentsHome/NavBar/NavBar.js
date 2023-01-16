import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useEffect, useRef, useState} from 'react';
import {useNavigate,NavLink} from "react-router-dom";
import './navbar.css';
import Axios from 'axios';


function NavBar() {
  const navigate = useNavigate();
  const offCanvasRef = useRef();
  const [auth, setAuth] = useState(null);
  let UserButtons = ' '
  
  useEffect(() => {

    Axios.get('/api/checkAuth')
    .then((response) => {
      setAuth(true)
      console.log('ENTRO AL THEM')
     
    })
    .catch((error) => {
      console.log('ENTRO AL CATCH')
      console.log(error)
      setAuth(false)
      
    })
  },[auth])

  if(auth)
  {
   
    UserButtons = 
    <>
      <Button onClick={() => {  navigate("/MisProyectosPage")  ;  }} >Mis proyectos</Button>
      <Button onClick={() => {  logoutSubmit()  ;   }} >Cerrar sesion</Button>
    </>
  }
  else {
    
    UserButtons = 
    <>
      <Button onClick={() => {  navigate("/LoginPage")  ;   }} >Iniciar sesión</Button>
      <Button onClick={() => {  navigate("/SingUpPage")  ;  }} >Registrarse</Button>
    </>
  }

  const logoutSubmit = () => {
    Axios.post("/api/logout")
    .then((response) => {
      localStorage.removeItem("local-token")
      localStorage.removeItem("local-email")
      setAuth(false)
      navigate("/")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      {['lg' ].map((expand) => (
        
        <Navbar key={expand} expand={expand} className="navbar" sticky="top">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src='assets/svgs/Solo-LogoSVTS.svg' width="100" height="50" className="d-inline-block " alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle className='navbar-toggler' aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas className='menu-toggle' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end"  ref={offCanvasRef}>
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body >
                <Nav className="justify-content-start flex-grow-1" >
                  <NavLink to="/" className="text-3">inicio</ NavLink >
                  <NavLink to="/RevistaDigitalPage"  className="text-3">Revista Digital</NavLink >
                  <NavLink to="/ObiPage"className="text-3">Ubi </NavLink >  
                  <NavLink to="/ObservatorioPage"  className="text-3">Observatorio</NavLink >   
                </Nav>
                <Nav className="navbar-buttons">
                  {UserButtons}
                  <img src='assets/svgs/Escudo-UNSL-Blanco.svg'  width="100" height="50" className="d-inline-block " alt=""/>
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