
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

import "./proyecto.css"

function MisProyectos () {

  const [proyectos, setProyectos] = useState([]); //Proyectos del backend variable llamada 'proyectos'
  const [prevUrl, setPrevUrl] = useState(""); //Proyectos del backend variable llamada 'proyectos'
  const [nextUrl, setNextUrl] = useState(""); //Proyectos del backend variable llamada 'proyectos'

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/proyects?page=1&to=5")
      .then((response) => {
        setProyectos(response.data.data);
        setPrevUrl(response.data.prev_page_url);
        setNextUrl(response.data.next_page_url);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  const nextPage = (url) => {
    Axios.get(url + "&to=5").then((response) => {
      setProyectos((state) => response.data.data);
      setPrevUrl(response.data.prev_page_url);
      setNextUrl(response.data.next_page_url);
    });
  };
  const prevPage = (url) => {
    Axios.get(url + "&to=5").then((response) => {
      setProyectos((state) => response.data.data);
      setPrevUrl(response.data.prev_page_url);
      setNextUrl(response.data.next_page_url);
    });
  };
  
  return (
    <>
      <Container>
        <Container className="proyecto">
          {proyectos.map((item) => {
            return <ProyectoCard key={item.id} proyecto={item}></ProyectoCard>;
          })}
        </Container>
        {prevUrl ? (
          <button onClick={() => prevPage(prevUrl)}>Volver</button>
        ) : (
          ""
        )}
        {nextUrl ? (
          <button onClick={() => nextPage(nextUrl)}>Siguiente</button>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

 export default MisProyectos