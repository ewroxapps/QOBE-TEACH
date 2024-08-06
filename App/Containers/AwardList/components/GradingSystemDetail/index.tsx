import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const GradingSystemDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>85-100</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>4.00</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>A</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>-</Text>
        </View>
      </View>
    </View>
  );
};

export default GradingSystemDetail;
