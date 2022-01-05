import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from '../Components/NavBar';
import { store } from '../Redux/Store/Store';

afterEach(() => {
  cleanup();
});
describe('NavBar component', () => {
  render(
    <Provider store={store}>
      <Router>
        <NavBar />
      </Router>
    </Provider>,
  );

  const nav = screen.getByTestId('nav');
  it('Renders the Navbar', () => {
    expect(nav).toBeInTheDocument();
  });

  it('Renders the HouseList', () => {
    expect(nav).toHaveTextContent('HouseList');
  });

  it('Renders the Title', () => {
    expect(nav).toHaveTextContent('Find House');
  });

  it('Renders the Favourites', () => {
    expect(nav).not.toHaveTextContent('Favourites');
  });

  it('Does not render Element not on the page', () => {
    expect(nav).not.toHaveTextContent('Contact');
  });
});
