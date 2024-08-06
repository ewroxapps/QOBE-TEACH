import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import GreyAttendance from '../../../../Assets/SVGs/GreyAttendance';
import styles from './styles';


const Header = () => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <GreyAttendance/>
          <Text style={styles.textCLO}>Attendance Register</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
