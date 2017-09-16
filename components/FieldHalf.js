import React from 'react';
import { Dimensions, View } from 'react-native';

import { Colors } from '../constants';

/**
 * Get style for fieldHalfContainer
 * @param  {string} typeOfPlayer  'Player' or 'Computer'
 * @return {object}                Style object
 */
function getFieldHalfContainerStyle(typeOfPlayer) {
  if (typeOfPlayer === 'Player') {
    return styles.lowerFieldHalfContainer;
  } else if (typeOfPlayer === 'Computer') {
    return styles.upperFieldHalfContainer;
  }
}

const FieldHalf = props => {
  return (
    <View style={[styles.fieldHalfContainer, getFieldHalfContainerStyle(props.typeOfPlayer)]}>
      {props.children}
    </View>
  );
};

const { height, width } = Dimensions.get('window');
const styles = {
  fieldHalfContainer: {
    height: height / 2,
    width: width,
  },
  upperFieldHalfContainer: {
    justifyContent: 'flex-end',
  },
  lowerFieldHalfContainer: {
    justifyContent: 'space-between',
  },
};

export default FieldHalf;
