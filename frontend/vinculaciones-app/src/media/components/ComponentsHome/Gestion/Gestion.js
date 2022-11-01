import {Container,Row,Col} from 'react-bootstrap';

import GestionCard from './GestionCard'



function gestion() {
        
                 const gestion1={imagen:'https://svts.unsl.edu.ar/ico/boligrafo.png',  titulo:'Informe de autoevaluación', ruta:'https://svts.unsl.edu.ar/pdf/INFORME%20DE%20AUTOEVALUACION-2021.pdf'};
                const gestion2={imagen:'https://svts.unsl.edu.ar/ico/STAN.png',  titulo:'Servicios Tecnológicos de Alto Nivel' ,ruta:'https://svts.unsl.edu.ar/pdf/STAN.pdf'};
                const gestion3={imagen:'https://svts.unsl.edu.ar/ico/contrato.png',  titulo:'Acreditación como Incubadoral', ruta:'https://svts.unsl.edu.ar/pdf/Acreditacion.pdf'};
return (
    <Container  className=" "  >
        
        <h2 className="mt-5 pt-5  text-center" >Gestion</h2>
       
        <Row className=" d-flex justify-content-center"  >

               
                <h5 className="mt-3 d-flex justify-content-center text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                <h5 className="d-flex justify-content-center text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
            
            <Col className="mt-4  d-flex justify-content-center"  >
                    
                    < GestionCard info={ gestion1} ></GestionCard>
                        
            </Col>

            <Col className="mt-4  d-flex justify-content-center" >
                    
                    < GestionCard info={ gestion2}></GestionCard>
            
            </Col>

            <Col className="mt-4   d-flex justify-content-center" >
                    
                    < GestionCard info={ gestion3}></GestionCard>
            
            </Col>
        </Row>
    </Container>



  );
}

export default gestion;