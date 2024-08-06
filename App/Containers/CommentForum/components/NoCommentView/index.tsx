import React from 'react';
import { Text, View } from 'react-native';
import Discussion from '../../../../Assets/SVGs/Discussion';
import Discussion2 from '../../../../Assets/SVGs/Discussion2';
import styles from './style';
import { CommentProps } from './type';

const NoCommentsView = (props: CommentProps) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 3 }}>
        <Discussion style={{ marginTop: 4 }} />
        <Discussion2 style={{ marginTop: -8, marginLeft: -2 }} />
      </View>
      <Text style={styles.textStyle}>No comments yet</Text>
    </View>
  );
};
export default NoCommentsView;
