import {Container,Row,Col} from 'react-bootstrap';


function footer() {
  return (


    <Container  className="mt-5">
        <Row className=" mt-5">

            <Col className="bg-danger text-center mt-5 ">
                  
                <h5 className="text-uppercase">Información Institucional</h5>

                <p className="text-uppercase">Dirección: Ejército de los Andes 950 San Luis, Argentina</p>

                <p className="text-uppercase">Telefono: </p>

                <ul class="list-unstyled">
                    
                    <li>Dirección: <a href="/#">Ejército de los Andes 950 San Luis, Argentina</a></li>
                    <li>Telefono:<a href="/#">+54 (0266) 4520300</a></li>
                    <li><a href="/#">Forms</a></li>
                    <li><a href="/#">News and Updates</a></li>
                    <li><a href="/#">FAQs</a></li>
                </ul>

            </Col>
          
            <Col className="bg-danger text-center mt-5 ">
                  
                <h3 className="text-uppercase">Contacto</h3>

                <p className="text-uppercase">Ubicación: 1er Piso - Ala B</p>

                <p className="text-uppercase">Teléfono: +54 (0266) 4520300</p>
               
                <p className="text-uppercase"> Interno: 5159</p>

<p className="text-uppercase">Email: svts.unsl@gmail.com</p>
            </Col>
            
            <Col className="bg-danger text-center mt-5 ">
                  
                <h5 className="text-uppercase">Redes</h5>

            

            </Col>
        </Row>



    </Container>



  );
}

export default footer;