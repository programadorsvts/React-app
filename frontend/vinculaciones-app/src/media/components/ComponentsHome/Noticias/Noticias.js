import {Container,Row,Col} from 'react-bootstrap';

import Card from './Card'




function noticias() {
        
    
        
        const noticia1={imagen:'assets/images/noticia-1.jpg'  ,fecha:'4 de Junio de 2022',          texto:'Día de la Vinculación Tecnológica'};
        const noticia2={imagen:'assets/images/noticia-2.png' ,fecha:'5 de Octubre de 2022',     texto:'Día de la Vinculación Tecnológica' };
        const noticia3={imagen:'assets/images/noticia-3.png' ,fecha:'6 de Junio de 2022',          texto:'Día de la Vinculación Tecnológica' };
        const noticia4={imagen:'assets/images/noticia-4.png' ,fecha:'7 de junio de 2022',          texto:'Día de la Vinculación Tecnológica' };

        
  return (


    <Container  className=" "  >
        
        
        
        <Row className=" mb-5  d-flex  justify-content-center ">
                <h4 className="text-start ms-5 mt-5 ">Noticias</h4>
            <Col className=" mt-3 mb-2  d-flex justify-content-center" xs     >
                    
                    <Card info={noticia1}></Card>
            
            </Col>

            <Col className="mt-3 mb-2 d-flex justify-content-center   " xs    >
                    
                    <Card  info={noticia2}></Card>
            
            </Col>

            <Col className="mt-3 mb-2 d-flex justify-content-center " xs    >
                    
                    <Card  info={noticia3}></Card>
            
            </Col>
             <Col className="mt-3 mb-2 d-flex justify-content-center " xs    >
                    
                    <Card   info={noticia4}></Card>
            
            </Col>
        </Row>
    </Container>



  );
}

export default noticias;