import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Graph from '../../../../Assets/SVGs/Graph';
import styles from './styles';
import { HeaderProps } from './type';

const Header = (props: HeaderProps) => {
  return (
    // @ts-ignore
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.innerContainer}>
          <Graph width={18} height={18} />
          {props.type === 'PLO' ? (
            <Text style={styles.textCLO}>PLO Attainment</Text>
          ) : (
            <View>
              {props.type === 'Marks' ? (
                <Text style={styles.textCLO}>Marks (OBE)</Text>
              ) : (
                <Text style={styles.textCLO}>SLO Attainment</Text>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
