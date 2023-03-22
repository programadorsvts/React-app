
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

import "./proyecto.css"
import { API_URL } from '../../../../config/env';

function MisProyectos () {

  const [proyectos, setProyectos] = useState([]); //Proyectos del backend variable llamada 'proyectos'


  useEffect(() => {
    Axios.get(API_URL + "api/proyects")
      .then((response) => {
        setProyectos(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  };
  
  return (
    <>
        <Container className="proyecto">
          {proyectos.map((item) => {
            return <ProyectoCard key={item.id} proyecto={item}></ProyectoCard>;
          })}
        </Container>

    </>
  );


 export default MisProyectos