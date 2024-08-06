import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { Colors } from '../../../../../../../../Themes';
import styles from './styles';
const PermissionList = () => {
    const [obe, setObe] = useState(false);
    return (
        <View style={styles.spacebetweenView}>
            <Text style={styles.textheading1}>Assignment 1</Text>
            <Switch value={obe} color={Colors.quizBlue} onValueChange={() => {
                setObe(!obe)
            }} />
        </View>
    );
};
export default PermissionList;
