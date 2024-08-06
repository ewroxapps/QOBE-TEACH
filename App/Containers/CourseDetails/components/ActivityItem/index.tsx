import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider, Surface } from 'react-native-paper';
import styles from './styles';
import { ActivityItemProps } from './types';

const ActivityItem = (props: ActivityItemProps) => {
  // Todo: Replace with API data
  const { activity, course } = props;
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { t } = useTranslation('courseDetails');

  function submittedOrNot() {
    if (activity.uUpload?.path) {
      return 'Submitted';
    } else {
      return;
    }
  }

  return (
    // @ts-ignore
    <Surface elevation={2} style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.heading}>{activity?.name ?? 'N/A'}</Text>
        <Text style={{ marginTop: 5, color: '#F4BC1C' }}>
          {submittedOrNot()}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>
          {t('date')}: {activity?.date ?? 'N/A'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>
          {t('type')}: {activity?.type ?? 'N/A'}
        </Text>
        <TouchableOpacity
          hitSlop={styles.hitSlop}
          onPress={() =>
            //   navigation.navigate('ActivityDetails', {
            //     activity: activity,
            //     teacher: course?.teacher
            //   })
            {}
          }>
          <Text style={styles.viewDetailsText}>{t('viewDetails')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.marksContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>{activity?.total ?? 'N/A'}</Text>
          <Text style={styles.itemLabel}>{t('totalMarks')}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>{activity?.obtained ?? 'N/A'}</Text>
          <Text style={styles.itemLabel}>{t('obtainedMarks')}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.key}>{t('teacher')}:</Text>
          <Text style={styles.key}>{t('remarks')}:</Text>
          {activity?.uUpload && <Text style={styles.key}>{t('learner')}:</Text>}
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.value}>{course?.teacher?.trim() ?? 'N/A'}</Text>
          <Text style={styles.value}>{activity?.tRemarks ?? 'N/A'}</Text>
          {activity?.uUpload && (
            <Text style={styles.value}>{activity?.uUpload?.name ?? '-'}</Text>
          )}
        </View>
      </View>
    </Surface>
  );
};

export default ActivityItem;
