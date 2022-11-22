import {Container,Row,Col} from 'react-bootstrap';
import ConvocatoriaCard from './ConvocatoriaCard'

function convocatoria() {
        const convocatoria1={ruta:'assets/svgs/convocatorias-1.svg'};
        const convocatoria2={ruta:'assets/svgs/convocatorias-2.svg'};
        const convocatoria3={ruta:'assets/svgs/convocatorias-3.svg'};
  return (

    <Container fluid className="convocatorias-bg mt-5 pb-5 ">
      <section className='container d-flex align-items-center flex-column'>
        <h2 className="mt-5 text-center encabezado-1 my-5">Convocatorias</h2>
        <h5 className="text-2 text-center w-75 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula purus, cursus imperdiet ipsum sodales eget. Vivamus ut lacus justo. Cras non ante nisl.</h5>
        <Row className='d-flex justify-content-center'>
          <Col className="d-flex justify-content-center">
            <ConvocatoriaCard ruta={convocatoria1.ruta}></ConvocatoriaCard>
          </Col>
          <Col className="d-flex justify-content-center">
            <ConvocatoriaCard ruta={convocatoria2.ruta}></ConvocatoriaCard>
          </Col>
          <Col className="d-flex justify-content-center">
            <ConvocatoriaCard ruta={convocatoria3.ruta}></ConvocatoriaCard>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default convocatoria;