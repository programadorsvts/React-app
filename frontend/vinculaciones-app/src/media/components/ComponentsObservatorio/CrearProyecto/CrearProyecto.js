import {useNavigate } from "react-router-dom";
import {Button,Container} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Axios from "axios";

function CrearProyecto() {
  
  const [auth, setAuth] = useState(null)

  const navigate = useNavigate();
  
  useEffect(() => {  

    Axios.get('/api/checkAuth')
    .then((response) => {
      setAuth(true)
    })
    .catch((error) => {
      console.log(error)
      setAuth(false)
    })
  },[auth])
  
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