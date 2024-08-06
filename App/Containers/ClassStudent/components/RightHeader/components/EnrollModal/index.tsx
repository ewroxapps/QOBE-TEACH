import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Switch } from 'react-native-paper';
import { CloseCircle } from '../../../../../../Assets/SVGs';
import WhiteDropDown from '../../../../../../Assets/SVGs/WhiteDropDown';
import { Colors } from '../../../../../../Themes';
import { MenuList } from './components';
import styles from './styles';
import { ActivityProps } from './types';
const EnrollModal = (props: ActivityProps) => {
    const { modalVisible = false, setModalVisible, from } = props;
    const [menuOpen, setMenuOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [obe, setObe] = useState(false);
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
                    {from === "Enroll" ? (
                        <Text style={styles.heading}>Enroll Class Student</Text>
                    ) : (
                        <Text style={styles.heading}>Update Class Student</Text>
                    )

                    }

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
                        <Text style={styles.text}>Student</Text>

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
                                        from={props.from}
                                    />
                                )}
                            />
                        ) : null

                        }


                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.text}>Status</Text>
                        <TextInput
                            style={styles.titletextInput}
                            value={title}
                            placeholder={''}
                             onChangeText={value => setTitle(value)} />
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.text}>Use In OBE</Text>
                        <Switch value={obe} color={Colors.quizBlue} onValueChange={() => {
                            setObe(!obe)
                        }} />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.text}>Remarks</Text>
                        <TextInput
                            style={styles.titletextInput2}
                            multiline
                            value={title}
                            placeholder={''}
                            onChangeText={value => setTitle(value)} />
                    </View>

                    <TouchableOpacity onPress={() => {

                    }}>
                        {from === "Enroll" ? (
                            <View style={styles.buttonView}>
                                <Text style={styles.whiteTxt}>Save</Text>
                            </View>
                        ) :
                            <View style={styles.buttonView2}>
                                <Text style={styles.whiteTxt}>Update</Text>
                            </View>
                        }

                    </TouchableOpacity>
                </View>
            </View>


        </Modal>
    );
};
export default EnrollModal;
