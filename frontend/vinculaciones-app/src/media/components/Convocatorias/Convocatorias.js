import {Container,Row,Col} from 'react-bootstrap';

import ConvocatoriaCard from '../Convocatorias/ConvocatoriaCard'



function convocatoria() {
  return (


    <Container  className=" "  >
        
        <h4 className="mt-5 pt-5  text-center" >Convocatirias</h4>
       
        <Row className=" d-flex justify-content-center"  >

               
                <h2 className="mt-5 d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h2>
                <h2 className="d-flex justify-content-center" >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h2>
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <ConvocatoriaCard></ConvocatoriaCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    <ConvocatoriaCard></ConvocatoriaCard>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    <ConvocatoriaCard></ConvocatoriaCard>
            
            </Col>
        </Row>
    </Container>



  );
}

export default convocatoria;