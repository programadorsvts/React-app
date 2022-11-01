import {Container,Col,Row} from 'react-bootstrap';
import './galeria.css';




function galeria() {
  return (

                <Container className='mt-5 '>
                        <Row>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-1-1' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg'></img>
                                <img className='img-galeria galeria-1-2' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg '></img>

                            </Col>

                            <Col className='' md={6} >

                                <img className='img-galeria galeria-2-1' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg '></img>
                                <img className='img-galeria galeria-2-2' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg'></img>

                            </Col>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-3-1' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg'></img>
                                <img className='img-galeria galeria-3-2' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg'></img>

                            </Col>

                        </Row>
                    </Container>

  );
}

export default galeria;
   
   
   
   
   
   
   
  