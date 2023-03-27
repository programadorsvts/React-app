import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../../../styles/form.css";
import "./buscador.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { API_URL } from "../../../../config/env";

const Buscador = () => {
  const [areas, setAreas] = useState([]);
  const [nameToSearch, setnameToSearch] = useState("");
  const [areaToSearch, setareaToSearch] = useState(0);

  useEffect(() => {
    Axios.get(API_URL + "api/area")
      .then((response) => {
        setAreas(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInputName = (e) => {
    setnameToSearch(e.target.value)
    console.log(nameToSearch)
  }
  const handleInputAreaId = (e) => {
    setareaToSearch(e.target.value)
    console.log(areaToSearch)
  }

  /*  const handleSubmit = () => {
     let params = "&"
     if(nameToSearch)
       params += `search=${nameToSearch}`
     if(areaToSearch)
       params += `area_id=${nameToSearch}`
     // Axios.get(API_URL +  `api/proyects?${params}`).then(response => {
 
     // })
   } */

  return (
    <>
      <Container className="d-flex justify-content-center mt-5">
        <Form className="form buscador-form mb-5 w-75">
          <Form.Group className="mb-3" controlId="buscador1">
            <Form.Label className="encabezado-4 label">Buscador</Form.Label>
            <Form.Control type="text" placeholder="ingrese titulo" onChange={handleInputName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="selector1">
            <Form.Label className="encabezado-4 label">
              Seleccione tematica
            </Form.Label>
            <Form.Select onChange={handleInputAreaId}>
              <option value="0" selected>
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
        </Form>
      </Container>
    </>
  );
};

export default Buscador;
