import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { Attachment, CLOs } from '../../../../../../Assets/SVGs';
import Board from '../../../../../../Assets/SVGs/Board';
import Timetable from '../../../../../../Assets/SVGs/Timetable';
import { GenericMessage, Screen, Spinner } from '../../../../../../Components';
import { usePlanDetailsQuery } from '../../../../../../RTK/Api/CourseApi';
import { AttachmentItem } from './components';
import styles from './styles';

const PlanDetailsPage = () => {
  const { params } = useRoute();
  const { t } = useTranslation('resources');
  const navigation = useNavigation();
  const { t: errorsTranslations } = useTranslation('resources');
  const { isLoading, isFetching, isError, data } = usePlanDetailsQuery({
    id: params?.plan?.id ?? 0
  });

  const [planDetails, setPlanDetails] = useState<IClassPlanDetail | undefined>(
    undefined
  );

  useEffect(() => {
    if (data) {
      setPlanDetails(data[0]);
    }
  }, [data]);

  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }
  return (
    <Screen>
      <ScrollView style={styles.primaryContainer}>
        <View
          style={styles.container}
          needsOffscreenAlphaCompositing={true}>
          <View style={styles.topRowContainer}>
            <Timetable width={18} height={18} />
            <Text style={styles.dateText}>
              {' '}
              {planDetails?.from_date ?? '-'} {t('to')}{' '}
              {planDetails?.to_date ?? '-'}{' '}
            </Text>
          </View>
          <View style={styles.subjectContainer}>
            <Text style={styles.subject}>
              {t('subject')}: {planDetails?.subject ?? 'N/A'}
            </Text>
            <Text style={styles.topic}>
              {t('topic')}: {planDetails?.topics ?? 'N/A'}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.cloContainer}>
              <View style={styles.textWithIconContainer}>
                <CLOs />
                <Text style={[styles.detailLabel, styles.textWithIcon]}>
                  {t('clos')}
                </Text>
              </View>
              {planDetails?.clos?.map((clo: string, index) => {
                return (
                  <Text key={index} style={[styles.detailValue, {marginTop:10}]}>
                    {clo}
                  </Text>
                );
              })}
            </View>
            <View>
              <View style={styles.textWithIconContainer}>
                <Board />
                <Text style={[styles.detailLabel, styles.textWithIcon]}>
                  {t('classActivities')}
                </Text>
              </View>
              {planDetails?.activities?.map((activity: string) => {
                return <Text style={styles.detailValue}>{activity}</Text>;
              })}
            </View>
          </View>
          <View style={styles.attachmentsHeadingContainer}>
            <Attachment />
            <Text style={[styles.detailValue, styles.textWithIcon]}>
              {planDetails?.resources?.length} {t('attachments')}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            {planDetails?.resources?.map((resource, index, arr) => {
              return (
                <View key={index}>
                  <AttachmentItem resource={resource} />
                  {index !== arr.length - 1 && (
                    <Divider style={styles.divider} />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default PlanDetailsPage;
