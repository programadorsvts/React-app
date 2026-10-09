import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

jest.mock('../../../../LoginProvider', () => ({
  useAuthUserContext: () => mockAuthUser,
  useLogOutContext: () => jest.fn(),
}));
const mockAuthUser = () => false;

test.each(['navbar-folder-tab', 'navbar-medium-toggle'])('%s toggles the dropdown, closes on navigation and restores focus on Escape', async (toggleClass) => {
  render(<MemoryRouter><NavBar /></MemoryRouter>);
  const tab = document.querySelector(`.${toggleClass}`);
  const menu = document.getElementById(tab.getAttribute('aria-controls'));
  expect(tab).toHaveAttribute('aria-expanded', 'false');
  expect(menu).toHaveClass('collapse');
  expect(menu).not.toHaveClass('show');

  fireEvent.click(tab);
  expect(tab).toHaveAttribute('aria-expanded', 'true');
  await waitFor(() => expect(menu).toHaveClass('show'));
  fireEvent.click(screen.getByRole('link', { name: 'Revista Digital' }));
  expect(tab).toHaveAttribute('aria-expanded', 'false');
  await waitFor(() => expect(menu).not.toHaveClass('collapsing'));

  fireEvent.click(tab);
  await waitFor(() => expect(menu).toHaveClass('show'));
  const link = screen.getByRole('link', { name: 'Observatorio' });
  link.focus();
  fireEvent.keyDown(link, { key: 'Escape' });
  expect(tab).toHaveAttribute('aria-expanded', 'false');
  expect(tab).toHaveFocus();
});
