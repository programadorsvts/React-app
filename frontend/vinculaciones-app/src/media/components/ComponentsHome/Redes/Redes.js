import {Container,Row,Col} from 'react-bootstrap';

import RedesCard from '../Redes/RedesCard'
import './redes.css';



function gestion() {
        const redes1={ruta:'assets/svgs/redes-1.svg'};
        const redes2={ruta:'assets/svgs/redes-2.svg'};
        const redes3={ruta:'assets/svgs/redes-3.svg'};
return (
    <Container  className=" "  >
        
        <h4 className="mt-5 pt-5  text-center" >Redes</h4>
       
        <Row className=" d-flex justify-content-center"  >

                <h5 className="mt-1 d-flex  justify-content-center text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                <h5 className="d-flex  justify-content-center text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <RedesCard info={redes1}></RedesCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    <RedesCard info={redes2}></RedesCard>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    <RedesCard info={redes3}></RedesCard>
            
            </Col>
        </Row>
    </Container>



  );
}

export default gestion;