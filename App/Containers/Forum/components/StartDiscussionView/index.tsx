import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Start from '../../../../Assets/SVGs/Start';
import StartDiscussionModal from '../StartDiscussionModal';
import styles from './styles';
import { StartDiscussionViewProps } from './types';

const StartDiscussionView = (props: StartDiscussionViewProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.recordContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>
            Total Discussion: {props.totalDiscussion}
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={styles.start}>
              <View>
                <Start style={{ top: 3, right:1 }} />
                <Text style={styles.itemValue2}>+    Start New</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {modalVisible ? (
        <StartDiscussionModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          classID={props.classID}
          click={props.click}
          setClick={props.setClick}
        />
      ) : null}
    </View>
  );
};
export default StartDiscussionView;
