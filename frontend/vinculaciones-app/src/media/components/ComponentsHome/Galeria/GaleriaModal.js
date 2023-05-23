import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modal.css';
import { Col, Container, Row } from 'react-bootstrap';

function galeriamodal(props) {

    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-1 text-deg text-capitalize">{'EVENTOS '}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-description' >
                    <h4 className='encabezado-2 mb-3 text-center'>{'props.proyecto.title'}</h4>
                    <p className='text-1 mb-1  '>Organización {'prop'}</p>
                    <p className='text-2'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                     in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    
                    <img className='imgModal1 mx-auto' src='assets/images/galeria-3.webp' alt='imagen-3'></img>
                    <p className='text-1 mb-1 '>Fecha de eventos:</p>
                    <Container >
                        <Row>

                            <Col className='col-6' >
                                <p className='text-2 bg-danger'>Fecha 1</p>
                            </Col>

                            <Col className='col-4'>
                                <p className='text-2 bg-warning'>Fecha 2</p>
                            </Col>
                            <Col className='col-2'>
                                <p className='text-2 bg-success'>Fecha 2</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} >Ingresar</Button>
                    <Button onClick={props.onHide} >Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default galeriamodal;
