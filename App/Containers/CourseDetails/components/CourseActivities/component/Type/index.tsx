import React from 'react';
import { Text, View } from 'react-native';
import Down from '../../../../../../Assets/SVGs/Down';
import Up from '../../../../../../Assets/SVGs/Up';
import styles from './styles';
import { typeProps } from './type';

const Type = (props: typeProps) => {
    return (
        <View>
            {props.show ? (
                <View style={styles.container1}>
                      <Text style={styles.texts}>{props.activity}</Text>
                      <Up style={{ marginTop: 3 }}/>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.text}>{props.activity}</Text>
                    <Down style={{ marginTop: 3 }} />
                </View>

            )

            }
        </View>
    );
};

export default Type;
