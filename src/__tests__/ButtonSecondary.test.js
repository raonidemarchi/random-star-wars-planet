import React from 'react';
import ButtonSecondary from '../components/ButtonSecondary/ButtonSecondary';
import TestRenderer from 'react-test-renderer';

describe('ButtonSecondary component', () => {
  test('Should render a hello button', () => {
    const tree = TestRenderer.create(
      <ButtonSecondary disabled={false} onClick={() => 'hello'}>
        Hello
      </ButtonSecondary>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should execute onClick function', () => {
    const message = 'I should the value returned from onClick';
    const tree = TestRenderer.create(
      <ButtonSecondary onClick={() => message} />
    ).toJSON();

    expect(tree.props.onClick()).toBe(message);
  });

  test('Should not trigger on click function', () => {
    const tree = TestRenderer.create(
      <ButtonSecondary disabled={true} onClick={() => `this text shouldn't be returned`}>
        Disabled
      </ButtonSecondary>
    ).toJSON();

    expect(typeof tree.props.onClick()).toBe('undefined');
  });
});