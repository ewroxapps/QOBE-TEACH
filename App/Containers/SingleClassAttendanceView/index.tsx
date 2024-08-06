import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import {
  useClassSingleAttendanceListTotalQuery,
  useClassUpdateAttendanceMutation
} from '../../RTK/Api/CourseApi';
import { STUDENT_ATTENDANCE, UPDATE } from '../../Types/Constants';
import { Header, ListAttendance } from './components';
import styles from './styles';

const SingleClassAttendanceView = (props: any) => {
  const myID = props.route.params.id;
  const navigation = useNavigation();
  const [marked, setMarked] = useState(false)
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
    useClassSingleAttendanceListTotalQuery({
      id: myID
    });
  const permission: PermissionList[] = props.route.params.permission;

  const [
    updateAttendance,
    {
      isLoading: updateLoading,
      isError: updateError,
      isSuccess,
      error,
      data: updateDate
    }
  ] = useClassUpdateAttendanceMutation();

  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  const updateAtt = () => {
    updateAttendance({
      id: data.lectureData.id,
      adate: data.lectureData.adate,
      name: data.lectureData.name,
      type: data.lectureData.type,
      topic: data.lectureData.topic,
      Students: studentDetails,
      duration: Number(data.lectureData.duration),
      assessment: data.lectureData.assessment,
      room: data.lectureData.room
    });
    refetch();
  };

  useEffect(() => {
    changeHeaderTitle();
  }, []);

  const [studentDetails, setStudentDetails] = useState<AttendanceDataDetail[]>(
    []
  );

  function toBoolean(value: string): boolean {
    return value === '2';
  }
  useEffect(() => {
    if (data?.attendanceData?.length > 0) {
      const attendances = data.attendanceData;
      const updatedStudentDetails = attendances.map(
        (attendanceData: AttendanceDataDetail) => ({
          id: attendanceData.student_id,
          present: attendanceData.present === '1' ? true : false,
          lateLeave: toBoolean(attendanceData?.late)
        })
      );

      setStudentDetails(updatedStudentDetails);
    }
  }, [data]);

  if (isFetching || isLoading || updateLoading) {
    return <Spinner />;
  }

  if (isError || updateError) {
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


  if (!marked && !updateLoading && updateDate!=undefined) {
    if (updateDate.success) {
      ToastAndroid.show(updateDate.message, ToastAndroid.SHORT);
      refetch();
      setMarked(true)
      navigation.goBack();
     
    } else {
      ToastAndroid.show(
        'Attendance not saved, You can only take attedance uptill 1 day(s) in past.',
        ToastAndroid.LONG
      );
      setMarked(true)
    }
  }

  console.debug(updateDate)

  const Updateattendance = props.permission?.some(
    (permission: any) =>
      permission.option_type === STUDENT_ATTENDANCE &&
      permission.action === UPDATE
  );

  return (
    <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ height:Dimensions.get('screen').height/1.36 }}
            data={data.attendanceData}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            ListEmptyComponent={() => (
              <View style={styles.noResults}>
                <NoResults message={'Attendance list not available'} />
              </View>
            )}
            renderItem={({ item, index }) => (
              <ListAttendance
                data={item}
                index={index + 1}
                studentDetails={studentDetails}
                setStudentDetails={setStudentDetails}
              />
            )}
          />
            {!Updateattendance ? (
                  <TouchableOpacity
                    style={ styles.button
                    }
                    onPress={() => {
                      setMarked(false)
                      updateAtt();
                      
                    }}>
                    <Text style={styles.textColor}>Update</Text>
                  </TouchableOpacity>
                ) : null}
        </View>
     
    </ScrollView>
  );
};

export default SingleClassAttendanceView;
