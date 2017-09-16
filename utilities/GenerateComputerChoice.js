/**
 * Generates a random integer between two specified values, inclusive
 * @param  {number} min Lower bound of desired range
 * @param  {number} max Upper bound of desired range
 * @return {number}     A random integer in the range [min, max]
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a number that represents the computer's choice in the game
 * @return {number}
 */
export default function generateComputerChoice() {
  return generateRandomNumber(0, choices.length - 1);
}

/**
 * The possible choices in the game
 * @type {Array}
 */
const choices = ['rock', 'paper', 'scissors'];
