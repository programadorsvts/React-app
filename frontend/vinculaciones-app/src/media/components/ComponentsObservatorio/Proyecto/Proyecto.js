import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import ProyectoCard from "../ProyectoCard/ProyectoCard";
import "../Proyecto/proyecto.css";
import "../Proyecto/pagination.css";
import { API_URL } from "../../../../config/env";
import { Button, Form } from "react-bootstrap";

function ProyectosPublicados() {
  const [proyectos, setProyectos] = useState([]); //Proyectos del backend variable llamada 'proyectos'
  const [prevUrl, setPrevUrl] = useState(""); //Proyectos del backend variable llamada 'proyectos'
  const [nextUrl, setNextUrl] = useState(""); //Proyectos del backend variable llamada 'proyectos'


  const [areas, setAreas] = useState([]);
  const [nameToSearch, setnameToSearch] = useState("");
  const [areaToSearch, setareaToSearch] = useState(0);


  const handleInputName = (e) => {
    setnameToSearch(e.target.value)
    console.log(nameToSearch)
  }
  const handleInputAreaId = (e) => {
    setareaToSearch(e.target.value)
    console.log(areaToSearch)
  }

  const handleSubmit = () => {
    let params = ""
    if (nameToSearch)
      params += `&search=${nameToSearch}`
    if (areaToSearch && areaToSearch !== "0")
      params += `&area_id=${areaToSearch}`

    Axios.get(API_URL + `api/proyects?to=20${params}`).then(response => {
      setProyectos(response.data.data);
      setPrevUrl(response.data.prev_page_url);
      setNextUrl(response.data.next_page_url);
    }).catch(err => console.error(err))
  }

  useEffect(() => {
    Axios.get(API_URL + "api/area")
      .then((response) => {
        setAreas(response.data);
      })
      .catch((err) => console.error(err));

    Axios.get(API_URL + "api/proyects?page=1&to=20")
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
    Axios.get(url + "&to=20").then((response) => {
      setProyectos((state) => response.data.data);
      setPrevUrl(response.data.prev_page_url);
      setNextUrl(response.data.next_page_url);
    });
  };
  const prevPage = (url) => {
    Axios.get(url + "&to=20").then((response) => {

      setProyectos((state) => response.data.data);
      setPrevUrl(response.data.prev_page_url);
      setNextUrl(response.data.next_page_url);
    });
  };

  return (
    <>
      <Container className="d-flex justify-content-center mt-5">
        <Form className="form buscador-form mb-5 w-75" >
          <Form.Group className="mb-3" controlId="buscador1">
            <Form.Label className="encabezado-4 label">Buscador</Form.Label>
            <Form.Control type="text" placeholder="ingrese titulo" onChange={handleInputName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="selector1">
            <Form.Label className="encabezado-4 label">
              Seleccione tematica
            </Form.Label>
            <Form.Select defaultValue={0} onChange={handleInputAreaId}>
              <option value={0} >
                Mostrar todo
              </option>
              {areas.map((area) => {
                return (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <div className="mt-4">
            <Button className="w-100" onClick={handleSubmit}>Buscar</Button>
          </div>
        </Form>
      </Container>
      <Container>
        <h1 className="encabezado-2 mb-5">
          Catalogo de Proyectos de Inovación
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
