import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Graph from '../../../../Assets/SVGs/Graph';
import styles from './styles';
import { HeaderProps } from './types';

const Header = (props: HeaderProps) => {
  return (
    // @ts-ignore
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.innerContainer}>
          <Graph width={18} height={18} />
          {props.type === 'PLO' ? (
            <Text style={styles.textCLO}>PLO Graph</Text>
          ) : (
            <Text style={styles.textCLO}>CLO Graph</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
