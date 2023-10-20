import { Card } from "react-bootstrap";
import "./proyectocard.css";
import { useState } from "react";
import ProyectoModal from "../ProyectoCard/ProyectoModal";

function ProyectoCard({ proyecto }) {
  const [modalShow, setModalShow] = useState(false);

  const bannerUrl = `http://127.0.0.1:8000/banners/${proyecto.banner}`;

  return (
    <>
      <Card className="card" onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={bannerUrl} /> {/* Línea agregada para mostrar la imagen */}
        <Card.Body>
          <Card.Text className="encabezado-4 text-lowercase">
            {proyecto.title}
          </Card.Text>
          <Card.Title className="text-1 text-deg text-capitalize">
            {proyecto.area_name}
          </Card.Title>
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
