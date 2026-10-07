import { render, screen, within, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './home';

jest.mock('../components/ComponentsHome/Consulta/Consulta', () => () => null);
jest.mock('../components/ComponentsHome/Redes/Redes', () => () => null);

test('home shows the four Gestión destinations and only the two retained plates', () => {
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
  expect(screen.getByAltText('El Triángulo de Sábato')).toBeInTheDocument();
  expect(screen.getByAltText('SubVT: direcciones y canales de contacto')).toBeInTheDocument();
  expect(document.querySelectorAll('.galeria img')).toHaveLength(2);
  expect(screen.queryByText(/Convocatorias|Informe de autoevaluación|Servicios Tecnológicos de Alto Nivel|Acreditación como Incubadora|Protocolos|Jornada Ciencia/)).not.toBeInTheDocument();
  fireEvent.click(within(gestion).getByRole('link', { name: 'Revista' }));
  expect(screen.getByRole('heading', { name: 'Revistas existentes' })).toBeInTheDocument();
});
