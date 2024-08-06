import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Assistants from '../../../../Assets/SVGs/Assistants';
import styles from './styles';
const Header = () => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <Assistants/>
          <Text style={styles.textCLO}>Class Assistants</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
