import { Row, Col } from 'react-bootstrap';
import VinculacionesCard from './VinculacionesCard';
import './vinculaciones.css';

function Gestion() {
  const accesos = [
    { titulo: 'Quiénes somos', ruta: '/assets/svgs/quienes-somos.svg', link: '/assets/pdf/quienes-somos.pdf' },
    { titulo: 'Comité de Vinculación', ruta: '/assets/svgs/comite-vinculacion.svg', link: '/assets/pdf/comite-vinculacion.pdf' },
    { titulo: 'UVT', ruta: '/assets/svgs/uvt.svg', link: '/assets/pdf/uvt-acreditacion.pdf' },
    { titulo: 'Revista', ruta: '/assets/svgs/vinculaciones-2.svg', link: '/RevistaDigitalPage', interno: true },
  ];
  return (
    <section className="container gestion-accesos my-5" aria-labelledby="gestion-title">
      <h2 id="gestion-title" className="text-center encabezado-1 my-5">Gestión</h2>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {accesos.map(acceso => (
          <Col key={acceso.titulo} className="d-flex justify-content-center">
            <VinculacionesCard data={acceso} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
export default Gestion;
