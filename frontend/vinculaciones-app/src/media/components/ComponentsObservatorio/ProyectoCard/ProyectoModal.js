import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modal.css';

function ProyectoModal(props) {



    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {props.proyecto.area_name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-description'>
                    <h4 className='encabezado-2 mb-3'>{props.proyecto.title}</h4>
                    <p className='encabezado-4 mb-1'>{props.proyecto.director_name}</p>
                    <p className='encabezado-4 mb-4'>Organización {props.proyecto.organization === 0 ? "Pública" : "Privada"}</p>
                    <p className='text-1 mb-1'>CONTACTO:</p>
                    <p className='text-2 mb-1'>{props.proyecto.email}</p>
                    <p className='text-2 mb-1'>{props.proyecto.phone_number}</p>
                    <p className='text-2 mb-4'>{props.proyecto.address}</p>
                    <p className='text-1 mb-1'>DESCRIPCIÓN:</p>
                    <p className='text-2 mb-1'>{props.proyecto.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProyectoModal;
