import {Row,Col} from 'react-bootstrap';
import RedesCard from '../Redes/RedesCard'

function gestion() {
        const redes1={
                ruta:'assets/svgs/redes-1.svg',
                link:"https://www.cin.edu.ar/comisiones/vinculacion-tecnologica-redvitec/"
        };
        const redes2={
                ruta:'assets/svgs/redes-2.svg',
                link:"http://grupomontevideo.org/sitio"
        };
        const redes3={
                ruta:'assets/svgs/redes-3.svg', 
                link: "http://grupomontevideo.org/cp/cpcienciatecnologiaeinnovacion/"
        };
return (
    <section className="container my-5 d-flex flex-column align-items-center">
        <h2 className="my-5 text-center encabezado-1">Redes</h2>
        <Row className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center">
                    <RedesCard info={redes1}></RedesCard>
            </Col>
            <Col className="d-flex justify-content-center">
                    <RedesCard info={redes2}></RedesCard>
            </Col>
            <Col className="d-flex justify-content-center">
                    <RedesCard info={redes3}></RedesCard>
            </Col>
        </Row>
    </section>
  );
}

export default gestion;