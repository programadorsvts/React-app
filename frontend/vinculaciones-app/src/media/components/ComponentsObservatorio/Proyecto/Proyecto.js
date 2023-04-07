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
  const [havePrevUrl, setHavePrevUrl] = useState(false); //Proyectos del backend variable llamada 'proyectos'
  const [haveNextUrl, setHaveNextUrl] = useState(true); //Proyectos del backend variable llamada 'proyectos'
  const [page, setPage] = useState(1); //Proyectos del backend variable llamada 'proyectos'

  const [areas, setAreas] = useState([]);
  const [nameToSearch, setnameToSearch] = useState("");
  const [areaToSearch, setareaToSearch] = useState(0);

  useEffect(() => {
    Axios.get(API_URL + "api/area")
      .then((response) => {
        setAreas(response.data);
      })
      .catch((err) => console.error(err));

    Axios.get(API_URL + "api/proyects?page=1&to=20")
      .then((response) => {
        setProyectos(response.data.data);
        setHavePrevUrl(response.data.prev_page_url ? true : false);
        setHaveNextUrl(response.data.next_page_url ? true : false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

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
      setHavePrevUrl(response.data.prev_page_url ? true : false);
      setHaveNextUrl(response.data.next_page_url ? true : false);
    }).catch(err => console.error(err))
  }

  const nextPage = (url) => {
    let pageAux = page + 1
    Axios.get(`${API_URL}api/proyects?page=${pageAux}&to=20`).then((response) => {
      setProyectos(response.data.data);
      setPage(pageAux)
      setHavePrevUrl(response.data.prev_page_url ? true : false);
      setHaveNextUrl(response.data.next_page_url ? true : false);
    });
  };
  const prevPage = (url) => {
    let pageAux = page - 1
    Axios.get(`${API_URL}api/proyects?page=${pageAux}&to=20`).then((response) => {
      setProyectos(response.data.data);
      setPage(pageAux)
      setHavePrevUrl(response.data.prev_page_url ? true : false);
      setHaveNextUrl(response.data.next_page_url ? true : false);
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
            return <ProyectoCard key={item.id}  proyecto={item}></ProyectoCard>;
          })}
        </Container>
        <Container className='pagination'>
          {havePrevUrl ? (
            <button className="btn" onClick={prevPage}>Página anterior</button>
          ) : (
            ""
          )}
          {haveNextUrl ? (
            <button className=" btn" onClick={nextPage}>Página siguiente</button>
          ) : (
            ""
          )}
        </Container>

      </Container>
    </>
  );
}

export default ProyectosPublicados;
