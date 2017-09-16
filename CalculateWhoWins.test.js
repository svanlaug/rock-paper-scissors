import React from 'react';

import renderer from 'react-test-renderer';

import { calculateWhoWins } from './utilities';

const rock = 0;
const paper = 1;
const scissors = 2;

it('Draw', () => {
  expect(calculateWhoWins(rock, rock)).toBe('Nobody');
  expect(calculateWhoWins(paper, paper)).toBe('Nobody');
  expect(calculateWhoWins(scissors, scissors)).toBe('Nobody');
});

it('Rock crushes Scissors', () => {
  expect(calculateWhoWins(scissors, rock)).toBe('Computer');
  expect(calculateWhoWins(rock, scissors)).toBe('Player');
});

it('Paper covers rock', () => {
  expect(calculateWhoWins(rock, paper)).toBe('Computer');
  expect(calculateWhoWins(paper, rock)).toBe('Player');
});

it('Scissors cut Paper', () => {
  expect(calculateWhoWins(paper, scissors)).toBe('Computer');
  expect(calculateWhoWins(scissors, paper)).toBe('Player');
});

it('Fails on invalid inputs', () => {
  function failsOnInvalidInputs() {
    calculateWhoWins(25, 34);
  }
  expect(failsOnInvalidInputs).toThrowError('Invalid inputs');
});
