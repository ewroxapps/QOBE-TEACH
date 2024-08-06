import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { ActivityProps } from './types';

const AddActivityModal = (props: ActivityProps) => {
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
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                    
                    }}>
                    <Text style={styles.textWhite}>+ Import.xls</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer1}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                    
                    }}>
                    <Text style={styles.textWhite}>+ Add Rubric</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.outerLayer2}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                    
                    }}>
                    <Text style={styles.textWhite}>+ Add Multiple</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer3}> 
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)
                        navigation.navigate('AddClassActivity',{activityName:props.activityName});
                    }}>
                    <Text style={styles.textWhite}>+ Add Single</Text>
                </TouchableOpacity>
            </View>


        </Modal>
    );
};
export default AddActivityModal;
