
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card'

function noticias() {
        
        const noticia1= {
                imagen:'assets/images/noticia-1.jpg',
                fecha:'4 de Junio de 2022',
                texto:'Día de la Vinculación Tecnológica'
        };
        const noticia2= {
                imagen:'assets/images/noticia-2.png',
                fecha:'5 de Octubre de 2022',
                texto:'Día de la Vinculación Tecnológica' 
        };
        const noticia3= {
                imagen:'assets/images/noticia-3.png',
                fecha:'6 de Junio de 2022',
                texto:'Día de la Vinculación Tecnológica' 
        };
        const noticia4= {
                imagen:'assets/images/noticia-4.png',
                fecha:'7 de junio de 2022',
                texto:'Día de la Vinculación Tecnológica' 
        };

        return (

       <>
                <h3 className="encabezado-2  mt-5 d-flex justify-content-center">Noticias</h3>
                <section className='container d-flex align-items-center flex-column mt-5'>
                        <Row className=''>
                                <Col className='d-flex justify-content-center'>
                                        <Card info={noticia1}></Card>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                        <Card info={noticia2}></Card>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                        <Card info={noticia3}></Card>
                                </Col>
                                <Col className='d-flex justify-content-center'>
                                        <Card info={noticia4}></Card>
                                </Col>
                        </Row>
                </section>
        </>

        );
}

export default noticias;