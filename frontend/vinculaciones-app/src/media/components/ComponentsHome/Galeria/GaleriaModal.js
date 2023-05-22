import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modal.css';

function galeriamodal(props) {

    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-1 text-deg text-capitalize">{'Titulo del Modal galeria '}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-description'>

                    <img src='assets/images/galeria-3.webp' alt='imagen-3'></img>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} >Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default galeriamodal;
