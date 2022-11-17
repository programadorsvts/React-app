import {Container,Col,Row} from 'react-bootstrap';
import './galeria.css';




function galeria() {
  return (

                <Container className='mt-5 '>
                        <Row>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-1-1' src='/assets/images/galeria1-1.png' alt=''></img>
                                <img className='img-galeria galeria-1-2' src='/assets/images/galeria1-2.png' alt=''></img>

                            </Col>

                            <Col className='' md={6} >

                                <img className='img-galeria galeria-2-1' src='/assets/images/galeria2-1.png' alt=''></img>
                                <img className='img-galeria galeria-2-2' src='/assets/images/galeria2-2.png' alt=''></img>

                            </Col>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-3-1' src='assets/images/galeria3-1.png' alt=''></img>
                                <img className='img-galeria galeria-3-2' src='assets/images/galeria3-2.png' alt=''></img>

                            </Col>

                        </Row>
                    </Container>

  );
}

export default galeria;
   
   
   
   
   
   
   
  