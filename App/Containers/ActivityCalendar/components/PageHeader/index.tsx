import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const PageHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>Activity Name</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>Date</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>Marks</Text>
        </View>
        <View style={styles.viewer}>
          <Text style={styles.textColor2}>Weightage</Text>
        </View>
      </View>
    </View>
  );
};

export default PageHeader;
