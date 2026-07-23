import { Card } from "react-bootstrap";
import "./proyectocard.css";
import { useState } from "react";
import ProyectoModal from "../ProyectoCard/ProyectoModal";
import { API_URL } from "../../../../config/env";
import React from "react";

function ProyectoCard({ proyecto }) {
  const [modalShow, setModalShow] = useState(false);

  const bannerUrl = API_URL + `banners/${proyecto.banner}`;

  const formatText = (text) => {
    if (!text || typeof text !== "string") return text;
    const lines = text.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').split('\n');
    return lines.map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <Card className="card" onClick={() => setModalShow(true)}>
        {/*<Card.Img variant="top" src={bannerUrl} /> Por si quieren que la imagen se vea fuera de la tarjeta tambien */}
        <Card.Body>
          <Card.Title className="encabezado-4 text-lowercase">
            {formatText(proyecto.title)}
          </Card.Title>
          {proyecto.convocatoria && (
            <Card.Text className="text-small">
              {formatText(proyecto.convocatoria)}
            </Card.Text>
          )}
          <Card.Subtitle className="text-1 text-deg text-capitalize">
            {proyecto.area_name}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <ProyectoModal
        proyecto={proyecto}
        url={bannerUrl}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProyectoCard;
