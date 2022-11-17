import {Container,Row,Col} from 'react-bootstrap';

import GestionCard from './GestionCard'



function gestion() {
        
                 const gestion1={imagen:'/assets/svgs/gestion-1.svg',  titulo:'Informe de autoevaluación', ruta:'https://svts.unsl.edu.ar/pdf/INFORME%20DE%20AUTOEVALUACION-2021.pdf'};
                const gestion2={imagen:'/assets/svgs/gestion-2.svg',  titulo:'Servicios Tecnológicos de Alto Nivel' ,ruta:'https://svts.unsl.edu.ar/pdf/STAN.pdf'};
                const gestion3={imagen:'/assets/svgs/gestion-3.svg',  titulo:'Acreditación como Incubadoral', ruta:'https://svts.unsl.edu.ar/pdf/Acreditacion.pdf'};
return (
    <Container  className=" "  >
        
        <h2 className="mt-5 pt-5  text-center" >Gestion</h2>
       
        <Row className=" d-flex justify-content-center"  >

               
                <h5 className="mt-3  text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, </h5>
                <h5 className="text-center " >cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
            
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