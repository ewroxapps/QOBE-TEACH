import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TopDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centertxt}>
        <Text style={styles.header}>Class Room Combined Result(GPA)</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.detailtxt}>Course: </Text>
        <Text style={styles.detailtxt}>COMP 111 - Programming Fundamentals</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.detailtxt}>Course Section: </Text>
        <Text style={styles.detailtxt}>COMP 111 - Fall-2022</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.detailtxt}>Teacher: </Text>
        <Text style={styles.detailtxt}>teacher1</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.detailtxt}>Semester: </Text>
        <Text style={styles.detailtxt}>Fall-2021</Text>
      </View>
    </View>
  );
};

export default TopDetail;
