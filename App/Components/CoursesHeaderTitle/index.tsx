import React from 'react';
import { View, Text } from 'react-native';
import { CoursesHollow } from '../../Assets/SVGs';
import styles from './styles';
import { CoursesHeaderProps } from './types';

const CoursesHeaderTitle = (props: CoursesHeaderProps) => {
  return (
    <View style={styles.container}>
      <CoursesHollow width={24} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
export default CoursesHeaderTitle;
