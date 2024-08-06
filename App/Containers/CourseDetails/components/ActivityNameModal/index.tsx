import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import { ActivityProps } from './types';

const ActivityNameModal = (props: ActivityProps) => {
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
            <View style={styles.outerLayer}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)
                     //   navigation.navigate('NewActivity', { activityname: 'Assignment' });
                    }}>
                    <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Assignment</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer1}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)
                    //    navigation.navigate('NewActivity', { activityname: 'Online Assignment' });
                    }}>
                    <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Online Assignment</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.outerLayer2}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                     //   navigation.navigate('NewActivity', { activityname: 'Quiz' });
                    }}>
                         <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Quiz</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer3}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)
                    //    navigation.navigate('NewActivity', { activityname: 'Online Quiz' });
                    }}>
                   <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Online Quiz</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer4}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)
                    //    navigation.navigate('NewActivity', { activityname: 'Presentation' });
                    }}>
                    <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Presentation</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer5}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                       setModalVisible(false)
                    //    navigation.navigate('NewActivity', { activityname: 'Mid' });
                    }}>
                    <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Mid Exam</Text>
                    </View> 
                </TouchableOpacity>
            </View>

            <View style={styles.outerLayer6}>
                <TouchableOpacity style={styles.addButton}
                    onPress={() => {
                        setModalVisible(false)
                    //    navigation.navigate('NewActivity', { activityname: 'Final' });
                    }}>
                    <Text  style={styles.textWhite}>  +</Text>
                   <View style={{flexDirection:'row', flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.textWhite}>Final Exam</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </Modal>
    );
};
export default ActivityNameModal;
