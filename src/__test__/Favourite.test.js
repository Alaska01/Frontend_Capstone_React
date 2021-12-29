import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store/Store';
import '@testing-library/jest-dom';
import Favourites from '../Containers/Favourite';

afterEach(() => {
  cleanup();
});

describe('Favourite component tests', () => {
  render(
    <Provider store={store}>
      <Router>
        <Favourites
          id="1"
          house_name="Aso Rock Abuja"
          house_description="A favorite hideaway for movie stars of Hollywood's golden age, Hotel Il Pellicano exudes timeless elegance and understated luxury. Perched on the Tuscan coast amid tranquil gardens, the hotel's rooms and suites have garden or sea views, and the restaurant features Italian cuisine that has earned it one Michelin star."
          image="https://i.vimeocdn.com/video/1123408936-b7516ea04851535c75a7a15c0b82619097ff710a9cd3e3f33f60f7ca707ce1cc-d?mw=1100&mh=2200&q=70"
        />
      </Router>
    </Provider>,
  );

  const favourite = screen.queryByTestId('favourite');

  test('Should Render Favourite Component', () => {
    expect(favourite).toBeInTheDocument();
  });
  test('Component should contain Porto Ercole, Italy', () => {
    expect(favourite).not.toHaveTextContent('Welcome to my page');
  });
});