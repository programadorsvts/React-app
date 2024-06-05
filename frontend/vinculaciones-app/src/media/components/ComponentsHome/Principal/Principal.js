import { Container } from 'react-bootstrap'
import Galeria from '../Galeria/Galeria';
import Cronograma from '../Galeria/Cronograma.js';
import './principal.css';
import Image from "react-bootstrap/Image";

/*{ href:'https://encuestas.siu.edu.ar/kollaencuestas/aplicacion.php?ai=kolla||40000174&h=232&f=232', src: 'assets/images/upa.webp', alt: 'imagen-7',clickable: false, component: <Image src='assets/images/upa.webp' fluid/> },
{ src: 'assets/images/galeria-2.jpg', alt: 'imagen-2',clickable: true, component: <Image src='assets/images/galeria-2.jpg' fluid/> },
{ src: 'assets/images/galeria-3.webp', alt: 'imagen-3',clickable: true, component: <Image src='assets/images/galeria-3.webp' fluid/> },
{ src: 'assets/images/galeria-4.webp', alt: 'imagen-4',clickable: true, component: <Image src='assets/images/galeria-4.webp' fluid/> },
{ src: 'assets/images/galeria-5.webp', alt: 'imagen-5',clickable: true, component: <Image src='assets/images/galeria-5.webp' fluid/> },
{ src: 'assets/images/galeria-6.jpg', alt: 'imagen-6',clickable: true , component: <Image src='assets/images/galeria-6.jpg' fluid/>},
{ src: 'assets/images/galeria-1.webp', alt: 'imagen-1',clickable: true , component: <Image src='assets/images/galeria-1.webp' fluid/>},
{ src: 'assets/images/galeria-7.webp',title: "CRONOGRAMA DE ACTIVIDADES JORNADA", alt: 'imagen-7',component:<Cronograma/> ,clickable: true }*/

function principal() {
  const media = [
      {src: 'assets/images/portada-revista-8.jpg', alt: 'imagen-1',clickable: false,type: 'image', component: <Image src='assets/images/portada-revista-8.jpg' fluid/> },
      {src: 'assets/images/Flyers-svts-4-de-junio.jpg', alt: 'imagen-2', type: 'image', clickable: false, component: <Image src='assets/images/Flyers-svts-4-de-junio.jpg' fluid/> },
      {src: 'assets/videos/semana-FICA.mp4', alt: 'video-1',clickable: false,type: 'video', component: <video src={'assets/videos/semana-FICA.mp4'} />}
  ];
  return (
    <Container fluid className="bg-home">
      <section className='container principal-body'>
        <h1 className="hero text-deg">Secretaría de Vinculación<br />Tecnológica y Social</h1>
        <p className="encabezado-3 mt-5 w-75">Promovemos la apropiación social de conocimiento generado en el ámbito de la Universidad Nacional de San Luis, impulsando la vinculación del sector científico-tecnológico con su entorno socio-productivo</p>
        <Galeria  media={media} />
      </section>
    </Container>
  );
}

export default principal;