import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, View } from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import { useClassAttendanceListTotalQuery } from '../../RTK/Api/CourseApi';
import { Header, ViewList } from './components';
import styles from './styles';
const ViewAttendance = (props: any) => {
  const myID = props.route.params.id;
  const permission: PermissionList[] = props.route.params.permission;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
    useClassAttendanceListTotalQuery({
      id: myID
    });
  const [fetch, setFetch] = useState(false);

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    if (fetch) {
      refetch();
      setFetch(false);
    }
  });

  if (isFetching || isLoading) {
    return <Spinner />;
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

  const onRefresh = () => {
    refetch();
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 5 }}
        data={data}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <NoResults message={'Attendance detail not available'} />
          </View>
        )}
        renderItem={({ item, index }) => (
          <ViewList data={item} setFetch={setFetch} permission={permission} />
        )}
      />
    </View>
  );
};

export default ViewAttendance;
