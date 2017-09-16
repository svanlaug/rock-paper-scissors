import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Images } from '../constants';

/**
 * Get source for image based on type of button
 * @param  {string} type rock, paper or scissors
 * @return {number}
 */
function getImageSource(type) {
  switch (type) {
    case 'Rock':
      return Images.rock;
      break;
    case 'Paper':
      return Images.paper;
      break;
    case 'Scissors':
      return Images.scissors;
      break;
    default:
      break;
  }
}

const ImageButton = props => {
  return (
    <TouchableOpacity style={styles.imageButton} onPress={() => props.onPress()}>
      <Image style={styles.image} source={getImageSource(props.type)} />
    </TouchableOpacity>
  );
};

ImageButton.propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = {
  imageButton: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.transparent,
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparentWhite,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
  },
  image: {
    height: 50,
    width: 50,
  },
};

export default ImageButton;
