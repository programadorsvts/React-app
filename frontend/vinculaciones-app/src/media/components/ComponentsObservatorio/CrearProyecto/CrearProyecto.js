import './crearproyecto.css'
import {useNavigate } from "react-router-dom";
import {Button,Container} from 'react-bootstrap';

function CrearProyecto() {

    const navigate = useNavigate();
  return (

    <Container className="d-flex  justify-content-center mt-5  ">
     
      <Button className='proyectos-body' onClick={() => navigate("/CrearProyectoPage")}>Crear Proyecto</Button>
 
    </Container>
  );
}

export default CrearProyecto;