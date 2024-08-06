import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { CircularTextViewProps } from './types';
const CircularTextView = (props:CircularTextViewProps) => {
    const containerStyle = {
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        backgroundColor:props.circleColor,
        borderColor: props.borderColor
      };
    
      const textStyle = {
        fontSize: props.size / 4,
        color:props.textColor
      };
    
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{props.text}</Text>
    </View>
  );
};

export default CircularTextView;
