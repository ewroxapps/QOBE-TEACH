import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { ActivityProps } from './types';

const AddTeaching = (props: ActivityProps) => {
    const { modalVisible = false, setModalVisible } = props;
    const navigation = useNavigation<ICoursesNavigationProp>(); 
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
                        props.setModalVisible(!modalVisible)
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
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)

                    }}>
                    <Text style={styles.textWhite}>  +</Text>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textWhite}>Copy From Course</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer1}>
                <TouchableOpacity style={styles.addButton2}
                    onPress={() => {
                        navigation.navigate( "AddNewTeachingSection", {heading:'Add Teaching Plan'})
                        setModalVisible(false)
                    }}>
                    <Text style={styles.textWhite}>  +</Text>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textWhite}>Add New</Text>
                    </View>
                </TouchableOpacity>
            </View>




        </Modal>
    );
};
export default AddTeaching;
