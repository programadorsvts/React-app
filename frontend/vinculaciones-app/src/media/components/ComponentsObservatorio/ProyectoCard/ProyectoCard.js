import { Card } from "react-bootstrap";
import "./proyectocard.css";
import { useState } from "react";
import ProyectoModal from "../ProyectoCard/ProyectoModal";
import { API_URL } from "../../../../config/env";

function ProyectoCard({ proyecto }) {
  const [modalShow, setModalShow] = useState(false);

  const bannerUrl = API_URL + `banners/${proyecto.banner}`;
  return (
    <>
      <Card className="card" onClick={() => setModalShow(true)}>
        {/*<Card.Img variant="top" src={bannerUrl} /> Por si quieren que la imagen se vea fuera de la tarjeta tambien */}
        <Card.Body>
          <Card.Title className="encabezado-4 text-lowercase">
            {proyecto.title}
          </Card.Title>
          {proyecto.convocatoria && (
            <Card.Text className="text-small">
              {proyecto.convocatoria}
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
