import React from 'react';
import ReactDOM from 'react-dom';
import RandomPlanetDisplay from '../components/RandomPlanetDisplay/RandomPlanetDisplay';

describe('RandomPlanetDisplay component', () => {
  test('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RandomPlanetDisplay />, div);
  });
});