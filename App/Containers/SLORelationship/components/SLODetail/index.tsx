import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const SLODetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.viewer}>
          <Text style={[styles.textColor, { fontSize: 10 }]}>Assignment</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={[styles.textColor, { fontSize: 10 }]}>100%(10.00)</Text>
        </View>
      </View>
    </View>
  );
};

export default SLODetail;
