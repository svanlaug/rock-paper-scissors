import React from 'react';
import { Dimensions, View } from 'react-native';

import { Colors } from '../constants';

const FieldDivider = () => {
  return <View style={styles.divider} />;
};

const { height, width } = Dimensions.get('window');
const styles = {
  divider: {
    position: 'absolute',
    top: height / 2,
    width: width,
    borderTopWidth: 3,
    borderColor: Colors.white,
  },
};

export default FieldDivider;
