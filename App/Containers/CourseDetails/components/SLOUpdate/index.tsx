import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Arrow from '../../../../Assets/SVGs/Arrow';
import SloAttainment from '../../../../Assets/SVGs/SloAttainment';
import styles from './style';

const SLOUpdate = () => {

    return (

        <View style={styles.topContainer}>
            <Text style={styles.update}>Important Updates</Text>
            <TouchableOpacity
                onPress={() => {
                }} >
                <View style={styles.container} >
                    <View style={{ flexDirection: 'row' }}>
                        <SloAttainment style={{ top: 3 }} />
                        <Text style={styles.textColor}>SLO Attainment Update</Text>
                    </View>
                    <Arrow style={{ top: 3 }} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SLOUpdate;
