import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { EnrollProps } from './type';
const MenuList = (props: EnrollProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
    
    };
    const checkboxStyles = [
        styles.checkbox,
        isChecked && props.from === 'Enroll' && styles.checkedCheckboxGreen,
        isChecked && props.from === 'Update' && styles.checkedCheckboxBlue,
      ];
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.containers}>
                    <View style={checkboxStyles}>
                        {isChecked && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.label}>{props.data}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default MenuList;
