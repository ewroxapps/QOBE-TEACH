import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import TeachingPlan from '../../../../Assets/SVGs/TeachingPlan';
import styles from './styles';
const Header = () => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <TeachingPlan width={20} height={20}/> 
          <Text style={styles.textCLO}>Teaching Plan</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
