import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import Modal from 'react-native-modal';
import { Attachment, CloseCircle, CoursesHollow } from '../../../../Assets/SVGs';
import Bigtrash from '../../../../Assets/SVGs/Bigtrash';
import BlackDownload from '../../../../Assets/SVGs/BlackDownload';
import BlackImport from '../../../../Assets/SVGs/BlackImport';
import EditBlack from '../../../../Assets/SVGs/EditBlack';
import Student from '../../../../Assets/SVGs/Student';
import styles from './styles';
import { ActionProps } from './types';

const ActionModal = (props: ActionProps) => {
    const { modalVisible = false, setModalVisible } = props;
    return (
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.5}
            onBackButtonPress={() => {
                setModalVisible(false)

            }}>
            <View style={styles.container}>
                <View style={styles.topRowContainer}>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.textHeading}>Assignment 1</Text>
                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <EditBlack width={18} />
                            <Text style={styles.textView}>Edit</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <Attachment />
                            <Text style={styles.textView}>Add Attachment</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <CoursesHollow width={18} />
                            <Text style={styles.textView1}>Course Section Attachment</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <Student />
                            <Text style={styles.textView}>Student Remarks & Uploads</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <BlackDownload width={18} />
                            <Text style={styles.textView}>Download Excel Template</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.outcomeText}>Outcome</Text>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <Text style={styles.plustext}>+</Text>
                            <Text style={styles.textView}>Download Excel Template</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <BlackImport width={18} />
                            <Text style={styles.textView}>Import Activity Outcome</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            marginTop: 15,
                            marginBottom: 15,
                            borderBottomColor: '#F1F5F9',
                            borderBottomWidth: 1,
                        }}
                    />

                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.rowflex}>
                            <Bigtrash width={20} style={{ marginRight:5,marginTop:-15}}/>
                            <Text style={styles.trashTxt}>Delete</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        </Modal>
    );
};
export default ActionModal;
