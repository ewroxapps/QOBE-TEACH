import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { HeaderProps } from './types';

const Header = (props:HeaderProps) => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
          <Text style={styles.textCLO}>{props.from}</Text>
        </View>      
      </View> 
    </View>
  );
};

export default Header;
