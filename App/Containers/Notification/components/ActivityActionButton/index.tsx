import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ActivityActionButtonProps } from './types';

const ActivityActionButton = (props: ActivityActionButtonProps) => {
  const { label, icon, color, onPress, disabled } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: color, opacity: disabled ? 0.5 : 1 }
      ]}
      onPress={onPress}
      disabled={disabled}>
      {icon !== undefined && icon()}

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActivityActionButton;
