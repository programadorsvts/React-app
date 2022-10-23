import {Container,Row,Col} from 'react-bootstrap';


function footer() {
  return (


    <Container  className="mt-5">
        <Row className=" mt-5">

            <Col className="bg-danger text-center mt-5 ">
                  
                <h5 className="text-uppercase">Información Institucional</h5>

                <p className="text-uppercase">Dirección: Ejército de los Andes 950 San Luis, Argentina</p>

                <p className="text-uppercase">Telefono: +54 (0266) 4520300</p>

            </Col>
          
            <Col className="bg-danger text-center mt-5 ">
                  
                <h5 className="text-uppercase">Contacto</h5>

                <p className="text-uppercase">Dirección: Ejército de los Andes 950 San Luis, Argentina</p>

                <p className="text-uppercase">Telefono: +54 (0266) 4520300</p>

            </Col>
            
            <Col className="bg-danger text-center mt-5 ">
                  
                <h5 className="text-uppercase">Redes</h5>

                <p className="text-uppercase">Dirección: Ejército de los Andes 950 San Luis, Argentina</p>

                <p className="text-uppercase">Telefono: +54 (0266) 4520300</p>

            </Col>
        </Row>



    </Container>



  );
}

export default footer;