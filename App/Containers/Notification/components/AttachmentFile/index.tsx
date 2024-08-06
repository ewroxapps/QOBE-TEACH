import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
  isInProgress
} from 'react-native-document-picker';
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';
import { CloseCircle, DocumentUpload, Trash } from '../../../../Assets/SVGs';
import { Colors } from '../../../../Themes';
import { checkUploadPermission } from '../../../../Utils/UploadUtils';
import ActivityActionButton from '../ActivityActionButton';
import styles from './styles';
import { CourseDetailsModalProps } from './type';

const AttachmentFile = (props: CourseDetailsModalProps) => {
  const {
    modalVisible = false,
    setModalVisible,
    title,
  } = props;

   
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | undefined | null
  >();

  const { t } = useTranslation('courseDetails');

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered'
      );
    } else {
      throw err;
    }
  };

  const uploadDocument = async (document: Array<DocumentPickerResponse>) => {
    const granted = await checkUploadPermission();
    if (granted) {
      props.setSelectedFiles(document)
      props.setAttachment(true)
      props.setModalVisible(false)
    
    }
   
  };
  const handleFileSelection = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({});
      setResult([pickerResult]);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <Modal isVisible={modalVisible} hasBackdrop={true} backdropOpacity={0.7} onBackButtonPress={() => setModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <Text style={styles.heading}>{title}</Text>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.noteText}>{t('file')}</Text>
        {result ? (
          <View style={styles.uploadContainer}>
            <Text style={styles.fileName} numberOfLines={2}>{result[0].name}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => setResult(null)}>
              <Text style={styles.remove}>{t('remove')}</Text>
              <Trash />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.selectButtonContainer}>
            <Button
              onPress={() => handleFileSelection()}
              mode="contained"
              color={Colors.secondary}>
              {t('selectFile')}
            </Button>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <ActivityActionButton
            label={t('uploadFile')}
            color={Colors.secondary}
            icon={() => <DocumentUpload />}
            onPress={() => {
              if (result) {
                uploadDocument(result);         
              }
              
            }}
            disabled={result == null}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AttachmentFile;