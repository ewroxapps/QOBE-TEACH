import React from 'react';
import { Text, View } from 'react-native';
import QuestionList from '../QuestionList';
import styles from './styles';
import { ActivityProps } from './types';
const ActivityList = (props:ActivityProps) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>Quiz 1</Text>
        </View>

        <View style={{ width: '20%' }}>
          <Text style={styles.text}>10</Text>
        </View> 
      </View>
      <QuestionList cqi={props.cqi}/>
      <QuestionList cqi={false}/>
    </View>
  );
};

export default ActivityList;
