import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TopDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centertxt}>
        <Text style={styles.header}>Relationship between Assessment Tool and SLOs</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.detailtxt}>Course: </Text>
        <Text style={styles.detailtxt}>COMP 111 - Programming Fundamentals</Text>
      </View>
    </View>
  );
};

export default TopDetail;
