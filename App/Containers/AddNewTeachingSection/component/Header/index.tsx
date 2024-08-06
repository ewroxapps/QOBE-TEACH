import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import TeachingPlan from '../../../../Assets/SVGs/TeachingPlan';
import styles from './styles';
import { HeaderProps } from './types';
const Header = (props:HeaderProps) => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <TeachingPlan width={20} height={20}/> 
          <Text style={styles.textCLO}>{props.name}</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
