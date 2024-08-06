import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';
import { HeaderProps } from './types';

const Header = (props: HeaderProps) => {
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', left: 80 }}>
        <View style={[props.header.length === 20 && styles.innerContainer3, props.header.length > 10 && styles.innerContainer, props.header.length < 10 && styles.innerContainer2]}>
          {props.icon()}
          <Text style={styles.textCLO}>{props.header}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
