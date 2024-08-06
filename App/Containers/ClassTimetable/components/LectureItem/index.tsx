import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Surface } from 'react-native-paper';
import {
  Bookmark,
  Clock,
  Monitor,
  Room,
  Teacher
} from '../../../../Assets/SVGs';
import {
  useDeleteMainTimeTableMutation
} from '../../../../RTK/Api/CourseApi';
import styles from './styles';
import { LectureItemProps } from './types';
const LectureItem = (props: LectureItemProps) => {
  const { lecture } = props;
  const { t } = useTranslation('timetable');
  const [modal, setModal] = React.useState(false);
  const [
    deleteTimeTableMain,
    { isLoading: LoadDelete, data: DeleteDate,error }
  ] = useDeleteMainTimeTableMutation();
  const [dayOfWeek, dayOfMonth, month, year] = props.lecture.date.split(' ');
  const isoDateString = `${year}-${monthToNumber(month)}-${removeOrdinal(
    dayOfMonth
  )}`;
  function monthToNumber(month: string): string {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return (monthNames.indexOf(month) + 1).toString().padStart(2, '0');
  }
  function removeOrdinal(day: string): string {
    return day.replace(/\D/g, '');
  }
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
    deleteTimeTableMain({id:props.lecture.id})
  };


  const editTimeTable = () => {
    setModal(!modal);
  };
  return (

      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.dayText}>
            {lecture?.date.split(',')[0].substring(0, 3)}
          </Text>
          <Text style={styles.date}>{lecture?.date.split(',')[1]}</Text>
          <View style={styles.dottedLine} />
        </View>
        {/* @ts-ignore */}
        <Surface style={styles.rightContainer} elevation={3}>
          <View style={styles.infoLeftContainer}>
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Clock width={20} height={20} />
                <Text style={styles.key}>{t('time')}:</Text>
              </View>
              <Text style={styles.value}>
                {lecture?.from_time}-{lecture?.to_time}
              </Text>
            </View>
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Room width={20} height={20} />
                <Text style={styles.key}>{t('roomNo')}:</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{lecture?.room ?? '-'}</Text>
              </View>
            </View>
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Monitor width={20} height={20} />
                <Text style={styles.key}>{t('isOnline')}:</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{lecture?.online ?? '-'}</Text>
              </View>
            </View>
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Bookmark width={20} height={20} />
                <Text style={styles.key}>{t('topic')}</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{lecture?.topic ?? 'N/A'}</Text>
              </View>
            </View>
            <View style={styles.infoEntryContainer}>
              <View style={styles.infoEntryLabel}>
                <Teacher width={20} height={20} />
                <Text style={styles.key}>{t('teacher')}:</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{lecture?.teacher ?? 'N/A'}</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.infoRightContainer}>
          <Text style={[styles.infoEntryContainer, styles.value]}>
            {lecture?.from_time}-{lecture?.to_time}
          </Text>
          <Text style={[styles.infoEntryContainer, styles.value]}>
            {lecture?.room ?? '-'}
          </Text>
          <Text style={[styles.infoEntryContainer, styles.value]}>
            {lecture?.online ?? '-'}
          </Text>
          <Text style={[styles.infoEntryContainer, styles.value]}>
            {lecture?.online ?? 'N/A'}
          </Text>
          <Text style={[styles.infoEntryContainer, styles.value]}>
            {lecture?.teacher ?? 'N/A'}
          </Text>
        </View> */}
        </Surface>
      </View>


  );
};
export default LectureItem;
