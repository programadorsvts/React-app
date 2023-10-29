import { Container } from 'react-bootstrap'
import Galeria from '../Galeria/Galeria';
import './principal.css';

function principal() {
  const imagenes = [
    { src: 'assets/images/galeria-4.webp', alt: 'imagen-4' },
    { src: 'assets/images/galeria-2.jpg', alt: 'imagen-2' },
    { src: 'assets/images/galeria-3.webp', alt: 'imagen-3' },
    { src: 'assets/images/galeria-1.webp', alt: 'imagen-1' },
    { src: 'assets/images/galeria-5.webp', alt: 'imagen-5' },
    { src: 'assets/images/galeria-6.jpg', alt: 'imagen-6' },
    { src: 'assets/images/galeria-7.webp', alt: 'imagen-7', clickable: true }
  ];
  return (
    <Container fluid className="bg-home">
      <section className='container principal-body'>
        <h1 className="hero text-deg">Secretaría de Vinculación<br />Tecnológica y Social</h1>
        <p className="encabezado-3 mt-5 w-75">Promovemos la apropiación social de conocimiento generado en el ámbito de la Universidad Nacional de San Luis, impulsando la vinculación del sector científico-tecnológico con su entorno socio-productivo</p>
        <Galeria imagenes={imagenes} />
      </section>
    </Container>
  );
}

export default principal;