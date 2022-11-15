import {useNavigate } from "react-router-dom";
import {Button,Container} from 'react-bootstrap';

function CrearProyecto() {

    const navigate = useNavigate();
  return (

    <Container className="d-flex justify-content-center mt-5">
     
      <Button className='btn btn-deg w-75' onClick={() => navigate("/CrearProyectoPage")}>Crear nuevo proyecto</Button>
 
    </Container>
  );
}

export default CrearProyecto;