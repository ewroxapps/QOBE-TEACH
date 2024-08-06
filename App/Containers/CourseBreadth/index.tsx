import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header } from '../MarkGPA/components';
import { BarGraph, PieChart, RightHeader } from './component';
import styles from './styles';

const CourseBreadth = () => {
  const [graph, setGraph] = useState('Pie Chart');
  const navigation = useNavigation();
  const data = [
    { value: 40, label: 'Cognitive', color: '#00FF00' },
    { value: 30, label: 'Psychomotor', color: '#FFA500' },
    { value: 30, label: 'Affective', color: '#0000FF' }
  ];
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header from={'Course Breadth'} />
    });
  };
  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => (
        <RightHeader graphType={graph} setgraphType={setGraph} />
      )
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    changeRight();
  });
  return (
    <View style={styles.container}>
      {graph === 'Pie Chart' ? <PieChart /> : <BarGraph />}
    </View>
  );
};

export default CourseBreadth;
