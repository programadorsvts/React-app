import { Card } from "react-bootstrap";
import "./proyectocard.css";
import { useState } from "react";


import ProyectoModal from "../ProyectoCard/ProyectoModal";

function ProyectoCard({ proyecto }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="card" onClick={() => setModalShow(true)}>
        <Card.Body>
          <Card.Text className="encabezado-4 text-lowercase">
            {proyecto.title}
          </Card.Text>
          {proyecto.area_name}
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
