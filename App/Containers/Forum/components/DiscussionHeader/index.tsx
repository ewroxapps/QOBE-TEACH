import React from 'react';
import { Text, View } from 'react-native';
import Discussion from '../../../../Assets/SVGs/Discussion';
import Discussion2 from '../../../../Assets/SVGs/Discussion2';
import styles from './styles';
import { DiscussionHeaderProps } from './types';
const DiscussionHeader = (props: DiscussionHeaderProps) => {
  return (
    <View style={styles.mainContainder}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
        <View>
          <Discussion />
          <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
        </View>
        <Text style={styles.discussionText}>Discussion </Text>
      </View>
    </View>
  );
};
export default DiscussionHeader;
