import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { quizDetailProps } from './types';
const QuizDetail = (props:quizDetailProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={[styles.numberTxt, { color: '#475569' }]}>{props.data?.total ? props.data.total :'0'}</Text>
        <Text style={styles.txt}>Total Student</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <Text style={[styles.numberTxt, { color: '#38BDF8' }]}>{props.data?.started ? props.data.started :'0'}</Text>
        <Text style={styles.txt}>Started</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <Text style={[styles.numberTxt, { color: '#16A34A' }]}>{props.data?.submitted ? props.data.submitted :'0'}</Text>
        <Text style={styles.txt}>Submitted</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <Text style={[styles.numberTxt, { color: '#E11D48' }]}>{props.data?.not_attempted ? props.data.not_attempted :'0'}</Text>
        <Text style={styles.txt}>Attempted</Text>
      </View>
    </View>
  );
};

export default QuizDetail;
