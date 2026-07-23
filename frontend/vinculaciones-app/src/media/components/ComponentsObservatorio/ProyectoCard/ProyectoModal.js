import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import "./modal.css";
import { Container } from "react-bootstrap";
import React from "react";

function ProyectoModal(props) {
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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-1 text-deg text-capitalize">
            {props.proyecto.area_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-description">
          <Container style={{ padding: '0px' }}  className="text-center">
            {props.url ?
            <Image
              src={props.url}
              alt=""
              fluid
              className="banner-image"
            /> : <p></p>}
          </Container> 

          <h4 className="encabezado-2 mb-3">{formatText(props.proyecto.title)}</h4>
          <p className="encabezado-4 mb-1 text-capitalize">
            {formatText(props.proyecto.director_name)}
          </p>
          <p className="encabezado-4 mb-4">
            {props.proyecto.convocatoria ? <>Convocatoria: {formatText(props.proyecto.convocatoria)}</> : ""}
          </p>
          <p className="encabezado-4 mb-4">
            Organización{" "}
            {props.proyecto.organization === 1 ? "Pública" : "Privada"}
          </p>
          <p className="text-1 mb-1">CONTACTO:</p>
          <p className="text-2 mb-1">{props.proyecto.email}</p>
          <p className="text-2 mb-1">{props.proyecto.phone_number}</p>
          <p className="text-2 mb-4">{props.proyecto.address}</p>
          <p className="text-1 mb-1">DESCRIPCIÓN:</p>
          <p className="text-2 mb-1">{formatText(props.proyecto.description)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProyectoModal;
