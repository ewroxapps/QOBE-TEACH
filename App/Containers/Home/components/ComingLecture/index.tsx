import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Clock, Room } from '../../../../Assets/SVGs';
import { Images } from '../../../../Themes';
import styles from './styles';
import { ComingLectureProps } from './types';

const ComingLecture = (props: ComingLectureProps) => {
  const { t } = useTranslation('home');
  const {
    label,
    startTime,
    endTime,
    instructorName,
    instructorProfile,
    roomNo
  } = props;

  console.debug(roomNo)

  return (
    <View style={styles.container} >
      <View style={styles.topContainer}>
        <View style={{flexDirection:'row',flex:1}}>
        {instructorProfile ? (
          <Image
            source={{
              uri: instructorProfile
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} />
        )}
        <View style={styles.topTextContainer}>
          <Text style={styles.classLabel}>{label}</Text>
          <Text style={styles.instructorName}>{instructorName}</Text>
        </View>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.dateStyke}>{props.date}</Text>
        </View>
      </View>
      <View style={styles.classInfoContainer}>
        <View style={styles.classInfoSectionContainer}>
          <Clock width={24} />
          <Text style={styles.infoText}>
            {startTime} - {endTime}
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.classInfoSectionContainer}>
          <Room width={24} />
          <Text style={styles.infoText}>
            {t('roomNo') }
            {roomNo!=''? roomNo:'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ComingLecture;
