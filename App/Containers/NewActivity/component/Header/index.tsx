import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ClassActivity from '../../../../Assets/SVGs/ClassActivity';
import styles from './styles';


const Header = () => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <ClassActivity/>
          <Text style={styles.textCLO}>Class Activity</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
