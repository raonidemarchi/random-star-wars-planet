import React from 'react';
import Card, { CardTitle, CardBody, CardFooter } from '../components/Card/Card';
import TestRenderer from 'react-test-renderer';

describe('Card component', () => {
  test('Should render a card with title, body and footer', () => {
    const tree = TestRenderer.create(
      <Card>
        <CardTitle>Title</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children[0].children).toStrictEqual(['Title']);
    expect(tree.children[1].children).toStrictEqual(['Body']);
    expect(tree.children[2].children).toStrictEqual(['Footer']);
  });
});