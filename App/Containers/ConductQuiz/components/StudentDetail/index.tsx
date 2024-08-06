import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { studentDetailsProps } from './types';
const StudentDetail = (props:studentDetailsProps) => {
  const [showAnswerSheet, setShowAnswerSheet] = useState(false);
  return (
   
      <View
        style={styles.container}>
        <View style={{ width: '25%' }}>
          <Text
            style={[
              styles.textWhite,
              { color: Colors.quizBlue, fontSize: 11 }
            ]}>
            {props.data.reg_no}
          </Text>
          <Text style={[styles.textWhite]}>{props.data.name}</Text>
        </View>

        <Text style={[styles.textWhite, { width: '20%' }]}>
          {props.data.started_when}
        </Text>
        <Text style={[styles.textWhite, { width: '20%' }]}>
          {props.data.completed_when}
        </Text>
        <Text style={[styles.textWhite, { width: '20%', color: props.data.status==='Submitted'?'#16A34A':Colors.red }]}>
          {props.data.status}
        </Text>
      </View>

  );
};

export default StudentDetail;
