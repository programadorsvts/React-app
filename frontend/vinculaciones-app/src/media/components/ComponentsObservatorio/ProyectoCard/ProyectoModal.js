import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import "./modal.css";
import { Container } from "react-bootstrap";

function ProyectoModal(props) {
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
            <Image
              src={props.url}
              alt="imagen-4"
              fluid
              className="banner-image"
            />
          </Container>

          <h4 className="encabezado-2 mb-3">{props.proyecto.title}</h4>
          <p className="encabezado-4 mb-1 text-capitalize">
            {props.proyecto.director_name}
          </p>
          <p className="encabezado-4 mb-4">
            {props.proyecto.convocatoria ? `Convocatoria: ${props.proyecto.convocatoria}` : ""}
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
          <p className="text-2 mb-1">{props.proyecto.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProyectoModal;
