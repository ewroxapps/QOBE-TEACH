import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import styles from './styles';
import { HeaderProps } from './types';
const ComplaintDetail = (props: HeaderProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openImage = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>Complaint Detail</Text>
      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Department</Text>
          <Text style={styles.detail}>{props.data.dept}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Category</Text>
          <Text style={styles.detail}>{props.data.category}</Text>
        </View>
      </View>

      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Allow Chat</Text>
          <Text style={styles.detail}>
            {props.data.allowChat ? 'Yes' : 'No'}
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Status</Text>
          <Text style={styles.detail}>{props.data.status}</Text>
        </View>
      </View>

      <View style={styles.justifyView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Detail</Text>
          <Text style={styles.detail}>{props.data.detail}</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Subject</Text>
          <Text style={styles.detail}>{props.data.subject}</Text>
        </View>
      </View>
      {props.data?.attachment != '' ? (
        <TouchableOpacity
        onPress={openImage}
          style={styles.attachment}>
          <Text style={styles.heading}>Attachment</Text>
          <View style={styles.container2}>
            <Image
              source={{
                uri: `${BASE_URL}${props.data.attachment}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          </View>
        </TouchableOpacity>
      ) : null}

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <ImageViewer
          imageUrls={[{ url: `${BASE_URL}${props.data.attachment}` }]}
          onCancel={closeModal}
          enableSwipeDown={true}
        />
      </Modal>
    </View>
  );
};

export default ComplaintDetail;
