import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { VectorIcons } from '../../../../../../Components';
import { ICON_TYPES } from '../../../../../../Components/VectorIcons/VectorIcons';
import styles from './styles';
import { VideoItemProps } from './types';

const VideoItem = (props: VideoItemProps) => {
  const { t } = useTranslation('resources');
  const { videoItem } = props;
  const navigation = useNavigation<ICoursesNavigationProp>();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      navigation.navigate('VideoPlayer', {
        videoItem: props.videoItem})
    }}>
      <View style={styles.thumbnailContainer}>
        {videoItem?.video ? (
          <Image
            source={{ uri: videoItem?.thumbnail }}
            style={styles.thumbnailPlaceholder}
          />
        ) : (
          <View style={styles.thumbnailPlaceholder}>
            <VectorIcons
              name="video"
              iconType={ICON_TYPES.FeatherIcons}
              size={40}
            />
          </View>
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.detailsText}>{t('details')}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {videoItem?.description ?? 'N/A'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoItem;
