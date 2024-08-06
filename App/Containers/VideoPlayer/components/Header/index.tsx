import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { VideoVertical } from '../../../../Assets/SVGs';
import styles from './styles';


const Header = () => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
           <VideoVertical/>
          <Text style={styles.textCLO}>Video Player</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
