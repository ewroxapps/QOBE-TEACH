import React, { useEffect } from 'react';
import { Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import Bigtrash from '../../../../Assets/SVGs/Bigtrash';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { BASE_URL } from '../../../../Config/Api';
import { useDeleteClassForumMutation } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import styles from './styles';
import { DeleteProps } from './types';

const DeleteModal = (props: DeleteProps) => {
    const { modalVisible = false, setModalVisible, setClicked, name, date, dp, title, details, id, classID } = props;
    const [deleteClassForum, { isLoading, isSuccess, isError,data }] = useDeleteClassForumMutation();

    useEffect(() => {
        if(!isLoading && data !=undefined){
            if(data.success){
                 setClicked(true)
                 ToastAndroid.show(data.message,ToastAndroid.SHORT)
                 setModalVisible(false)
               }else{
                ToastAndroid.show('Please try again later',ToastAndroid.SHORT)
               }
        }
        
      }, [data]);
    function deleteForum() {
        deleteClassForum({ id: id })
       
    }

    return (
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.7}
            onBackButtonPress={() => {
                setModalVisible(false)
            }}>
            <View style={styles.container}>

                <View style={styles.topRowContainer}>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                            setClicked(false)
                           
                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.trashContainer}>
                        <Bigtrash />
                    </View>
                    <View style={styles.trash2}>
                        <Text style={styles.trashText}> Are you sure you want to remove this discussion forum?</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.recordContainer2}>
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
                                    <Image source={Images.profilePlaceholder} style={styles.profile} />
                                )}

                                <View style={styles.anotherContainer}>
                                    <Text style={styles.textPostby} numberOfLines={1}>{name}</Text>
                                    <View style={styles.calenderContainer}>
                                        <Timetable width={20} />
                                        <Text style={styles.time} numberOfLines={1}>{date}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.overallContainer}>
                            <View style={styles.secondContainer}>
                                <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
                                <Text style={styles.detailText} numberOfLines={3}>{details}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={styles.recordContainer}>

                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)      
                            ToastAndroid.showWithGravity(
                                "Deletion Canceled",
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            );
                        }}>
                            <View style={styles.cancelContainer}>
                                <Text style={styles.itemValue}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            deleteForum()
                        }}>
                            <View style={styles.deleteContainer}>
                                <Text style={styles.itemValue}>Delete</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>



        </Modal>
    );
};
export default DeleteModal;
