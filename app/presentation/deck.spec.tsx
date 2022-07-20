import React from 'react';
import { render } from '@testing-library/react';
import { BasicDeck } from './deck.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDeck />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
