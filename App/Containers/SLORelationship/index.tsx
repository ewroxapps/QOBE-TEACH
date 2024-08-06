import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Screen } from '../../Components';
import { RightHeader, TopDetail } from '../ActivityCalendar/components';
import { Header } from '../MarkGPA/components';
import { PageHeader, SLODetail } from './components';
import styles from './styles';

const SLORelationship = () => {
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header from={'SLO Relationship'} />
    });
  };
  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    changeRight();
  });
  return (
    <Screen>
      <View style={styles.topContainer} />
      <TopDetail />
      <PageHeader />
      <SLODetail />
    </Screen>
  );
};

export default SLORelationship;
