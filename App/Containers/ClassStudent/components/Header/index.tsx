import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Student from '../../../../Assets/SVGs/Student';
import styles from './styles';
const Header = () => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <Student/>
          <Text style={styles.textCLO}>Class Students</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
