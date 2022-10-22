import {Container,Row,Col} from 'react-bootstrap';

import FormularioCard from './FormularioCard';
/* import MapCard from './MapCard';  */



function consulta() {
  return (


    <Container  className=" "  >
        
       <h2 className="mt-5 pt-5  text-center" >Envianos tu Consulta</h2>
       
        <Row className=" d-flex justify-content-center"  >

               
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <FormularioCard></FormularioCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                   {/* <MapCard></MapCard>  */}
            
            </Col>

            
        </Row>
    </Container>
    )
 }
export default consulta;
