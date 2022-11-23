import {Row,Col} from 'react-bootstrap';
import RedesCard from '../Redes/RedesCard'

function gestion() {
        const redes1={ruta:'assets/svgs/redes-1.svg'};
        const redes2={ruta:'assets/svgs/redes-2.svg'};
        const redes3={ruta:'assets/svgs/redes-3.svg'};
return (
    <section className="container my-5 d-flex flex-column align-items-center">
        <h2 className="my-5 text-center encabezado-1">Redes</h2>
        <p className="text-2 text-center w-75 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</p>
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