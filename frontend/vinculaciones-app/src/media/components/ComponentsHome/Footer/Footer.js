import {Container,Row,Col} from 'react-bootstrap';


function footer() {
  return (


    <Container fluid  className="bg-danger mt-5 mb-5  text-secondary rounded-top">
        
        <Row className="ms-5 me-5 mt-3">

            <Col className=" text-center mt-5" xs={12} md={4}>
                  
                <h6 className="text-uppercase ">Información Institucional</h6>
                <img class Name="" src="'../../image/icons/escudounslweb.png" width="150" height="100" alt=""/>  
                
                <ul class="list-unstyled ">
                    <li className="">Dirección: <a href="https://www.google.com/maps/place/Universidad+Nacional+de+San+Luis/@-33.2920509,-66.341365,17.6z/data=!4m9!1m2!2m1!1sunsl!3m5!1s0x95d4394eec782487:0x2bcfdfba83514ad4!8m2!3d-33.2921332!4d-66.3396195!15sCgR1bnNsWgYiBHVuc2ySAQp1bml2ZXJzaXR5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJWT1daNk5ucFJSUkFC4AEA" Target="_blank">Ejército de los Andes 950 San Luis</a></li>
                    <p className="">San Luis Argentina</p>
                    <li className="">Telefono: <a href="tel:+54 (0266) 4520300">+54 (0266) 4520300</a></li>
                </ul>

            </Col>
          
            <Col className=" text-center mt-5"xs={12} md={4}>
                  
                <h6 className="text-uppercase">Contacto</h6>
                <img class Name="" src="'../../image/icons/escudounslweb.png" width="150" height="100" alt=""/>  

                <ul class="list-unstyled  ">
                    
                    <li  className="">Ubicacion: <a href="https://www.google.com/maps/search/unsl/@-33.2918874,-66.3401793,19.96z" Target="_blank">1er Piso - Ala B</a></li>
                    <p className="">San Luis Argentina</p>
                    <li className="">Telefono: <a href="tel:+54 (0266) 4520300">+54 (0266) 4520300</a></li>
                    <li className="">Telefono: <a href="tel:5159">5159</a></li>
                    <li className="">Email: <a href="mailto: svts.unsl@gmail.com">svts.unsl@gmail.com</a></li>
                </ul>

            </Col>
            
            <Col className="text-center mt-5"xs={12} md={4}>
                  
                <h5 className="text-uppercase">Redes</h5>
                <a className="m-3" href="tel:+54 (0266) 4520300">icon</a>
                <a className="m-3" href="tel:+54 (0266) 4520300">icon</a>
                <a className="" href="tel:+54 (0266) 4520300">4520300</a>
            

            </Col>

        </Row>
        <Row  className="ms-5 me-5 mt-3">


        </Row>



    </Container>



  );
}

export default footer;