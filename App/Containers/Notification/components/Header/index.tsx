import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import BlackNotification from '../../../../Assets/SVGs/BlackNotification';
import styles from './styles';
const Header = () => {
  return (
    
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <BlackNotification width={20} height={20}/>
          <Text style={styles.textCLO}>Send Notification</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
