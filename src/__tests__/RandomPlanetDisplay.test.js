import React from 'react';
import RandomPlanetDisplay from '../components/RandomPlanetDisplay/RandomPlanetDisplay';
import TestRenderer from 'react-test-renderer';

describe('RandomPlanetDisplay component', () => {
  test('Should render without crashing', () => {
    TestRenderer.create(
      <RandomPlanetDisplay />
    );
  });
});