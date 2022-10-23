import {Container,Row,Col} from 'react-bootstrap';

import RedesCard from '../Redes/RedesCard'



function gestion() {
  return (


    <Container  className=" "  >
        
        <h4 className="mt-5 pt-5  text-center" >Redes</h4>
       
        <Row className=" d-flex justify-content-center"  >

               
                <h5 className="mt-1 d-flex  justify-content-center text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                <h5 className="d-flex  justify-content-center text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    <RedesCard></RedesCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    <RedesCard></RedesCard>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    <RedesCard></RedesCard>
            
            </Col>
        </Row>
    </Container>



  );
}

export default gestion;