import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Lock } from '../../../../Assets/SVGs';
import styles from './styles';

const Header = () => {

    return (

        <View >
            <View style={{ flexDirection: 'row', left:50 }}>
                <View style={styles.innerContainer}>
                    <Lock/>
                    <Text style={styles.textCLO}>Change Password</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;
