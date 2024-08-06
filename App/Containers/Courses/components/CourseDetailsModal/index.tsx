import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import styles from './styles';
import { CourseDetailsModalProps } from './types';

const CourseDetailsModal = (props: CourseDetailsModalProps) => {
  const { modalVisible = false, setModalVisible, course } = props;
  const { t } = useTranslation('myCourses');
  const navigation = useNavigation<ICoursesNavigationProp>();

  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        {course ? (
          <>
            <View style={styles.topRowContainer}>
              <View style={styles.headingContainer}>
                <Text style={styles.heading}>{t('courseDetails')}</Text>
              </View>
              <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <CloseCircle />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.courseInfoContainer}>
              <View style={styles.infoItemContainer}>
                <Text style={styles.label}>{t('course')}</Text>
                <Text style={styles.highlightedValue}>{course?.course}</Text>
              </View>
              <View style={styles.infoSectionContainer}>
                <View style={styles.infoItemContainer}>
                  <Text style={styles.label}>{t('name')}</Text>
                  <Text style={styles.value}>{course?.name}</Text>
                </View>
                <View style={styles.infoItemContainer}>
                  <Text style={styles.label}>{t('semester')}</Text>
                  <Text style={styles.value}>{course?.semester ?? '-'}</Text>
                </View>
              </View>
              <View style={styles.infoSectionContainer}>
                <View style={styles.infoItemContainer}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>{t('teacher')}</Text>
                  </View>
                  <View style={styles.valueContainer}>
                    <Text style={styles.value}>{course?.teacher ?? '-'}</Text>
                  </View>
                </View>
              </View>
              
             
              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('CourseDetails', { course:course,permission:props.permission });
                }}>
                <Text style={styles.buttonText}>{t('viewDetails')}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>{t('noCourseInfo')}</Text>
        )}
      </View>
    </Modal>
  );
};

export default CourseDetailsModal;
