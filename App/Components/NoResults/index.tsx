import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { NoResultsProps } from './types';

const NoResults = (props: NoResultsProps) => {
  const { message, icon } = props;
  return (
    <View style={styles.container}>
      {icon !== undefined && icon()}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default NoResults;
