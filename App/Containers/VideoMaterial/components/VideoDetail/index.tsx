import React, { useState } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import { Images } from '../../../../Themes';
import styles from './styles';
import { YoutubeProps } from './types';
const VideoDetail = (props: YoutubeProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = props;
  const extractVideoId = (link: string) => {
    const videoIdMatch = link.match(/v=([a-zA-Z0-9_-]+)/);
    if (videoIdMatch) {
      return videoIdMatch[1];
    }

    return null;
  };

  const getThumbnailUrl = (videoId: string) => {
    return data.video;
  };

  const videoId = extractVideoId(data?.video);

  const thumbnailUrl = getThumbnailUrl(videoId!=null?videoId:'')

  const openYouTubeLink = () => {
    Linking.openURL(data.video);
  };

  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        {thumbnailUrl ? (
          <TouchableOpacity onPress={openYouTubeLink}>
            <View>
              <Image
                source={{ uri: thumbnailUrl }}
                style={styles.thumbnailPlaceholders}
              />
              <Image source={Images.youtubeLogo} style={styles.logo} />
            </View>
          </TouchableOpacity>
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

      <View style={styles.viewCont}>
          <Text style={styles.header}>Discription</Text>
          <Text style={styles.text}>{props.data?.description}</Text>
      </View>
    </View>
  );
};

export default VideoDetail;
