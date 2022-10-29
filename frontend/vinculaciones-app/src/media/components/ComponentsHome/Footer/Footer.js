import {Container,Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";


function footer() {
  return (

        
    <Container fluid  className="bg-primary mt-5   text-secondary rounded-top">
        
        <Row className="ms-5 me-5 mt-3">

            <Col className=" text-center mt-5" xs={12} md={4}>
                  
                <h6 className="text-uppercase ">Información Institucional</h6>
                <img src="../../image/icons/escudounslweb.png" width="150" height="100" alt=""/>  
                
                <ul className="list-unstyled">
                    <li >Dirección: <Link className="text-secondary" to="https://www.google.com/maps/place/Universidad+Nacional+de+San+Luis/@-33.2920509,-66.341365,17.6z/data=!4m9!1m2!2m1!1sunsl!3m5!1s0x95d4394eec782487:0x2bcfdfba83514ad4!8m2!3d-33.2921332!4d-66.3396195!15sCgR1bnNsWgYiBHVuc2ySAQp1bml2ZXJzaXR5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJWT1daNk5ucFJSUkFC4AEA" target="_blank" rel="noopener noreferrer">Ejército de los Andes 950 San Luis</Link></li>
                    <p >San Luis Argentina</p>
                    <li >Telefono: <Link className="text-secondary" to="tel:+54 (0266) 4520300">+54 (0266) 4520300</Link></li>
                </ul>

            </Col>
          
            <Col className="text-center mt-5"xs={12} md={4}>
                  
                <h6 className="text-uppercase">Contacto</h6>
                <img src="../../image/icons/escudounslweb.png" width="150" height="100" alt=""/>  

                <ul className="list-unstyled  ">
                    
                    <p >San Luis Argentina</p>
                    <li >Telefono: <Link  className="text-secondary"  to="tel:+54 (0266) 4520300">+54 (0266) 4520300</Link></li>
                    <li >Telefono: <Link  className="text-secondary" to="tel:5159">5159</Link></li>
                    <li >Email: <Link  className="text-secondary" to="mailto: svts.unsl@gmail.com">svts.unsl@gmail.com</Link></li>
                </ul>

            </Col>
            
            <Col className="text-center mt-5"xs={12} md={4}>
                  
                <h5 className="text-uppercase">Redes</h5>
                <Link className=" bi bi-twitter m-3" to="tel:+54 (0266) 4520300">icon</Link>
                <Link className=" bi bi-twitter m-3" to="tel:+54 (0266) 4520300">icon</Link>
                <Link className=" bi bi-twitter" to="tel:+54 (0266) 4520300">icon</Link>
            

            </Col>

        </Row>
        <Row  className="text-center text-secondary bg-primary">
               
                <p className="mt-4">&#169; COPYRIGHT 2021 Secretaría de Vinculación Tecnológica y Social (UNSL) <br />Diseñado y desarrollado por Octavio Riccardo y Iván Agustín Lucero</p>

                

        </Row>



    </Container>



  );
}

export default footer;