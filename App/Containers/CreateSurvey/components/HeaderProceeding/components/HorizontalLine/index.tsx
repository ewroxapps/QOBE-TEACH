import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { HorizontalLineProps } from './types';
const HorizontalLine = (props:HorizontalLineProps) => {
    const lineStyle = {
        width: props.length,
        borderBottomColor: props.color,
     
      };
    
      return <View style={[styles.line, lineStyle]} />;
    };

export default HorizontalLine;
