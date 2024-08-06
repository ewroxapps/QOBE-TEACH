import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../../../Assets/SVGs';
import { PermissionList } from './components';
import styles from './styles';
import { ActivityProps } from './types';
const PermissionModal = (props: ActivityProps) => {
    const { modalVisible = false, setModalVisible } = props;
    const [obe, setObe] = useState(false);
    return (
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.62}
            onBackButtonPress={() => {
                setModalVisible(false)
            }}>
            <View style={styles.container}>

                <View style={styles.topRowContainer}>
                    <Text style={styles.heading}>Permissions</Text>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ padding: 20 }}>
                    <View style={styles.spacebetweenView1}>
                        <Text style={styles.textheading}>Activity</Text>
                        <Text style={styles.textheading}>Status</Text>
                    </View>


                    <PermissionList/>
                    <PermissionList/>
                    <PermissionList/>
                    <PermissionList/>
                    <PermissionList/>
                    
                </View>

                <TouchableOpacity onPress={() => {

                }}>
                    <View style={styles.buttonView}>
                        <Text style={styles.whiteTxt}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};
export default PermissionModal;
