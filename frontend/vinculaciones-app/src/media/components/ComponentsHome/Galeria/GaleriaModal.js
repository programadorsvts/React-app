import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modal.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Cronograma } from './Cronograma.js';


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




 {/* <img className='imgModal1 mx-auto' src='assets/images/galeria-3.webp' alt='imagen-3'></img>
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
                    </Container> */}