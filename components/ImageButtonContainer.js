import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import ImageButton from './ImageButton';

const ImageButtonContainer = props => {
  const buttons = props.buttons.map((item, index) => {
    return <ImageButton type={item} key={index} onPress={() => props.onPress(index)} />;
  });
  return <View style={styles.imageButtonContainer}>{buttons}</View>;
};

ImageButtonContainer.propTypes = {
  buttons: PropTypes.array,
  onPress: PropTypes.func,
};

const styles = {
  imageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
};

export default ImageButtonContainer;
