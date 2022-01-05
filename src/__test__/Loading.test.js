import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../Components/Loading';

describe('Loading Component', () => {
  it('Renders Loading', () => {
    render(<Loading />);
    expect(screen.getByText('loading...')).toBeInTheDocument();
  });

  it('Renders only loading', () => {
    render(<Loading />);
    expect(screen.queryByText('Welcome')).not.toBeInTheDocument();
  });
});
