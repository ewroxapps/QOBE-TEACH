import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { classProps } from './types';
const ClassActivity = (props: classProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.blckTxt}>{props.name}</Text>
    </View>
  );
};

export default ClassActivity;
