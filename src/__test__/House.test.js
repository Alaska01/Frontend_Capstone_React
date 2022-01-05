import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store/Store';
import '@testing-library/jest-dom';
import House from '../Components/House';

afterEach(() => {
  cleanup();
});

describe('House component tests', () => {
  render(
    <Provider store={store}>
      <Router>
        <House
          id={1}
          house_name="Aso Rock Abuja"
          house_description="Sit of Power"
          images="https://i.vimeocdn.com/video/1123408936-b7516ea04851535c75a7a15c0b82619097ff710a9cd3e3f33f60f7ca707ce1cc-d?mw=1100&mh=2200&q=70"
        />
      </Router>
    </Provider>,
  );

  const house = screen.getByTestId('hotel-card');
  test('Should Render House Component', () => {
    expect(house).toBeInTheDocument();
  });
  test('Component should contain Aso Rock Sit of Power', () => {
    expect(house).toHaveTextContent('Aso Rock Abuja');
  });

  test('Component should contain Aso Rock', () => {
    expect(house).not.toHaveTextContent('Welcome to my page');
  });
});
