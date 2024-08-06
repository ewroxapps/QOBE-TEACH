import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import styles from './styles';
import { ImportProps } from './types';

const AddVideoModal = (props: ImportProps) => {
  const { modalVisible = false, setModalVisible } = props;
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [dis, setDis] = useState('');
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.5}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <Text style={styles.importTxt}>Add Video Material</Text>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.textStyle}>Name</Text>
          <TextInput
            placeholder={''}
            style={styles.titletextInput}
            value={name}
            onChangeText={value => setName(value)}
          />

          <Text style={styles.textStyle}>Youtube Link</Text>
          <TextInput
            placeholder={''}
            style={styles.titletextInput}
            value={link}
            onChangeText={value => setLink(value)}
          />

          <Text style={styles.textStyle}>Discription</Text>
          <TextInput
            placeholder={''}
            style={styles.titletextInput}
            value={dis}
            onChangeText={value => setDis(value)}
          />
        </View>

        <TouchableOpacity style={styles.saveView}>
          <Text style={styles.whiteTxt}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default AddVideoModal;
