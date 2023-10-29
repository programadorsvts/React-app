import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modal.css';

function GaleriaModal(props) {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-1 text-deg text-capitalize">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-description' >
          {props.children}
        </Modal.Body>
{/*         <Modal.Footer>
          <Button onClick={props.onHide} >Cerrar</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default GaleriaModal;
