import React from 'react';

import renderer from 'react-test-renderer';

import { generateAlertMessage } from './utilities';

const rock = 0;
const paper = 1;
const scissors = 2;

it('Draw', () => {
  expect(generateAlertMessage(rock, rock)).toBe('Draw');
  expect(generateAlertMessage(paper, paper)).toBe('Draw');
  expect(generateAlertMessage(scissors, scissors)).toBe('Draw');
});

it('Rock crushes Scissors', () => {
  expect(generateAlertMessage(scissors, rock)).toBe('Rock crushes Scissors');
  expect(generateAlertMessage(rock, scissors)).toBe('Rock crushes Scissors');
});

it('Paper covers rock', () => {
  expect(generateAlertMessage(rock, paper)).toBe('Paper covers Rock');
  expect(generateAlertMessage(paper, rock)).toBe('Paper covers Rock');
});

it('Scissors cut Paper', () => {
  expect(generateAlertMessage(paper, scissors)).toBe('Scissors cut Paper');
  expect(generateAlertMessage(scissors, paper)).toBe('Scissors cut Paper');
});

it('Fails on invalid inputs', () => {
  function failsOnInvalidInputs() {
    generateAlertMessage(25, 34);
  }
  expect(failsOnInvalidInputs).toThrowError('Invalid inputs');
});
