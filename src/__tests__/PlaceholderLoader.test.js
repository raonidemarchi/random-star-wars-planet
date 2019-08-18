import React from 'react';
import PlaceholderLoader from '../components/PlaceholderLoader/PlaceholderLoader';
import TestRenderer from 'react-test-renderer';

describe('PlaceholderLoader component', () => {
  test('Should render a PlaceholderLoader', () => {
    const tree = TestRenderer.create(
      <PlaceholderLoader />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});