import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { studentDetailProps } from './types';
const StudentDetail = (props:studentDetailProps) => {
  return (
    <View style={styles.topHeading}>
      <View style={styles.txtView}>
        <Text style={[styles.whitTxt,{color:Colors.quizBlue}]}>{props.data.clo_code}</Text>
      </View>
      <View style={styles.txtView}>
        <Text style={[styles.whitTxt,{marginLeft:5}]}>{props.data.total_students}</Text>
      </View>
      <View style={styles.txtView}>
        <Text style={[styles.whitTxt,{marginLeft:5}]}>{props.data.pass_student}</Text>
      </View>
      <View style={styles.txtView}>
        <Text style={[styles.whitTxt,{marginLeft:5}]}>{props.data.percentage}</Text>
      </View>
      <View style={styles.txtView}>
        <Text style={[styles.whitTxt,{marginLeft:5}]}>{props.data.average}</Text>
      </View>
    </View>
  );
};

export default StudentDetail;
