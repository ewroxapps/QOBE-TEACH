import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const ActivityDetail = (props: any) => {
  return (
    <View
      style={[
        styles.justifyView,
        { top: -60, paddingLeft: 10, paddingRight: 10,
         marginTop:20
        }
      ]}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.quizBlueTxt}>MCS203022</Text>
          <Text style={styles.txtColor}>Kinza Zeeshan</Text>
        </View>
      </View>
      <View style={[styles.justifyView, { flex: 1,alignItems:'center',
    top:5}]}>
        <Text style={[styles.txtColor,{left:30}]}>35</Text>
        <Text style={[styles.txtColor,{right:30}]}>10</Text>
      </View>
    </View>
  );
};

export default ActivityDetail;
