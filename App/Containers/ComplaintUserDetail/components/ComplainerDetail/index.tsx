import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { HeaderProps } from './types';
const ComplainerDetail = (props: HeaderProps) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>Complainer Detail</Text>
      <View style={styles.justifyView}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.heading} >Email</Text>
          <Text style={styles.detail}>{props.data.email}</Text>
        </View>

        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.heading} >Program</Text>
          <Text style={styles.detail}>{props.data.program}</Text>
        </View>
      </View>

      <View style={styles.justifyView}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.heading} >Registeration Number</Text>
          <Text style={styles.detail}>{props.data.reg_no}</Text>
        </View>

        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.heading} >Roll Number</Text>
          <Text style={styles.detail}>{props.data.roll_no}</Text>
        </View>

      </View>
    </View>
  );
};

export default ComplainerDetail;
