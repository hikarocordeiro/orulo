import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../../pages/Home';

jest.mock('react-redux');

describe('Home page', () => {
  it('renders without crashing', () => {
    useSelector.mockImplementation(cb =>
      cb({
        favorite: [],
      })
    );

    const ul = document.createElement('ul');
    ReactDOM.render(
      <Router>
        <Home />
      </Router>,
      ul
    );
  });

  it('should have list of buildings', () => {
    useSelector.mockImplementation(cb =>
      cb({
        favorite: [],
      })
    );

    render(<Home />);

    const ul = document.querySelector('ul');

    expect(ul).toBeInTheDocument();
  });
});
