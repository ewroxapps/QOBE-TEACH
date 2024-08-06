import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Download } from '../../../../../../Assets/SVGs';
import { BASE_URL } from '../../../../../../Config/Api';
import { downloadFile } from '../../../../../../Utils/DownloadUtils';
import styles from './styles';
import { AttachmentItemProps } from './types';


const AttachmentItem = (props: AttachmentItemProps) => {
  const { t } = useTranslation('resources');
  const { resource } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.heading}>{resource?.filename ?? 'N/A'}</Text>
        <Text style={styles.dateText}>
          {t('createdOn')}: {resource?.cdate ?? 'N/A'}
        </Text>
        <Text style={styles.description}>
          {t('description')}: {resource?.description || '-'}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          downloadFile(`${BASE_URL}${resource?.path}`, resource?.filename)
      
        }
        hitSlop={styles.hitSlop}>
        <Download />
      </TouchableOpacity>
    </View>
  );
};

export default AttachmentItem;
