import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import {
  useClassQuizCheckQuery,
  useClassQuizStatusQuery
} from '../../RTK/Api/CourseApi';
import { Header, QuizDetail, StudentDetail, Timer } from './components';
import styles from './styles';
const ConductQuiz = (props: any) => {
  const myID: number = props.route.params.id;

  const [reLoad, setReload] = useState(false);
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError, error } =
    useClassQuizCheckQuery({
      id: myID
    });

  const {
    data: StData,
    refetch: StRefetch,
    isFetching: StFetch,
    isLoading: STLoad,
    isError: StError,
    error: showError
  } = useClassQuizStatusQuery({
    id: myID
  });
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };
  useEffect(() => {
    changeHeaderTitle();
  });

  if (isFetching || isLoading || STLoad || StFetch) {
    return <Spinner />;
  }

  if (isError || StError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  const onRefresh = () => {
    refetch();
    StRefetch();
  };

  if (reLoad) {
    refetch();
    StRefetch();
    setReload(false);
  }

  return (
    <View>
      {data != undefined && StData != undefined ? (
        <View>
          <FlatList
            data={StData?.student_data?.detail}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            ListEmptyComponent={() => (
              <View style={styles.noResults}>
                <NoResults message={'Currently no data found'} />
              </View>
            )}
            ListHeaderComponent={() => (
              <>
                <View style={styles.topContainer}>
                  <Timer data={data} myID={myID} setReload={setReload} />
                  <QuizDetail data={StData?.student_data} />
                </View>
              </>
            )}
            renderItem={({ item, index }) => (
              <StudentDetail data={item} index={index + 1} />
            )}
          />
        </View>
      ) : (
        <View>
          <Text>Please Wait</Text>
        </View>
      )}
    </View>
  );
};

export default ConductQuiz;
