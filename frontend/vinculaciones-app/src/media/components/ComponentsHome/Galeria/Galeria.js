import {Container,Col,Row} from 'react-bootstrap';
import './galeria.css';




function galeria() {
  return (

                <Container className='mt-5 '>
                        <Row>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-1-1' src='https://i.pinimg.com/564x/5b/f4/00/5bf4001cda3c84b59bb2e66fce38d727.jpg'></img>
                                <img className='img-galeria galeria-1-2' src='https://i.pinimg.com/564x/88/d7/f6/88d7f6e70a673f54c1d25bbf034c4f8f.jpg'></img>

                            </Col>

                            <Col className='' md={6} >

                                <img className='img-galeria galeria-2-1' src='https://tusradios.com.ar/uploads/noticias/5/2022/08/4ab6888d348d31303acd30fda37aeb90b6bf34b8.jpg '></img>
                                <img className='img-galeria galeria-2-2' src='https://tusradios.com.ar/uploads/noticias/5/2022/08/4ab6888d348d31303acd30fda37aeb90b6bf34b8.jpg'></img>

                            </Col>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-3-1' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg'></img>
                                <img className='img-galeria galeria-3-2' src='https://cdn.memegenerator.es/imagenes/memes/thumb/30/92/30920039.jpg'></img>

                            </Col>

                        </Row>
                    </Container>

  );
}

export default galeria;
   
   
   
   
   
   
   
  