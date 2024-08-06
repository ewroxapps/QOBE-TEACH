import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const CalendarDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>Assignment 10</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>12-06-2023</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>15.00</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>1.3%</Text>
        </View>
      </View>
    </View>
  );
};

export default CalendarDetail;
