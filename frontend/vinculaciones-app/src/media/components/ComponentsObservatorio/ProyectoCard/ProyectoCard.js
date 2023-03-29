import { Card } from "react-bootstrap";
import "./proyectocard.css";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../../../../config/env";

import ProyectoModal from "../ProyectoCard/ProyectoModal";

function ProyectoCard({ proyecto }) {
  const [modalShow, setModalShow] = useState(false);
  const [areas, setAreas] = useState([]);

    useEffect(() => {
      Axios.get(API_URL + "api/area")
        .then((response) => {
          setAreas(response.data);
        })
        .catch((err) => console.error(err));
    }, []);
        
  return (
    <>
        <Card className="card" onClick={() => setModalShow(true)}>
          <Card.Body>
            <Card.Text className="encabezado-4 text-lowercase">
              {proyecto.title}
            </Card.Text>
              {areas.map((area) => {
                    if (area.id===proyecto.area_id)
                    {
                         return(
                          <Card.Title className="text-1 text-deg text-capitalize">
                              {area.name}
                           </Card.Title>
                        ); 
                    } else{return null}
              })}
          </Card.Body>
        </Card>
        <ProyectoModal
          proyecto={proyecto}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </>
  );
}
export default ProyectoCard;
