import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { usePlanDetailsQuery } from '../../../../RTK/Api/CourseApi';
import Header from '../Header';
import { Info, RightHeader } from './components';
import Attachments from './components/Attachments';
import styles from './styles';
const TeachingDetail = (props: any) => {
  var myid = props.route.params.id;
  const { isLoading, isFetching, isError, data } = usePlanDetailsQuery({
    id: myid ?? 0
  });

  const [planDetails, setPlanDetails] = useState<IClassPlanDetail | undefined>(
    undefined
  );
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };
  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader />
    });
  };
  useEffect(() => {
    changeHeaderTitle();
  });

  useEffect(() => {
    if (data) {
      setPlanDetails(data[0]);
    }
  });
  return (
    <ScrollView style={styles.container}>
      {data != undefined ? <Info data={planDetails} /> : null}

      <View style={styles.activityContainer}>
        {planDetails?.activities && planDetails?.activities?.length > 0 ? (
          <Text style={styles.activityTxt}>Class Activities</Text>
        ) : null}

        <View style={styles.container1}>
          {planDetails?.activities?.map((activity: string) => {
            return <Text style={styles.blckTxt}>{activity}</Text>;
          })}
        </View>
      </View>

      <View style={styles.activityContainer}>
        {planDetails?.resources && planDetails?.resources?.length > 0 ? (
          <Text style={styles.activityTxt}>Attachments</Text>
        ) : null}

        {planDetails?.resources?.map((resource, index, arr) => {
          return (
            <View key={index}>
              <Attachments resource={resource} />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TeachingDetail;
