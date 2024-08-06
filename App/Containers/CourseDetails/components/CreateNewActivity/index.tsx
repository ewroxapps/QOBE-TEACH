import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AddCircle from '../../../../Assets/SVGs/AddCircle';
import ActivityNameModal from '../ActivityNameModal';
import styles from './styles';
const CreateNewActivity = () => {
   
    const [modal, setModal] = React.useState(false);
    return (
        <View style={styles.topContainer}>
            <View style={styles.container}>
                <Text style={styles.txt}>Course Activities</Text>
                <TouchableOpacity
                    onPress={() => {
                        
                        setModal(!modal)
                    }} >
                    <View style={styles.direction}>
                        <AddCircle />
                        <Text style={styles.txtBlue}>Add New</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {modal ? (
                <ActivityNameModal
                    modalVisible={modal}
                    setModalVisible={setModal}
                />
            ) : null

            }
        </View>
    );
};

export default CreateNewActivity;
