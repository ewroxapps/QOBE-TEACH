import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { RoundedButtonProps } from './types';

const RoundedButton = (props: RoundedButtonProps) => {
  const { label, onPress, textStyle, style } = props;
  return (
    <TouchableOpacity style={[styles.container, style ?? {}]} onPress={onPress}>
      <Text style={[styles.text, textStyle ?? {}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
