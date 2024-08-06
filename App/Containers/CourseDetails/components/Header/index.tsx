import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CoursesHollow } from '../../../../Assets/SVGs';
import styles from './styles';
import { HeadersProps } from './types';


const Header = (props: HeadersProps) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    // @ts-ignore
    <View >
      <View style={{ flexDirection: 'row', }}>
        <View style={styles.innerContainer}>
          <CoursesHollow width={24} />
          <Text style={styles.textCLO}>Course</Text>
        </View>      
      </View>
    </View>
  );
};

export default Header;
