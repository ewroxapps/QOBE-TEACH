import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, ToastAndroid, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { BASE_URL } from '../../../../Config/Api';
import { useDeleteMainTimeTableMutation, useDeleteOtherTimeTableMutation } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import MyTimeTableModal from '../MyTimeTableModal';
import OtherTimeTableModal from '../OtherTimeTableModal';
import styles from './styles';
import { EventItemProps } from './types';
const CurrentCourse = (props: EventItemProps) => {
  const { t } = useTranslation('timetable');
  const [showOther, setShowOther] = useState(false);
  const [showMain,  setShowMain] = useState(false);
  const [
    deleteOtherTimeTable,
    { isLoading: otherLoadDelete, data: otherDeleteDate }
  ] = useDeleteOtherTimeTableMutation({});

  const [
    deleteTimeTableMain,
    { isLoading: LoadDelete, data: DeleteDate }
  ] = useDeleteMainTimeTableMutation({});
  const renderRightActions = () => {
    return (
      <RectButton style={styles.deleteButton} onPress={deleteTimeTable}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </RectButton>
    );
  };

  const renderLeftActions = () => {
    return (
      <RectButton style={styles.editButton} onPress={editTimeTable}>
        <Text style={styles.deleteButtonText}>Edit</Text>
      </RectButton>
    );
  };

  const deleteTimeTable = () => {
    if (props.data.type === 'O') {
      deleteOtherTimeTable({ id: props.data.id });
    }else{
      deleteTimeTableMain({id:props.data.id})
    }
  };

  if(!otherLoadDelete && otherDeleteDate!=undefined){
    if(otherDeleteDate.success){
      props.setRefreshed(true)
      ToastAndroid.show('Deleted Successfully',ToastAndroid.SHORT)
    }else{
      ToastAndroid.show('Please try again later',ToastAndroid.SHORT)
    }
  }
  
  if(!LoadDelete && DeleteDate!=undefined){
    if(DeleteDate.success){
      props.setRefreshed(true)
      ToastAndroid.show('Deleted Successfully',ToastAndroid.SHORT)
    }else{
      ToastAndroid.show('Please try again later',ToastAndroid.SHORT)
    }
  }
  


  const editTimeTable = () => {
    if(props.data.type === 'O'){
      setShowOther(true)
    }else{
      setShowMain(true)
    }
  };
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <View  style={[styles.container]}>
          <View style={styles.rightContainer}>
            {props.data.type === 'O' ? (
              <View>
                {props.data.teacher.img ? (
                  <Image
                    source={{
                      uri: `${BASE_URL}${props.data.teacher.img}`
                    }}
                    defaultSource={Images.profilePlaceholder}
                    style={styles.profile}
                  />
                ) : (
                  <Image
                    source={Images.profilePlaceholder}
                    style={styles.profile}
                  />
                )}
                {props.data.status && (
                  <View style={styles.planned}>
                    <Text style={styles.plannedText}>{props.data.status}</Text>
                  </View>
                )}
              </View>
            ) : (
              <View>
                {props.data.dp ? (
                  <Image
                    source={{
                      uri: `${BASE_URL}${props.data.dp}`
                    }}
                    defaultSource={Images.profilePlaceholder}
                    style={styles.profile}
                  />
                ) : (
                  <Image
                    source={Images.profilePlaceholder}
                    style={styles.profile}
                  />
                )}
                {props.data.status && (
                  <View style={styles.planned}>
                    <Text style={styles.plannedText}>{props.data.status}</Text>
                  </View>
                )}
              </View>
            )}

            <View style={styles.topTextContainer}>
              <View style={styles.topRow}>
                <Text style={styles.lectureNumber}>
                  {props.data.topic ? props.data.topic : 'Topic not assigned'}
                </Text>
              </View>
              <View style={{ top: 5, paddingBottom: 10 }}>
                <Text style={styles.classLabel}>
                  {props.data.course
                    ? props.data.course
                    : 'Course not assigned'}
                </Text>
                <Text style={styles.instructorName}>
                  {props.data.name ? props.data.name : 'Not assigned'}
                </Text>
                <Text style={styles.time}>{props.data.time}</Text>
              </View>
            </View>
          </View>
      </View>
      {showOther?(
        <OtherTimeTableModal
          modalVisible={showOther}
          setModalVisible={setShowOther}
          setModalVisibleMain={setShowOther}
          setRefreshed={props.setRefreshed}
          courseSection={props.data.course}
          slot={props.data.time}
          activityType={props.data.name} 
          detail={props.data.topic}
          id={props.data.id}
          date={props.date}
          from='Edit'
        />
      ):null}

      {showMain ?(

        <MyTimeTableModal
        modalVisible={showMain}
        setModalVisible={setShowMain}
        setModalVisibleMain={setShowMain}
        setRefreshed={props.setRefreshed}
        courseSection={props.data.course}
        date={props.date}
        topic={props.data.topic}
        slot={props.data.time}
        room={props.data.classroom_no}
        id={props.data.id}
        isOnline={props.data.isonline }
        from={'Edit'}
        />
      ):null

      }

      
    </Swipeable>
  );
};

export default CurrentCourse;
