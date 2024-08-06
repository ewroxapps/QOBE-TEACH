import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { Switch } from 'react-native-paper';
import { Trash } from '../../Assets/SVGs';
import BlueAttach from '../../Assets/SVGs/BlueAttach';
import WhiteNotification from '../../Assets/SVGs/WhiteNotification';
import WhiteUpload from '../../Assets/SVGs/WhiteUpload';
import { Spinner } from '../../Components';
import { useClassSendNotificationMutation } from '../../RTK/Api/CourseApi';
import colors from '../../Themes/Colors';
import { Header } from './components';
import AttachmentFile from './components/AttachmentFile';
import styles from './styles';
const Notification = (props: any) => {
  const navigation = useNavigation();
  const id = props.route.params.id;
  const [sendNotification, { isLoading, isError, isSuccess, error, data }] =
    useClassSendNotificationMutation();
  const [selectedFiles, setSelectedFiles] = useState<
    Array<DocumentPickerResponse>
  >([]);

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState(false);
  const [sms, setSms] = useState(false);
  const [attachment, setAttachment] = useState(false);
  const [modal, setModal] = useState(false);
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (data != undefined && !isLoading) {
    if (data.success) {
      ToastAndroid.show(data.msg, ToastAndroid.SHORT);
      navigation.goBack();
    }
  }

  const sendNoti = () => {
    const stringSMS = sms ? '1' : '0';
    const stringEmail = email ? '1' : '0';
    sendNotification({
      id: id,
      message: message,
      send_email: stringEmail,
      send_sms: stringSMS,
      file: selectedFiles
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>Message</Text>
        <TextInput
          multiline
          style={styles.titletextInput}
          value={message}
          onChangeText={value => setMessage(value)}
        />

        <View style={styles.spaceView}>
          <Text style={styles.textStyle}>Send Email</Text>
          <Switch
            value={email}
            color={colors.quizBlue}
            onValueChange={() => {
              setEmail(!email);
            }}
          />
        </View>

        <View style={styles.spaceView}>
          <Text style={styles.textStyle}>Send Sms</Text>
          <Switch
            value={sms}
            color={colors.quizBlue}
            onValueChange={() => {
              setSms(!sms);
            }}
          />
        </View>

        <View style={styles.spaceView}>
          <Text style={styles.textStyle}>Attachment for email</Text>
          <TouchableOpacity
            onPress={() => {
              setModal(!modal);
            }}>
            <View style={styles.attachmentView}>
              <WhiteUpload />
              <Text style={styles.textWhite}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>

        {attachment ? (
          <View style={styles.submissionView}>
            <View style={styles.rowFlex}>
              <BlueAttach width={18} />
              <Text style={styles.blueeTxt}>{selectedFiles[0].name}</Text>
            </View>
            <TouchableOpacity
              style={{ alignItems: 'center', justifyContent: 'center' }}
              onPress={() => {
                setSelectedFiles([]);
                setAttachment(!attachment);
              }}>
              <View style={styles.rowFlex1}>
                <Trash width={18} />
                <Text style={styles.redTxt}>Remove</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View style={styles.Savecontainers}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (message.length > 0) {
              sendNoti();
            } else {
              ToastAndroid.show('Please enter a message', ToastAndroid.SHORT);
            }
          }}>
          <WhiteNotification width={18} height={18} />
          <Text style={styles.textWhite}>Send Notification</Text>
        </TouchableOpacity>
      </View>

      {modal ? (
        <AttachmentFile
          modalVisible={modal}
          setModalVisible={setModal}
          title={'Please attach a file'}
          attachment={attachment}
          setAttachment={setAttachment}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      ) : null}
    </View>
  );
};

export default Notification;
