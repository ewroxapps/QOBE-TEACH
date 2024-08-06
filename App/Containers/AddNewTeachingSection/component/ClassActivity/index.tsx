import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ClassActivityProps } from './types';
const ClassActivity = (props:ClassActivityProps) => {
  return (
    
    // @ts-ignore
    <View style={styles.container}>
      <Text style={styles.blacktxt}>{props.activityname}</Text>
      <TouchableOpacity>
      <Text style={styles.redtxt}>Remove</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default ClassActivity;
