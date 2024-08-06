import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Profile } from '../../../../Assets/SVGs';
import styles from './styles';
import { MyHeaderProps } from './types';

const Header = (props: MyHeaderProps) => {
  return (

    <View >
      <View style={{ flexDirection: 'row', left: 80 }}>
        <View style={styles.innerContainer}>
          <Profile />
          {props.edit ? (
            <Text style={styles.textCLO}>Edit Profile</Text>
          ) : (
            <Text style={styles.textCLO}>Profile</Text>
          )

          }

        </View>
      </View>
    </View>
  );
};

export default Header;
