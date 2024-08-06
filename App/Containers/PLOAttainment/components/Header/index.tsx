import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Graph from '../../../../Assets/SVGs/Graph';
import styles from './styles';

const Header = () => {
  return (
    // @ts-ignore
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.innerContainer}>
          <Graph width={18} height={18} />
          <Text style={styles.textCLO}>PLO Attainment</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
