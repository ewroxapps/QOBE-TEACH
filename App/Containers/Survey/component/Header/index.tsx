import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Survey from '../../../../Assets/SVGs/Survey1';
import styles from './styles';
import { HeaderProps } from './types';
const Header = (props:HeaderProps) => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <Survey width={28} height={28}/>
          <Text style={styles.textCLO}>{props.title}</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
