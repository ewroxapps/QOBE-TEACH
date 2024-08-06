import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Colors } from '../../../../Themes';
import { CircluarViewProps } from './types';

const CircluarView = (props: CircluarViewProps) => {
  return (
    <View style={{ alignItems: 'center',flexDirection:'row', flex:1, justifyContent:'space-between' }}>
    <Svg height={props.size} width={props.size} style={{left:80}}>
      <Circle cx={props.size / 2} cy={props.size / 2} r={props.size / 2} fill={props.color} />
    </Svg>
    <Text style={{flex:1, color:Colors.black,left:90}}>{props.title}</Text>
  </View>
  );
};

export default CircluarView;
