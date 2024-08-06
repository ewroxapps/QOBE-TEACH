import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import BlackVideo from '../../../../Assets/SVGs/BlackVideo';
import styles from './styles';


const Header = () => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <BlackVideo/>
          <Text style={styles.textCLO}>Video Material</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
