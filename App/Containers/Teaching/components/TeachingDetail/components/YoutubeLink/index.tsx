import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Linking, TouchableOpacity, View } from 'react-native';
import { VectorIcons } from '../../../../../../Components';
import { ICON_TYPES } from '../../../../../../Components/VectorIcons/VectorIcons';
import styles from './styles';
import { YoutubeProps } from './types';

const YoutubeLink = (props: YoutubeProps) => {
  const { t } = useTranslation('resources');
  const { link } = props;
  const extractVideoId = (link: string) => {
    const videoIdMatch = link.match(/v=([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }
    return null;
  };

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const videoId = extractVideoId(link);
  const thumbnailUrl = videoId ? getThumbnailUrl(videoId) : null;

  const openYouTubeLink = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openYouTubeLink} >
      <View style={styles.thumbnailContainer}>
        {thumbnailUrl? (
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnailPlaceholders} 
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
    </TouchableOpacity>
  );
};

export default YoutubeLink;
