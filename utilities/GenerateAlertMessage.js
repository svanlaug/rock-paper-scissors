/**
 * Generating a message, based on the rules of the game, to display in the alert based on the outcome
 * @param  {number} playerChoice   A number from 0-2 where 0 represents rock, 1 represents paper and 2 respresents scissors
 * @param  {number} computerChoice A number from 0-2 where 0 represents rock, 1 represents paper and 2 respresents scissors
 * @return {string}                A message to display in the alert
 */
export default function generateAlertMessage(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return messages[0];
  } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 0)
  ) {
    return messages[1];
  } else if (
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 0 && computerChoice === 1)
  ) {
    return messages[2];
  } else if (
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 1 && computerChoice === 2)
  ) {
    return messages[3];
  } else {
    throw 'Invalid inputs';
  }
}

/**
 * Possible outcomes of the game
 * @type {Array}
 */
const messages = ['Draw', 'Rock crushes Scissors', 'Paper covers Rock', 'Scissors cut Paper'];
