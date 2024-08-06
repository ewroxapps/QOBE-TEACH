import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Switch } from 'react-native-paper';
import { CloseCircle } from '../../../../Assets/SVGs';
import BlueAttach from '../../../../Assets/SVGs/BlueAttach';
import Upload from '../../../../Assets/SVGs/Upload';
import WhiteTrash from '../../../../Assets/SVGs/WhiteTrash';
import WhiteUpload from '../../../../Assets/SVGs/WhiteUpload';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { modalProps } from './types';
const ImportsModal = (props: modalProps) => {
    const { modalVisible = false, setModalVisible, } = props;
    const [visible, setVisible] = useState(false);
    const [upload, setUpload] = useState(false);
    const [assmentMethod, setAssessmentMethod] = useState('');
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
                    <View style={styles.courseView}>
                        <Text style={styles.courseDetailText}>Add Attachment</Text>
                    </View>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.viewCenter}>
                    {upload ? (
                        <View style={{alignItems:'center',marginTop:20}}>
                             <BlueAttach/>
                             <Text style={styles.blueTxt}>Student Daybook_ Java with Spring - WJWD01.docx</Text>
                             <TouchableOpacity onPress={() => {
                                setUpload(!upload)
                            }}>
                                <View style={styles.remove}>
                                    <WhiteTrash/>
                                    <Text style={styles.whiteTxt}>Remove</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ alignItems: 'center' }}>
                            <Upload />
                            <TouchableOpacity onPress={() => {
                                setUpload(!upload)
                            }}>
                                <View style={styles.uploadButton}>
                                    <WhiteUpload />
                                    <Text style={styles.whiteTxt}>Upload File</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )

                    }

                    <View style={styles.instructionView}>
                        <Text style={styles.instructiontxt1}>1. Allowed file types are xls, xlsx, doc, docx, ppt, pptx, pdf, jpg, jpeg, zip, rar and png.</Text>
                        <Text style={styles.instructiontxt1}>2. Max upload size is 50 MB</Text>
                    </View>
                </View>

                <View style={styles.discriptionView}>
                    <Text style={styles.visibleTxt}>Discription</Text>
                    <TextInput
                        multiline
                        style={styles.choiceInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                </View>
                <View style={styles.visibleView}>
                    <Text style={styles.visibleTxt}>Visible to students</Text>
                    <Switch value={visible} color={Colors.quizBlue} onValueChange={() => {
                        setVisible(!visible)
                    }} />
                </View>
                <TouchableOpacity disabled={upload ? false : true}>
                    <View style={[upload ? styles.upload : styles.disableupload]}>
                        <Text style={styles.whiteTxt}>Save</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </Modal>
    );
};
export default ImportsModal;
