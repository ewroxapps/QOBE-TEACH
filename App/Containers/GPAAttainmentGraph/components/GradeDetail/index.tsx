import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const GradeDetail = () => {
  
  return (
  

        <View style={styles.markItTop}>
          <View style={styles.topHeading}>
            <View style={styles.txtView}>
              <Text style={styles.whitTxt}>A</Text>
            </View>
            <View style={styles.txtView}>
              <Text style={styles.whitTxt}>5</Text>
            </View>
          </View>
        </View>
      

  );
};

export default GradeDetail;
