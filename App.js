import React from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { LinearGradient } from 'expo';

import {
  FieldDivider,
  FieldHalf,
  ImageButtonContainer,
  ImageButton,
  Scoreboard,
  Username,
} from './components';
import { Colors } from './constants';
import { calculateWhoWins, generateAlertMessage, generateComputerChoice } from './utilities';

export default class App extends React.Component {
  state = {
    playerScore: 0,
    computerScore: 0,
  };

  onPressImageButton(playerChoice) {
    const computerChoice = generateComputerChoice();
    const winner = calculateWhoWins(playerChoice, computerChoice);
    this.showAlertDialog(winner, playerChoice, computerChoice);
  }

  showAlertDialog(winner, playerChoice, computerChoice) {
    const alertMessage = generateAlertMessage(playerChoice, computerChoice);
    Alert.alert(
      `${winner} Wins`,
      `Player chose ${choices[playerChoice]}\nComputer chose ${choices[
        computerChoice
      ]}\n${alertMessage}`,
      [{ text: 'OK', onPress: () => this.addPointsToScoreboard(winner) }]
    );
  }

  addPointsToScoreboard(winner) {
    switch (winner) {
      case 'Player':
        this.setState({
          playerScore: this.state.playerScore + 1,
        });
        break;
      case 'Computer':
        this.setState({
          computerScore: this.state.computerScore + 1,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <LinearGradient colors={[Colors.lightGreen, Colors.mediumGreen]} style={styles.fieldBounds}>
          <FieldHalf typeOfPlayer={players[0]}>
            <Scoreboard score={this.state.computerScore} typeOfPlayer={players[0]} />
          </FieldHalf>
          <FieldHalf typeOfPlayer={players[1]}>
            <Scoreboard score={this.state.playerScore} typeOfPlayer={players[1]} />
            <ImageButtonContainer
              buttons={choices}
              onPress={index => this.onPressImageButton(index)}
            />
          </FieldHalf>
          <Username username={players[0]} />
          <FieldDivider />
          <Username username={players[1]} />
        </LinearGradient>
      </View>
    );
  }
}

/**
 * The possible choices in the game
 * @type {Array}
 */
const choices = ['Rock', 'Paper', 'Scissors'];
const players = ['Computer', 'Player'];

const styles = {
  container: {
    flex: 1,
  },
  fieldBounds: {
    flex: 1,
    borderWidth: 3,
    borderColor: Colors.white,
  },
};
