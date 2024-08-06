import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import Resource from '../../../Assets/SVGs/Resource';
import styles from './styles';


const Header = () => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
          <Resource width={18} height={18}/>
          <Text style={styles.textCLO}>Resources</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
