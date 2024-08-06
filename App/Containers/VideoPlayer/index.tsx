import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { GenericMessage, Screen, Spinner } from '../../Components';
import { parseVimeoUrl, parseYoutubeUrl } from '../../Utils/ParsingUtils';
import { Header } from './components';
import styles from './styles';
const VideoPlayer = (props: any) => {
  const { t: errorsTranslations } = useTranslation('errors');
  const [playing, setPlaying] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState(
    parseYoutubeUrl(props.route.params.videoItem?.video).toString()
  );
  const [vimeoVideoId, setVimeoVideoId] = useState(
    parseVimeoUrl(props.route.params.videoItem?.video).toString()
  );

  useEffect(() => {
    if (!youtubeVideoId && !vimeoVideoId) {
      setIsError(true);
    }
  }, [youtubeVideoId]);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  }, []);

  const renderYoutubeVideo = () => {
    return (
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={youtubeVideoId}
        onChangeState={onStateChange}
        onReady={() => setShowLoading(false)}
        onError={() => setShowLoading(false)}
      />
    );
  };

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
      {showLoading && <Spinner />}
      {youtubeVideoId && renderYoutubeVideo()}
      <View style={styles.discriptionView}>
        <Text style={styles.discriptionTxt}>
          {props.route.params.videoItem?.description}
        </Text>
      </View>
    </Screen>
  );
};

export default VideoPlayer;
