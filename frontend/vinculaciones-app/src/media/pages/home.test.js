import { render, screen, within, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Carrusel from '../components/ComponentsHome/Galeria/Carrusel';

jest.mock('../components/ComponentsHome/Consulta/Consulta', () => () => null);
jest.mock('../components/ComponentsHome/Redes/Redes', () => () => null);

test('home shows the four Gestión destinations and the three carousel images', () => {
  window.scrollTo = jest.fn();
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RevistaDigitalPage" element={<h1>Revistas existentes</h1>} />
      </Routes>
    </MemoryRouter>
  );
  const gestion = screen.getByRole('region', { name: 'Gestión' });
  const links = within(gestion).getAllByRole('link');
  expect(links.map(link => link.querySelector('img').alt)).toEqual([
    'Quiénes somos', 'Comité de Vinculación', 'UVT', 'Revista',
  ]);
  expect(links.map(link => link.getAttribute('href'))).toEqual([
    '/assets/pdf/quienes-somos.pdf', '/assets/pdf/comite-vinculacion.pdf',
    '/assets/pdf/uvt-acreditacion.pdf', '/RevistaDigitalPage',
  ]);
  const carrusel = screen.getByRole('region', { name: 'Novedades de Vinculación Territorial' });
  expect(within(carrusel).getAllByRole('img').map(img => img.getAttribute('src'))).toEqual([
    '/assets/images/Carrousel-1-Prueba.jpg',
    '/assets/images/Carrousel-2-Prueba.jpg',
    '/assets/images/Carrousel-3-Prueba.jpg',
  ]);
  expect(document.querySelector('.galeria')).not.toBeInTheDocument();
  const track = document.getElementById('novedades-carrusel');
  track.scrollBy = jest.fn();
  Object.defineProperty(track.firstElementChild, 'offsetWidth', { value: 400 });
  Object.defineProperty(track, 'scrollWidth', { value: 1000 });
  Object.defineProperty(track, 'clientWidth', { value: 600, configurable: true });
  fireEvent(window, new Event('resize'));
  expect(within(carrusel).queryByRole('button', { name: 'Imagen anterior' })).not.toBeInTheDocument();
  expect(within(carrusel).getByRole('button', { name: 'Imagen siguiente' })).toBeEnabled();
  track.scrollLeft = 200;
  fireEvent.scroll(track);
  const siguiente = within(carrusel).getByRole('button', { name: 'Imagen siguiente' });
  const anterior = within(carrusel).getByRole('button', { name: 'Imagen anterior' });
  const computedStyle = jest.spyOn(window, 'getComputedStyle').mockReturnValue({ columnGap: '24px' });
  fireEvent.click(siguiente);
  expect(track.scrollBy).toHaveBeenLastCalledWith({ left: 424 });
  fireEvent.click(anterior);
  expect(track.scrollBy).toHaveBeenLastCalledWith({ left: -424 });
  computedStyle.mockRestore();
  track.scrollLeft = 399.5;
  fireEvent.scroll(track);
  expect(within(carrusel).queryByRole('button', { name: 'Imagen siguiente' })).not.toBeInTheDocument();
  expect(anterior).toBeEnabled();
  track.scrollLeft = 0;
  fireEvent.scroll(track);
  expect(within(carrusel).queryByRole('button', { name: 'Imagen anterior' })).not.toBeInTheDocument();
  expect(siguiente).toBeEnabled();
  Object.defineProperty(track, 'clientWidth', { value: 1000, configurable: true });
  fireEvent(window, new Event('resize'));
  expect(anterior).toBeDisabled();
  expect(siguiente).toBeDisabled();
  expect(screen.queryByText(/Convocatorias|Informe de autoevaluación|Servicios Tecnológicos de Alto Nivel|Acreditación como Incubadora|Protocolos|Jornada Ciencia/)).not.toBeInTheDocument();
  fireEvent.click(within(gestion).getByRole('link', { name: 'Revista' }));
  expect(screen.getByRole('heading', { name: 'Revistas existentes' })).toBeInTheDocument();
});

test('carousel follows mouse dragging and stops on release or cancellation while leaving touch native', () => {
  render(<Carrusel />);
  const track = document.getElementById('novedades-carrusel');
  track.setPointerCapture = jest.fn();
  track.scrollLeft = 100;
  const pointer = (type, clientX, pointerType = 'mouse', button = 0) => {
    const event = new MouseEvent(type, { bubbles: true, clientX, button });
    Object.assign(event, { pointerType, pointerId: 1 });
    fireEvent(track, event);
  };

  pointer('pointerdown', 300);
  expect(track.setPointerCapture).toHaveBeenCalledWith(1);
  expect(track).toHaveClass('carrusel-dragging');
  pointer('pointermove', 200);
  expect(track.scrollLeft).toBe(200);
  pointer('pointerup', 200);
  expect(track).not.toHaveClass('carrusel-dragging');
  pointer('pointermove', 100);
  expect(track.scrollLeft).toBe(200);

  pointer('pointerdown', 300);
  pointer('pointercancel', 300);
  pointer('pointermove', 200);
  expect(track.scrollLeft).toBe(200);
  expect(track).not.toHaveClass('carrusel-dragging');

  pointer('pointerdown', 300, 'touch');
  pointer('pointermove', 200, 'touch');
  expect(track.scrollLeft).toBe(200);
  expect(track).not.toHaveClass('carrusel-dragging');
  pointer('pointerdown', 300, 'mouse', 2);
  expect(track).not.toHaveClass('carrusel-dragging');
  expect(track.querySelector('img')).toHaveAttribute('draggable', 'false');
});
