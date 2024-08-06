import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { NoResults, Spinner } from '../../Components';
import { useClassSurveyQuery } from '../../RTK/Api/CourseApi';
import { Header, SurveyComponent } from './component';
import styles from './style';
const Survey = (props: any) => {
  var myId = props.route.params.id;
  const { data, refetch, isFetching, isLoading } = useClassSurveyQuery({
    id: myId
  });
  const navigation = useNavigation();
  const navigations = useNavigation<ICoursesNavigationProp>();
  const [required, setRequired] = useState(false);
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header title="Survey" />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  });
  const onRefresh = () => {
    refetch();
  };
  if (isLoading || isFetching) {
    return <Spinner />;
  }

  return (
    <View style={styles.topContainer}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <NoResults message={'Survey not available'} />
          </View>
        )}
        renderItem={({ item, index }) => (
          <SurveyComponent data={item} index={index + 1} />
        )}
      />
      {required ? (
        <View style={styles.containers}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigations.navigate('CreateSurvey', {});
            }}>
            <View style={styles.innerContainer}>
              <View style={styles.innerContainer2}>
                <Text style={styles.textWhite}>+</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Survey;
