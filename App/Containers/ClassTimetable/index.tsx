import { useNavigation, } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  RefreshControl,
  View
} from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useClassroomTimetableQuery } from '../../RTK/Api/CourseApi';
import { LectureItem } from './components';
import styles from './styles';
const ClassTimetable = (props: any) => {
  var id: number = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');
  const { t } = useTranslation('timetable');
  const [modal, setModal] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const navigation = useNavigation();
  const {
    refetch,
    isError,
    isLoading,
    data: timetable,
    isFetching,
    error
  } = useClassroomTimetableQuery({ id: id });

  const onRefresh = () => {
    refetch();
  };

  if(refresh){
    refetch()
    setRefresh(false)
  }

  if (isError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }
  if (isLoading || isFetching) {
    return <Spinner />;
  }
  return (
    <Screen style={{ flex: 1 }}>
      {timetable?.length == 0 ? (
        <View style={styles.noResultsContainer}>
          <NoResults message={t('noTimetable')} />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={timetable}
            refreshing={isFetching}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            renderItem={({ item }) => (
              <View style={styles.lectureItemContainer}>
                <LectureItem lecture={item} id={id} setRefreshed={setRefresh}/>
              </View>
            )}
          />
        </View>
      )}

  {/* {!modal ? (
        <View style={styles.containers}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModal(!modal);
            }}>
            <View style={styles.innerContainer}>
              <View style={styles.innerContainer2}>
                <Text style={styles.textWhite}>+</Text>
              </View>
            </View> 
          </TouchableOpacity>
        </View>
      ) : null}

      {modal ? (
        <AddTimeTable
          modalVisible={modal}
          setModalVisible={setModal}
          setRefreshed={setRefresh}
          date=""
          topic=""
          slot=""
          room=""
          id={id}
          isOnline={'No'}
          from={'Add'}
        />
      ) : null}*/}
    </Screen>
  );
};

export default ClassTimetable;
