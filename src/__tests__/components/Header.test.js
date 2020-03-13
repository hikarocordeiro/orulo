import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../../components/Header';

jest.mock('react-redux');

describe('Header component', () => {
  it('renders without crashing', () => {
    useSelector.mockImplementation(cb =>
      cb({
        favorite: [],
      })
    );

    const header = document.createElement('header');
    ReactDOM.render(
      <Router>
        <Header />
      </Router>,
      header
    );
  });

  it('should have 2 hyperlinks', () => {
    useSelector.mockImplementation(cb =>
      cb({
        favorite: [],
      })
    );

    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(document.querySelectorAll('a').length).toBe(2);
  });

  it('Component renders link to /', () => {
    useSelector.mockImplementation(cb =>
      cb({
        favorite: [],
      })
    );

    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(document.querySelector('a').getAttribute('href')).toBe('/');
  });

  it('Component renders link to /favorite', () => {
    useSelector.mockImplementation(cb =>
      cb({
        favorite: [],
      })
    );

    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    const links = document.querySelectorAll('a');

    expect(links[1].getAttribute('href')).toBe('/favorite');
  });
});
