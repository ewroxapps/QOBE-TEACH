import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import WhiteAttendance from '../../Assets/SVGs/WhiteAttendance';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import { useClassAttendanceSummaryQuery } from '../../RTK/Api/CourseApi';
import { CREATE, STUDENT_ATTENDANCE } from '../../Types/Constants';
import { AttendanceComponent, Header, RightHeader } from './components';
import styles from './styles';

const AttendanceDetails = (props: any) => {
  const myID = props.route.params.id;
  const permission: PermissionList[] = props.route.params.permission;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError,error } =
    useClassAttendanceSummaryQuery({
      id: myID
    });

  const navigation = useNavigation();
  const navigations = useNavigation<ICoursesNavigationProp>();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader id={myID} permission={permission}/>
    });
  };
  useEffect(() => {
    changeRight();
    changeHeaderTitle();
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

  console.debug(data)

  const onRefresh = () => {
    refetch();
  };

  const Createattendance = props.permission?.some(
    (permission: any) =>
      permission.option_type === STUDENT_ATTENDANCE &&
      permission.action === CREATE
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Sr#</Text>
          <Text style={styles.headers}>Student Details</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.header}>Total</Text>
        </View>
      </View>

      <FlatList
        data={data}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <NoResults message={'Attendace not available'} />
          </View>
        )}
        renderItem={({ item, index }) => (
          <AttendanceComponent data={item} index={index + 1} />
        )}
      />

      {!Createattendance ? (
        <View style={styles.containers}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigations.navigate('AttendanceRegister', { id: myID });
            }}>
            <WhiteAttendance width={30} />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default AttendanceDetails;
