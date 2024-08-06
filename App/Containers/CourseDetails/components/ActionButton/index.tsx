import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import styles from './styles';
import { ActionButtonProps } from './types';

const ActionButton = (props: ActionButtonProps) => {
  const { color, textColor, label, icon, onPress } = props;
  return (
    <Surface
      // @ts-ignore
      elevation={3}
      style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity onPress={onPress} style={styles.innerContainer}>
        {icon()}
        {label==='Activities' ?(
        <Text style={[styles.label, { color: textColor,bottom:5 }]}>{label}</Text>
        ):(
          <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        )
        }

      </TouchableOpacity>
    </Surface>
  );
};
export default ActionButton;
