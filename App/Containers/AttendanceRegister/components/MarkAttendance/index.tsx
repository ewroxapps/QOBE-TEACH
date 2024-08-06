import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import WhiteNotification from '../../../../Assets/SVGs/WhiteNotification';
import { NoResults, Spinner } from '../../../../Components';
import { useClassTakeAttendanceMutation } from '../../../../RTK/Api/CourseApi';
import { SharedStateContext } from './../../../AttendanceRegister';
import { MarksDetails } from './components';
import styles from './styles';
const MarkAttendance = () => {
  const {
    startDate,
    startDate1,
    lecture,
    duration,
    topic,
    assessment,
    room,
    data,
    myID
  } = useContext(SharedStateContext);
  const [
    takeAttendance,
    { isLoading, isError, isSuccess, error, data: datss }
  ] = useClassTakeAttendanceMutation();
  const [studentDetails, setStudentDetails] = useState(
    data.students.map(student => ({
      id: student.student_id,
      present: true,
      lateLeave: false
    }))
  );
  const navigation = useNavigation();
  const [marked, setMarked] = useState(false);
  function studentAttendance() {
    const parts = startDate.split('-');

    // Reformat the date
    const reformattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

    if (startDate != '') {
      if (startDate1 != '') {
        if (lecture != '') {
        } else {
          ToastAndroid.show('Please add lecture', ToastAndroid.SHORT);
        }
        if (topic != '') {
          takeAttendance({
            id: myID,
            late: data.allow_leave,
            adate: `${reformattedDate} ${startDate1}`,
            name: lecture,
            type: 'R',
            topic: topic,
            Students: studentDetails,
            duration: duration,
            assessment: assessment,
            room: room
          });
        } else {
          ToastAndroid.show('Please add topic', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Please add time', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Please add date', ToastAndroid.SHORT);
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!marked && !isLoading && datss != undefined) {
    if (datss.success === false) {
      ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      setMarked(true);
    } else {
      ToastAndroid.show('Attendance Marked', ToastAndroid.SHORT);
      navigation.goBack();
      setMarked(true);
    }
  }
  console.debug(datss)

  return (
    <ScrollView style={{ flex: 1, marginBottom: 3 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Student</Text>
        </View>

        <View
          style={
            data.allow_leave === '1'
              ? styles.innerContainer
              : styles.innerContainer2
          }>
          <Text style={styles.header}>Present/Absent</Text>
          {data.allow_leave === '1' ? (
            <Text style={styles.header}>Late/Leave</Text>
          ) : null}
        </View>
      </View>
   
        <FlatList
          style={{ height:Dimensions.get('screen').height/1.6 }}
          data={data.students}
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <NoResults message={'Attendance not available'} />
            </View>
          )}
          renderItem={({ item, index }) => (
            <MarksDetails
              data={item}
              index={index + 1}
              late={data.allow_leave}
              studentDetails={studentDetails}
              setStudentDetails={setStudentDetails}
            />
          )}
        />
    

      <View style={styles.containers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            studentAttendance();
            setMarked(false);
          }}>
          <WhiteNotification />
          <Text style={styles.textWhite}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MarkAttendance;
