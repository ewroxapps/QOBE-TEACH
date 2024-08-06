import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import styles from './styles';
import { CurrentCourseProps } from './types';

const CurrentCourse = (props: CurrentCourseProps) => {
  const { t } = useTranslation('myCourses');
  const { course, setModalVisible, setSelectedCourse } = props;
  return (
    <View style={styles.container} >
      <View>
        <View style={styles.topContainer}>
          {course?.teacherdp ? (
            <Image
              source={{
                uri: `${BASE_URL}${course?.teacherdp}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}
          <View style={styles.topTextContainer}>
            <View style={styles.topRow}>
              <Text style={styles.lectureNumber}>{course?.name}</Text>
            </View>
            <Text style={styles.classLabel}>{course?.course}</Text>
            <Text style={styles.instructorName}>{course?.teacher}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.viewDetailsButton}
          onPress={() => {
            setSelectedCourse(course);
            setModalVisible(true);
          }}>
          <Text style={styles.viewDetailsText}>{t('viewDetails')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurrentCourse;
