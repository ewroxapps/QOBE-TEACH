import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const AwardDetail = () => {
  return (
    
      <View style={styles.justifyView}>
        <View style={styles.innerContainer}>
          <Text style={styles.regTxt}>MCS203022</Text>
          <Text style={styles.simplBlackTxt}>Kinza Zeeshan</Text>
        </View>
        <View
          style={[
            styles.innerContainer,
            { justifyContent: 'center', alignItems: 'center' }
          ]}>
          <Text style={styles.simplBlackTxt}>10</Text>
        </View>
      </View>
   
  );
};

export default AwardDetail;
