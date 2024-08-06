import React, { useEffect, useState } from 'react';
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Msg from '../../../../Assets/SVGs/Msg';
import Msg2 from '../../../../Assets/SVGs/Msg2';
import { useCreateClassForumMutation } from '../../../../RTK/Api/CourseApi';
import colors from '../../../../Themes/Colors';
import styles from './styles';
import { ModalProps } from './types';

const StartDiscussionModal = (props: ModalProps) => {
    const { modalVisible = false, setModalVisible,classID } = props;
    const [title, setTitle] = useState('');
    const [detail, setDetails] = useState('');
    const [createClassForum, { isLoading, isSuccess, isError, data,error}] =  useCreateClassForumMutation();
    useEffect(() => {
        if(!isLoading && data !=undefined){
            if(data.success){
                 props.setClick(true)
                 ToastAndroid.show(data.message,ToastAndroid.SHORT)
                 setModalVisible(false)
               }else{
                ToastAndroid.show('Please try again later',ToastAndroid.SHORT)
               }
        }
        
      }, [data]);
    function createForum(){
        if(title.length >0){
            if(detail.length>0){
                createClassForum( {id: classID, title:title, detail:detail}) 
            }
            else{
                props.setClick(true)
                ToastAndroid.showWithGravity(
                    "Please enter some details",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
            }
        }else{
            props.setClick(true)
            ToastAndroid.showWithGravity(
                "Please enter some title",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
    }
    return (
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.7}
            onBackButtonPress={() => setModalVisible(false)}>
            <View style={styles.container}>

                <View style={styles.topRowContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Create new discussion forum</Text>
                    </View>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Title</Text>
                    <View style={{ backgroundColor: colors.backgroundGrey, borderRadius: 10 }}>
                        <TextInput
                            style={styles.titletextInput}
                            multiline
                            value={title}
                            maxLength={100}
                            placeholder={'Enter title'}
                            onChangeText={value => setTitle(value)} />
                    </View>
                </View>

                <View style={styles.detailView}>
                    <Text style={styles.titleText}>Details</Text>
                    <View style={{ backgroundColor: colors.backgroundGrey, borderRadius: 10 }}>
                        <TextInput
                            style={styles.detailtextInput}
                            multiline
                            value={detail}
                            maxLength={1000}
                            placeholder={'Enter your message'}
                            onChangeText={value => setDetails(value)} />
                    </View>
                </View>

                <View style={styles.CreateView}>
                    <TouchableOpacity
                        onPress={() => {
                            createForum()
                        }}>
                        <View style={styles.innerCreateVie}>
                            <View>
                                <Msg />
                                <Msg2 style={{ marginTop: -8, marginLeft: -2 }} />
                            </View>
                            <Text style={styles.textWhite}> Create Discussion </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    );
};
export default StartDiscussionModal;
