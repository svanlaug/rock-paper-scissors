/**
 * Comparing playerChoice and computerChoice and returning who won the game
 * @param  {number} playerChoice   A number from 0-2 where 0 represents rock, 1 represents paper and 2 respresents scissors
 * @param  {number} computerChoice A number from 0-2 where 0 represents rock, 1 represents paper and 2 respresents scissors
 * @return {string}                Who won the game: Player, Computer or if it is a draw then Nobody
 */
export default function calculateWhoWins(playerChoice, computerChoice) {
  if (playerChoice < 0 || playerChoice > 2 || computerChoice < 0 || computerChoice > 2) {
    throw 'Invalid inputs';
  }

  const playerScore = truthTable[playerChoice][computerChoice];
  const computerScore = truthTable[computerChoice][playerChoice];

  if (playerScore > computerScore) {
    return 'Player';
  } else if (computerScore > playerScore) {
    return 'Computer';
  } else if (playerScore === computerScore) {
    return 'Nobody';
  }
}

/**
 * An array that represents how many points a player gets based on
 * what the computer chose and what the player chose.
 *.----------.------.-------.----------.
 *|          | Rock | Paper | Scissors |
 *:----------+------+-------+----------:
 *| Rock     |    0 |     0 |        1 |
 *:----------+------+-------+----------:
 *| Paper    |    1 |     0 |        0 |
 *:----------+------+-------+----------:
 *| Scissors |    0 |     1 |        0 |
 *'----------'------'-------'----------'
 * @type {Array}
 */
// prettier-ignore
const truthTable = [
  [0,0,1],
  [1,0,0],
  [0,1,0]
]
