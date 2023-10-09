import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import './modal.css'
import { Cronograma } from './Cronograma.js'


function galeriamodal(props) {

    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-1 text-deg text-capitalize">{'CRONOGRAMA DE ACTIVIDADES JORNADA '}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-description' >
                    <Cronograma> </Cronograma>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} >Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default galeriamodal;




