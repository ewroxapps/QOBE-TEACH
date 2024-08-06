import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import BlueAttach from '../../../../Assets/SVGs/BlueAttach';
import Upload from '../../../../Assets/SVGs/Upload';
import WhiteDownload from '../../../../Assets/SVGs/WhiteDownload';
import WhiteTrash from '../../../../Assets/SVGs/WhiteTrash';
import WhiteUpload from '../../../../Assets/SVGs/WhiteUpload';
import styles from './styles';
import { ImportProps } from './types';


const ImportModal = (props: ImportProps) => {
    const { modalVisible = false, setModalVisible } = props;
    var xyz = 1
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
                    <Text style={styles.importTxt}>Import (Advance)</Text>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.centerView}>
                    {xyz === 1 ? (
                        <Upload />
                    ) : (
                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <BlueAttach width={60} />
                            <Text style={styles.filetxt}>File name</Text>
                        </View>
                    )

                    }
                    <TouchableOpacity onPress={() => {

                    }}>

                        {xyz === 1 ? (
                            <View style={styles.uploadButton}>
                                <WhiteUpload width={18} />
                                <Text style={styles.whiteTxt}>Upload Excel File</Text>
                            </View>
                        ) : (
                            <View style={styles.redBin}>
                                <WhiteTrash />
                                <Text style={styles.whiteTxt}>Remove</Text>
                            </View>
                        )
                        }
                    </TouchableOpacity>

                    <Text style={styles.noteTxt}>Please download excel file template and fill the template to upload. File size should not exceed 2MB.</Text>
                    <Text style={styles.templateTxt}>Download Import Excel Template</Text>
                    <TouchableOpacity onPress={() => {

                    }}>
                        <View style={styles.downloadButton}>
                            <WhiteDownload width={18} />
                            <Text style={styles.whiteTxt}>Download</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {

                }}>
                    <View style={styles.importButton}>
                        <Text style={styles.whiteTxt}>Import</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </Modal>
    );
};
export default ImportModal;
