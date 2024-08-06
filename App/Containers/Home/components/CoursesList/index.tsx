import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { NoCourses } from '../../../../Assets/SVGs';
import { useAppSelector } from '../../../../Hooks';
import { userCoursesSelector } from '../../../../Selectors/UserSelector';
import CurrentCourse from '../CurrentCourse';
import styles from './styles';
import { CourseListProps } from './types';
const  CoursesList = (props:CourseListProps) => {
  const userCourses = useAppSelector(userCoursesSelector);
  const { t } = useTranslation('home');
  const [myId, setId] = useState(0);
  const navigation = useNavigation<any>();
  
  const renderNoCurrentCourses = () => {
    return (
      <View style={styles.noCoursesContainer}>
        <NoCourses width={24} />
        <Text style={styles.body}>{t('noCoursesFound')}</Text>
      </View>
    );
  };

  return (
    <>
      {userCourses && userCourses?.length > 0
        ? userCourses?.map((course, index) => (
            <TouchableOpacity
              key={course?.id} 
              style={styles.container}
              onPress={() => {
                navigation.navigate('CoursesStack', {
                  screen: 'CourseDetails',
                  initial: false,
                   params: { course:course ,permission:props.permission }
                });
              }}>
              <CurrentCourse
                instructorName={course?.teacher}
                label={course?.course}
                instructorProfile={course?.image}
                students={course.studentcount}
                activities={Number(course.activityCount)}
                classes={course.classDays}
                id={course.id}
                permission={props.permission}
              />
            </TouchableOpacity>
          ))
        : renderNoCurrentCourses()}
    </>
  );
};

export default CoursesList;
