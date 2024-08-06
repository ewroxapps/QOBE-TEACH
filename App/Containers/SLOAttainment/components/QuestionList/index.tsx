import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { QuestProps } from './types';
const QuestionList = (props: QuestProps) => {
  return (
    <View>
      <View style={styles.container}>
        {props.cqi ? (
          <Text style={[styles.CQItxT, { marginLeft: -80, width: '20%', fontSize:8 }]}>
            CQI Based Activity
          </Text>
        ) : null}

        <Text style={[props.cqi ? styles.qTxt: styles.txts]}>Q1</Text>
        <Text style={[styles.txt, props.cqi ? {right:20}:{ right:1}]}>0.00</Text>
        <Text style={[styles.txt, { width: '20%' }]}>0.00</Text>
      </View>
    </View>
  );
};

export default QuestionList;
