import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { DeleteAlertProps } from './types';

const DeleteModal = (props: DeleteAlertProps) => {
    return (
        <Modal isVisible={props.visible} hasBackdrop={true}
        backdropOpacity={0}
        onBackButtonPress={() => {
            props.onCancel()
        }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.alertContainer}>
              <Text style={styles.alertText}>Are you sure you want to delete?</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={props.onCancel}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={props.onDelete}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
};
export default DeleteModal;
