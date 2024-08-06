import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  Attachment,
  CLOs,
  Comments
} from '../../../../../../../../Assets/SVGs';
import Board from '../../../../../../../../Assets/SVGs/Board';
import { VectorIcons } from '../../../../../../../../Components';
import { ICON_TYPES } from '../../../../../../../../Components/VectorIcons/VectorIcons';
import { Colors } from '../../../../../../../../Themes';
import styles from './styles';
import { PlanItemProps } from './types';

const PlanItem = (props: PlanItemProps) => {
  // Todo: Replace static data with API data
  const { t } = useTranslation('resources');
  const { planItem, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={styles.container}
        needsOffscreenAlphaCompositing={true}>
        <View style={styles.topRowContainer}>
          <Text style={styles.labelHeading}>{planItem?.name ?? 'N/A'}</Text>
          <Text style={styles.dateText}>
            {' '}
            {planItem?.from_date ?? '-'} {t('to')} {planItem?.to_date ?? '-'}{' '}
          </Text>
          <VectorIcons
            name="right"
            size={18}
            color={Colors.textBlack}
            iconType={ICON_TYPES.AntDesign}
          />
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subject} numberOfLines={1}>
            {t('subject')}: {planItem?.subject ?? 'N/A'}
          </Text>
          <Text style={styles.topic} numberOfLines={1}>
            {t('topic')}: {planItem?.topics ?? 'N/A'}
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
            {planItem?.clos?.length > 0 ? (
              planItem?.clos?.map((clo: string, index: number) => {
                return (
                  <Text key={index} style={[styles.detailValue,{marginTop:10}]}>
                    {clo}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.detailValue}>{t('noClosAnnounced')}</Text>
            )}
          </View>

          <View>
            <View style={styles.textWithIconContainer}>
              <Board />
              <Text style={[styles.detailLabel, styles.textWithIcon]}>
                Class Activities
              </Text>
            </View>
            {planItem?.activities?.length > 0 ? (
              planItem?.activities?.map((activity: string, index: number) => {
                return (
                  <Text key={index} style={styles.detailValue}>
                    {activity}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.detailValue}>
                {t('noActivitiesAnnounced')}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.bottomRowContainer}>
          <View style={styles.textWithIconContainer}>
            <Attachment />
            <Text style={[styles.detailValue, styles.textWithIcon]}>
              {planItem?.attachment_count} {t('attachments')}
            </Text>
          </View>
          {planItem?.comments && (
            <View style={styles.textWithIconContainer}>
              <Comments />
              <Text style={[styles.detailValue, styles.textWithIcon]}>
                 {t('comments')}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanItem;
