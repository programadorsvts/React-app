import {Container,Row,Col} from 'react-bootstrap';

import VinculacionesCard from '../Vinculaciones/VinculacionesCard'



function vinculaciones() {
  
        const vinculacion1={ruta:'https://svts.unsl.edu.ar/img/ttsocial-protocolos.svg'};
        const vinculacion2={ruta:'https://svts.unsl.edu.ar/img/UNSL2.0.svg'};
        const vinculacion3={ruta:'https://svts.unsl.edu.ar/img/comite-vinc.svg'};
        return (
                <Container>
                        <h2 className="mt-5 pt-5  text-center" >Vinculaciones</h2>
                        <Row className=" d-flex justify-content-center"  >
                                <h5 className="mt-3 d-flex justify-content-center text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                                <h5 className="d-flex justify-content-center text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
                        <Col className="mt-4  d-flex justify-content-center"  >
                                
                                <VinculacionesCard info={vinculacion1}></VinculacionesCard>
                                        
                        </Col>

                        <Col className="mt-4  d-flex justify-content-center" >
                                
                                <VinculacionesCard info={vinculacion2}></VinculacionesCard>
                        
                        </Col>

                        <Col className="mt-4   d-flex justify-content-center" >
                                
                                <VinculacionesCard info={vinculacion3}></VinculacionesCard>
                        
                        </Col>
                        </Row>
                </Container>
  );
}

export default vinculaciones;