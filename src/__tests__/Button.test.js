import React from 'react';
import Button from '../components/Button/Button';
import TestRenderer from 'react-test-renderer';

describe('Button component', () => {
  test('Should render a hello button', () => {
    const tree = TestRenderer.create(
      <Button disabled={false} onClick={() => 'hello'}>
        Hello
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should execute onClick function', () => {
    const message = 'I should the value returned from onClick';
    const tree = TestRenderer.create(
      <Button onClick={() => message} />
    ).toJSON();

    expect(tree.props.onClick()).toBe(message);
  });

  test('Should not trigger on click function', () => {
    const tree = TestRenderer.create(
      <Button disabled={true} onClick={() => `this text shouldn't be returned`}>
        Disabled
      </Button>
    ).toJSON();

    expect(typeof tree.props.onClick()).toBe('undefined');
  });
});