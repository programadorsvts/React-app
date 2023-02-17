import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import ProyectoCard from "../ProyectoCard/ProyectoCard";
import "../Proyecto/proyecto.css";
import "../Proyecto/pagination.css";

function ProyectosPublicados() {
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
        <h1 className="encabezado-2 mb-5">
          Catalogo de Proyectos de Inovacion
        </h1>
        <Container className="proyecto">
          {proyectos.map((item) => {
            return <ProyectoCard key={item.id} proyecto={item}></ProyectoCard>;
          })}
        </Container>
        <Container className='pagination'>
          {prevUrl ? (
            <button className="btn" onClick={() => prevPage(prevUrl)}>Volver</button>
          ) : (
            ""
          )}
          {nextUrl ? (
            <button className=" btn" onClick={() => nextPage(nextUrl)}>Siguiente</button>
          ) : (
            ""
          )}
        </Container>
           
      </Container>
    </>
  );
}

export default ProyectosPublicados;
