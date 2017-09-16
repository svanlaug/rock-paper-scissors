import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../constants';

/**
 * Get style for ScoreContainer
 * @param  {string} typeOfPlayer  'Player' or 'Computer'
 * @return {object}                Style object
 */
function getScoreContainerStyle(typeOfPlayer) {
  if (typeOfPlayer === 'Player') {
    return styles.playerScoreContainer;
  } else if (typeOfPlayer === 'Computer') {
    return styles.computerScoreContainer;
  }
}

const Scoreboard = props => {
  return (
    <View style={[styles.scoreContainer, getScoreContainerStyle(props.typeOfPlayer)]}>
      <Text style={styles.score}>{props.score}</Text>
    </View>
  );
};

Scoreboard.propTypes = {
  score: PropTypes.number,
  typeOfPlayer: PropTypes.string,
};

const styles = {
  scoreContainer: {
    width: 100,
    height: 50,
    backgroundColor: Colors.transparentBlack,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.white,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
  },
  playerScoreContainer: {
    borderWidth: 3,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  computerScoreContainer: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  score: {
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: Colors.transparent,
    color: Colors.white,
  },
};

export default Scoreboard;
