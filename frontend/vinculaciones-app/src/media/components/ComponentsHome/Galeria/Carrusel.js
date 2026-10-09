import { useCallback, useEffect, useRef, useState } from 'react';
import './carrusel.css';

const imagenes = [
  { src: '/assets/images/Carrousel-1-Prueba.jpg', alt: 'Revista UNSL 2.0: Horizontes productivos' },
  { src: '/assets/images/Carrousel-2-Prueba.jpg', alt: 'Concurso UNSL + i: innovación para resolver problemas' },
  { src: '/assets/images/Carrousel-3-Prueba.jpg', alt: 'Becas Leonardo 2026: convocatoria abierta' },
];

function Carrusel() {
  const trackRef = useRef(null);
  const arrastreRef = useRef(null);
  const [flechas, setFlechas] = useState({ anterior: false, siguiente: false });

  const actualizarFlechas = useCallback(() => {
    const track = trackRef.current;
    setFlechas({
      anterior: track.scrollLeft > 1,
      siguiente: track.scrollWidth - track.clientWidth - track.scrollLeft > 1,
    });
  }, []);

  useEffect(() => {
    actualizarFlechas();
    window.addEventListener('resize', actualizarFlechas);
    return () => window.removeEventListener('resize', actualizarFlechas);
  }, [actualizarFlechas]);

  const desplazar = (direccion) => {
    const track = trackRef.current;
    const paso = track.firstElementChild.offsetWidth + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({ left: direccion * paso });
  };

  const iniciarArrastre = (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const track = event.currentTarget;
    arrastreRef.current = { x: event.clientX, scrollLeft: track.scrollLeft };
    track.classList.add('carrusel-dragging');
    track.setPointerCapture(event.pointerId);
  };

  const arrastrar = (event) => {
    const arrastre = arrastreRef.current;
    if (!arrastre) return;
    event.currentTarget.scrollLeft = arrastre.scrollLeft + arrastre.x - event.clientX;
  };

  const terminarArrastre = (event) => {
    arrastreRef.current = null;
    event.currentTarget.classList.remove('carrusel-dragging');
  };

  return (
    <section className="carrusel mb-5" aria-label="Novedades de Vinculación Territorial" aria-roledescription="carrusel">
      <div className="carrusel-viewport">
        <div className="carrusel-track" id="novedades-carrusel" ref={trackRef} onScroll={actualizarFlechas}
          onPointerDown={iniciarArrastre} onPointerMove={arrastrar} onPointerUp={terminarArrastre}
          onPointerCancel={terminarArrastre} onLostPointerCapture={terminarArrastre}
          tabIndex={0} aria-label="Imágenes de novedades; usá las flechas del teclado, arrastrá con el mouse o deslizá para recorrerlas">
          {imagenes.map((imagen, index) => (
            <div className="carrusel-slide" key={imagen.src} role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${imagenes.length}`}>
              <img src={imagen.src} alt={imagen.alt} width="1416" height="1080" draggable={false} />
            </div>
          ))}
        </div>
      </div>
      <div className="carrusel-controls">
        <button type="button" aria-label="Imagen anterior" aria-controls="novedades-carrusel" aria-hidden={!flechas.anterior} disabled={!flechas.anterior} onClick={() => desplazar(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m14 4-8 8 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" aria-label="Imagen siguiente" aria-controls="novedades-carrusel" aria-hidden={!flechas.siguiente} disabled={!flechas.siguiente} onClick={() => desplazar(1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m10 4 8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </section>
  );
}

export default Carrusel;
