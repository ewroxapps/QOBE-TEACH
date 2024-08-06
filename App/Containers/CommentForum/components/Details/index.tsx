import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import styles from './styles';
import { DeleteProps } from './types';

const Details = (props: DeleteProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    date,
    dp,
    title,
    details,
    name
  } = props;

  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.overallContainer}>
          <View style={styles.leftContainer}>
            {dp ? (
              <Image
                source={{
                  uri: `${BASE_URL}${dp}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}

            <View style={styles.anotherContainer}>
              <Text style={styles.textPostby}>{name}</Text>
              <View style={styles.calenderContainer}>
                <Timetable width={20} />
                <Text style={styles.time}>{date}</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView style={styles.overallContainer}>
          <View style={styles.secondContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.detailText}>{details}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default Details;
