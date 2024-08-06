import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Colors } from '../../../../Themes';
import { TabProps } from './types';
const CustomTab = (props: TabProps) => {
    return (
        <View>
            {props.focused ? (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: '#475569',
                  
                }}>
                    <Text style={{color:Colors.backgroundWhite,fontSize:12}}>{props.count}</Text>
                </View>
            ) : (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: '#94A3B8',
                  
                }}>
                      <Text style={{color:Colors.backgroundWhite,fontSize:12}}>{props.count}</Text>
                </View>
            )}

        </View>
    );
};

export default CustomTab;
