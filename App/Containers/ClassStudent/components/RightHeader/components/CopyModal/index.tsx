import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../../../Assets/SVGs';
import WhiteDropDown from '../../../../../../Assets/SVGs/WhiteDropDown';
import { MenuList } from '../EnrollModal/components';
import styles from './styles';
import { ActivityProps } from './types';
const CopyModal = (props: ActivityProps) => {
    const { modalVisible = false, setModalVisible } = props;
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpen1, setMenuOpen1] = useState(false);
    const dummyData = [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },];

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
                    <Text style={styles.heading}>Copy Class Student</Text>
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.dataView}>
                    <View>
                        <Text style={styles.text}>Program Batch</Text>
                        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                            <View style={styles.dropdown}>
                                <WhiteDropDown />
                            </View>
                        </TouchableOpacity>
                        {menuOpen ? (
                            <FlatList
                                data={dummyData}
                                style={styles.flatList}
                                renderItem={({ item }) => (
                                    <MenuList
                                        data={item.label}
                                        from={"Enroll"}
                                    />
                                )}
                            />
                        ) : null

                        }
                    </View>


                    <View>
                        <Text style={styles.text}>Students</Text>
                        <TouchableOpacity onPress={() => setMenuOpen1(!menuOpen1)}>
                            <View style={styles.dropdown}>
                                <WhiteDropDown />
                            </View>
                        </TouchableOpacity>
                        {menuOpen1 ? (
                            <FlatList
                                data={dummyData}
                                style={styles.flatList}
                                renderItem={({ item }) => (
                                    <MenuList
                                        data={item.label}
                                        from={"Enroll"}
                                    />
                                )}
                            />
                        ) : null

                        }
                    </View>
                    <TouchableOpacity onPress={() => {
                        
                    }}>
                    <View style={styles.buttonView}>
                        <Text style={styles.whiteTxt}>Save</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};
export default CopyModal;
