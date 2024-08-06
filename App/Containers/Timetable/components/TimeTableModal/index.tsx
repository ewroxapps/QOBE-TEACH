import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import MyTimeTableModal from '../MyTimeTableModal';
import OtherTimeTableModal from '../OtherTimeTableModal';
import styles from './styles';
import { ActivityProps } from './types';


const TimeTableModal = (props: ActivityProps) => {
    const { modalVisible = false, setModalVisible } = props;
    const [timeTablemodal, setTimeTablemodal] = React.useState(false);
    const [othertimeTablemodal, setOtherTimeTablemodal] = React.useState(false);

    return (
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.62}
            onBackButtonPress={() => {
                setModalVisible(false)

            }}>

            <View style={styles.containers}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                      
                    }}
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.innerContainer2}>
                            <Text style={styles.textWhite}>+</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer}>
                <TouchableOpacity style={styles.addButtons}
                    onPress={() => {
                        setOtherTimeTablemodal(true)
                    }}>
                    <Text style={styles.textWhite}>+ Time Table (Others)</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer1}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        //  setModalVisible(false)
                          setTimeTablemodal(true)
                    }}>
                    <Text style={styles.textWhite}>+ Time Table</Text>
                </TouchableOpacity>
            </View>

            {timeTablemodal ? (
                <MyTimeTableModal
                    modalVisible={timeTablemodal}
                    setModalVisible={setTimeTablemodal}
                    setModalVisibleMain={props.setModalVisible}
                    setRefreshed={props.setRefreshed}
                    courseSection=''
                    date=''
                    topic=''
                    slot=''
                    room=''
                    id={0}
                    isOnline={'No'}
                    from={'Add'}
                />
            ) : null

            }
            {othertimeTablemodal ?(
                <OtherTimeTableModal
                    modalVisible={othertimeTablemodal}
                    setModalVisible={setOtherTimeTablemodal}
                    setModalVisibleMain={props.setModalVisible}
                    setRefreshed={props.setRefreshed}
                    courseSection=''
                    slot=''
                    activityType=''
                    detail=''
                    id={-1}
                    date=''
                    from='Add'
                  />

            ):null

            }
        </Modal>
    );
};
export default TimeTableModal;
