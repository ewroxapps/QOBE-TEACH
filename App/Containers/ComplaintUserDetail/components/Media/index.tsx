import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Forward from '../../../../Assets/SVGs/Forward';
import { Image } from './components';
import styles from './styles';
import { HeaderProps } from './types';
const Media = (props: HeaderProps) => {
  const [visibleItems, setVisibleItems] = useState(false);

  const media = props.data.chat
    .map(chatItem => chatItem.attachment)
    .filter(attachment => typeof attachment === 'string')
    .filter(attachment => attachment.trim() !== '');
  const optionsToShow = visibleItems ? media : media.slice(0, 3);

    
  return (
    <View style={styles.container}>
      <View style={styles.justifyView}>
        <Text style={styles.userTxt}>Media</Text>
        <TouchableOpacity
          style={styles.touchableView}
          onPress={() => {
            if(media.length>3)
            setVisibleItems(!visibleItems);
          }}>
          {!visibleItems ? (
            <View style={{flexDirection:'row'}}>
              <Text style={styles.userTxt}>{media.length}</Text>
              <Forward style={{ top: 2.3, left: -3 }} />
            </View>
          ) : (
            <View style={{flexDirection:'row'}}>
              <Text style={styles.userTxt}>Show less</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.outerBlockContainer}>
        {optionsToShow.map((medias, index) => {
          return (
            <View key={index} style={styles.viewImage}>
              <Image image={medias} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Media;
