import {useNavigate } from "react-router-dom";
import {Button,Container} from 'react-bootstrap';
import { useEffect,useState } from "react";
import  {useAuthUserContext}  from '../../../../LoginProvider';

function CrearProyecto() {
  
  const navigate = useNavigate();
  const AuthUser=useAuthUserContext();
  const [auth,setAuth]=useState(null);

  useEffect(() => {
    setAuth(AuthUser());
  }, [AuthUser])
  
  return (

    <Container className="d-flex justify-content-center mt-5">
      {
        auth ?
          <Button className='btn btn-deg w-75' onClick={() => navigate("/CrearProyectoPage")}>Crear nuevo proyecto</Button>
        : <span></span>
        }
 
    </Container>
  );
}

export default CrearProyecto;