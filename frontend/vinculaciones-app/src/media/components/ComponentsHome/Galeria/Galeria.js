import {Container,Col,Row} from 'react-bootstrap';
import './galeria.css';




function galeria() {
  return (

                <Container className='mt-5 '>
                        <Row>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-1-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0poyuIzJhag3H_8rzjsh93bDU_tntDJ0_XTKamKBd-rsfnGn_ti8xnUpJMm3fxnmdzI&usqp=CAU'></img>
                                <img className='img-galeria galeria-1-2' src='https://galiapuerto.es/wp-content/uploads/2020/03/20200325-Oficina.jpg'></img>

                            </Col>

                            <Col className='' md={6} >

                                <img className='img-galeria galeria-2-1' src='https://ipmark.com/wp-content/uploads/oficina-ip-800x445.jpg'></img>
                                <img className='img-galeria galeria-2-2' src='https://galiapuerto.es/wp-content/uploads/2020/03/20200325-Oficina.jpg'></img>

                            </Col>

                            <Col md={3} sm={12}>

                                <img className='img-galeria galeria-3-1' src='https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg'></img>
                                <img className='img-galeria galeria-3-2' src='https://galiapuerto.es/wp-content/uploads/2020/03/20200325-Oficina.jpg'></img>

                            </Col>

                        </Row>
                    </Container>

  );
}

export default galeria;
   
   
   
   
   
   
   
  