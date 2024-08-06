import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { NoResults, Spinner } from '../../Components';
import { useClassStudentListQuery } from '../../RTK/Api/CourseApi';
import { Header, RightHeader, StudentList } from './components';
import styles from './styles';
const ClassStudent = (props: any) => {
  var myId = props.route.params.id;
  const { data, refetch, isFetching, isLoading } = useClassStudentListQuery({
    id: myId
  });

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
  const onRefresh = () => {
    refetch();
  };
  if (isLoading || isFetching) {
    return <Spinner />;
  }
  console.debug(data)
  return (
    <View style={styles.Container}>
      <View style={styles.topContainer}>
        <View style={styles.textView}>
          <Text style={styles.textWhite}>Name</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textWhite}>Registeration No</Text>
        </View>
      </View>
      <FlatList
        data={data?.students ?? []}
        refreshing={isFetching}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <NoResults message={'No students found'} />
          </View>
        )}
        renderItem={({ item, index }) => (
            <StudentList data={item}/>
        )}
      />
     
    </View>
  );
};

export default ClassStudent;
