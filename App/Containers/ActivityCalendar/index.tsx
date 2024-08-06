import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Screen } from '../../Components';
import { Header } from '../MarkGPA/components';
import {
    CalendarDetail,
    PageHeader,
    RightHeader,
    TopDetail
} from './components';
import styles from './styles';

const ActivityCalendar = () => {
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header from={'Activity Calendar'} />
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
      <CalendarDetail />
    </Screen>
  );
};

export default ActivityCalendar;
