import {Container,Row,Col} from 'react-bootstrap';
import ConvocatoriaCard from './ConvocatoriaCard'

function convocatoria() {
        const convocatoria1={
          ruta:'assets/svgs/convocatorias-1.svg',
          link:'http://svts.unsl.edu.ar/pdf/INFORME%20DE%20AUTOEVALUACION-2021.pdf',
        };
        const convocatoria2={
          ruta:'assets/svgs/convocatorias-2.svg',
          link:'http://svts.unsl.edu.ar/pdf/INFORME%20DE%20AUTOEVALUACION-2021.pdf',
        };
        const convocatoria3={
          ruta:'assets/svgs/convocatorias-3.svg',
        };
  return (

    <Container fluid className="convocatorias-bg mt-5 pb-5 ">
      <section className='container d-flex align-items-center flex-column'>
        <h2 className="mt-5 text-center encabezado-1 my-5">Convocatorias</h2>
        <Row className='d-flex justify-content-center'>
          <Col className="d-flex justify-content-center">
            <ConvocatoriaCard img={convocatoria1.ruta} link={convocatoria1.link}></ConvocatoriaCard>
          </Col>
          <Col className="d-flex justify-content-center">
            <ConvocatoriaCard img={convocatoria2.ruta} link={convocatoria2.link}></ConvocatoriaCard>
          </Col>
          <Col className="d-flex justify-content-center">
            <ConvocatoriaCard img={convocatoria3.ruta} link={convocatoria3.link}></ConvocatoriaCard>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default convocatoria;