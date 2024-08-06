import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { useClassDeleteAttendanceMutation } from '../../../../RTK/Api/CourseApi';
import styles from './styles';
import { AttendanceViewProps } from './types';
const ViewList = (props: AttendanceViewProps) => {
  const date = props.data.adate.substring(0, 10); 
  const time = props.data.adate.substring(11);
  const navigations = useNavigation<ICoursesNavigationProp>();
  const [
    deleteAttendances,
    {
      isLoading: deleteLoading,
      isError: deleteError,
      isSuccess,
      error,
      data: deleteDate
    }
  ] = useClassDeleteAttendanceMutation();

  const renderRightActions = () => {
    return (
      <RectButton style={styles.deleteButton} onPress={deleteAttendance}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </RectButton>
    );
  };

  const deleteAttendance = () => {
    deleteAttendances({id:props.data.id})
    props.setFetch(true)
   
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigations.navigate('SingleClassAttendanceView', {
            id: props.data.id,
            permission:props.permission
          });
        }}>
        <View style={styles.justifyContainer}>
          <View style={styles.flexView}>
            <Text
              style={[styles.BlueText, { fontSize: 16, fontWeight: '600' }]}>
              {props.data.name}
            </Text>
          </View>
          <View style={styles.flexView}>
            <View style={styles.flexViewss}>
              <Text style={[styles.BlackText, { fontSize: 12 }]}>Date: </Text>
              <Text style={[styles.BlackText, { fontSize: 12 }]}>{date}</Text>
            </View>

            <View style={styles.flexViewss}>
              <Text style={[styles.BlackText, { fontSize: 12 }]}>Time: </Text>
              <Text style={[styles.BlackText, { fontSize: 12 }]}>{time}</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.flexViews}>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>Duration: </Text>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>
              {props.data.duration === null ? '0' : props.data.duration} mins
            </Text>
          </View>

          <View style={styles.flexViews}>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>Name: </Text>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>
              {props.data.name === null ? 'Not available' : props.data.name}
            </Text>
          </View>

          <View style={styles.flexViews}>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>Type: </Text>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>
              {props.data.type === null ? 'Not available' : props.data.type}
            </Text>
          </View>

          <View style={styles.flexViews}>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>Topic: </Text>
            <Text style={[styles.BlackText, { fontSize: 12 }]}>
              {props.data.topic === null ? 'Not available' : props.data.topic}
            </Text>
          </View>

          {props.data.video_link != null ? (
            <View style={styles.flexViews}>
              <Text style={[styles.BlackText, { fontSize: 12 }]}>
                Video Link:{' '}
              </Text>
              <Text style={[styles.BlueText, { fontSize: 12 }]}>
                {props.data.video_link === null
                  ? 'Not available'
                  : props.data.video_link}
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ViewList;
