import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Activities from '../../../../Assets/SVGs/Activities';
import AttendancePro from '../../../../Assets/SVGs/AttendancePro';
import Discussions from '../../../../Assets/SVGs/Discussions';
import TeachingPlan from '../../../../Assets/SVGs/TeachingPlan';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { Spinner } from '../../../../Components';
import { BASE_URL } from '../../../../Config/Api';
import { useClassActivitiesQuery } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import {
  CLASSTIMETABLE,
  CLASS_ACTIVITY,
  CLASS_PLAN,
  STUDENT_ATTENDANCE,
  UNI_CLASS_ROOM,
  VIEW
} from '../../../../Types/Constants';
import styles from './styles';
import { modalProps } from './type';
const CurrenrCourseModal = (props: modalProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    setClicked,
    image,
    label,
    instructorName,
    id,
    permission
  } = props;
  const navigation = useNavigation<any>();

  const {
    refetch: ActivityRefetch,
    isLoading: ActivityLoading,
    isFetching: ActivityFetching,
    isError: ActivityError,
    data: ActivityData
  } = useClassActivitiesQuery({
    id: id || 0
  });

  if (ActivityLoading) {
    return <Spinner />;
  }

  const showAttendance = permission?.some(
    (permission: any) =>
      permission.option_type === STUDENT_ATTENDANCE &&
      permission.action === VIEW
  );

  const showtimetable = permission?.some(
    (permission: any) =>
      permission.option_type === UNI_CLASS_ROOM &&
      permission.action === CLASSTIMETABLE
  );

  const classActivities = permission?.some(
    (permission: any) =>
      permission.option_type === CLASS_ACTIVITY && permission.action === VIEW
  );

  const classplan = permission?.some(
    (permission: any) =>
      permission.option_type === CLASS_PLAN && permission.action === VIEW
  );

  const options = [
    {
      permission: classActivities,
      component: <Activities width={17} />,
      text: 'Activities'
    },
    {
      permission: showAttendance,
      component: <AttendancePro width={17} />,
      text: 'Attendance'
    },
    {
      permission: showtimetable,
      component: <Timetable width={17} />,
      text: 'Timetable'
    },
    {
      permission: classplan,
      component: <TeachingPlan width={17} />,
      text: 'Section Teaching Plan'
    },
    {
      permission: true,
      component: <Discussions width={17} />,
      text: 'Discussion Forum'
    }
  ];

  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
        setClicked(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setClicked(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.leftContainer}>
          {image ? (
            <Image
              source={{
                uri: `${BASE_URL}${image}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}

          <View style={styles.topTextContainer}>
            <Text style={styles.classLabel}>{label}</Text>
            <Text style={styles.instructorName}>{instructorName}</Text>
          </View>
        </View>
        <View style={styles.outerBlockContainer}>
          {options.map((option, index) => {
            if (option.permission) {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ flexDirection: 'row' }}
                  onPress={() => {
                    if (option.text === 'Activities') {
                      if (ActivityData != undefined) {
                        if (ActivityData.activities.length > 0) {

                          navigation.navigate('CoursesStack', {
                            screen: 'NewActivity',
                            initial: false,
                             params: { data: ActivityData }
                          });
                        
                        } else {
                          ToastAndroid.show(
                            'Activity doesnot exists',
                            ToastAndroid.SHORT
                          );
                        }
                      }
                    } else if (option.text === 'Attendance') {
                      navigation.navigate('CoursesStack', {
                        screen: 'AttendanceDetails',
                        initial: false,
                         params: {id: Number(id),
                          permission: props.permission }
                      });
                    } else if (option.text === 'Timetable') {
                      navigation.navigate('CoursesStack', {
                        screen: 'Classtimetable',
                        initial: false,
                         params: {id: Number(id)}
                      });
                    } else if (option.text === 'Section Teaching Plan') {
                      navigation.navigate('CoursesStack', {
                        screen: 'Teaching',
                        initial: false,
                         params: {id: Number(id)}
                      });
                    } else {
                      navigation.navigate('CoursesStack', {
                        screen: 'Forums',
                        initial: false,
                         params: { id: Number(id),
                          name: label != undefined ? label : ''}
                      });
                    }
                  }}>
                  <View style={styles.innerBlockContainer}>
                    {option.component}
                    <Text style={styles.textStyle}>{option.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            }
            return null;
          })}
        </View>
      </View>
    </Modal>
  );
};
export default CurrenrCourseModal;
