import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, ToastAndroid, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { ColoredCalendar } from '../../../../Assets/SVGs';
import BlueActivity from '../../../../Assets/SVGs/BlueActivity';
import GreenAttendance from '../../../../Assets/SVGs/GreenAttendance';
import Notification from '../../../../Assets/SVGs/Notification';
import { BASE_URL } from '../../../../Config/Api';
import { Colors, Images } from '../../../../Themes';
import {
  CLASSTIMETABLE,
  STUDENT_ATTENDANCE,
  UNI_CLASS_ROOM,
  VIEW
} from '../../../../Types/Constants';
import ActionButton from '../ActionButton';
import styles from './styles';
import { CourseInfoProps } from './types';
const CourseInfo = (props: CourseInfoProps) => {
  const { t } = useTranslation('courseDetails');
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { course, id } = props;

  const attendance = props.permission?.some(
    (permission: any) =>
      permission.option_type === STUDENT_ATTENDANCE &&
      permission.action === VIEW
  );

  const classTimetable = props.permission?.some(
    (permission: any) =>
      permission.option_type === UNI_CLASS_ROOM &&
      permission.action === CLASSTIMETABLE
  );

  return (
    // @ts-ignore
    <Surface style={styles.container} elevation={3}>
      <View style={styles.topContainer}>
        {course?.image ? (
          <Image
            source={{
              uri: `${BASE_URL}${course?.image}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
        <View style={styles.topTextContainer}>
          <View style={styles.topRow}>
            <Text style={styles.courseName}>{course?.name}</Text>
          </View>
          <Text style={styles.classLabel}>{course?.course}</Text>
          <Text style={styles.instructorName}>{course?.teacher}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <ActionButton
          color={Colors.lightCyanBg}
          icon={() => <BlueActivity />}
          label={'Activities'}
          textColor={Colors.darkCyan}
          onPress={() => {
            if (props.data != undefined) {
              if (props.data.activities.length > 0) {
                navigation.navigate('NewActivity', { data: props.data });
              } else {
                ToastAndroid.show(
                  'Activity doesnot exists',
                  ToastAndroid.SHORT
                );
              }
            }
          }}
        />
        {attendance ? (
          <ActionButton
            color={'#ECFCCB'}
            icon={() => <GreenAttendance />}
            label={'Attendance'}
            textColor={'#65A30D'}
            onPress={() => {
              navigation.navigate('AttendanceDetails', { id: id, permission:props.permission });
            }}
          />
        ) : null}

        {classTimetable ? (
          <ActionButton
            color={Colors.lightMustardBg}
            icon={() => <ColoredCalendar width={26} height={26} />}
            label={'Time Table'}
            textColor={Colors.burgundy}
            onPress={() => {
              navigation.navigate('Classtimetable', { id: id });
            }}
          />
        ) : null}

        <ActionButton
          color={'#EDE9FE'}
          icon={() => <Notification />}
          label={'Send Notification'}
          textColor={'#7C3AED'}
          onPress={() => {
            {
              navigation.navigate('Notification', { id: id });
            }
          }}
        />
      </View>
    </Surface>
  );
};

export default CourseInfo;
