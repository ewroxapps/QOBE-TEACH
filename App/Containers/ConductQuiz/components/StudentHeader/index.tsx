import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
const StudentHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textWhite,{width:'25%'}]}>Student Details</Text>
      <Text style={[styles.textWhite,{width:'20%'}]}>Start Time</Text>
      <Text style={[styles.textWhite,{width:'20%'}]}>Finish Time</Text>
      <Text style={[styles.textWhite,{width:'20%'}]}>Status</Text>
    </View>
  );
};

export default StudentHeader;
