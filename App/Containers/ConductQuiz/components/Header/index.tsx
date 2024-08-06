import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
const Header = () => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
          <Text style={styles.textCLO}>Test Quiz</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
