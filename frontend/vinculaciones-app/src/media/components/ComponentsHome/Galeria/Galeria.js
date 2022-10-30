import {Container,Col,Row} from 'react-bootstrap';
import './galeria.css';




function galeria() {
  return (

                <Container >
                        <Row>

                            <Col>

                                <img className='img-galeria galeria-1-1' src='../../../../../public/image/Noticia-pdts.svg '></img>
                                <img className='img-galeria galeria-1-2' src='../../../../../public/image/Noticia-pdts.svg '></img>

                            </Col>

                            <Col className='col-6'>

                                <img className='img-galeria galeria-2-1' src=' '></img>
                                <img className='img-galeria galeria-2-2' src=''></img>

                            </Col>

                            <Col className='col'>

                                <img className='img-galeria galeria-3-1' src=''></img>
                                <img className='img-galeria galeria-3-2' src=''></img>

                            </Col>

                        </Row>
                    </Container>

  );
}

export default galeria;
   
   
   
   
   
   
   
  