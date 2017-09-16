import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

import { calculateWhoWins } from './utilities';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
