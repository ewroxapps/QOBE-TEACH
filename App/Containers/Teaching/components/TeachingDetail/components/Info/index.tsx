import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { InfoplanProps } from './types';
const Info = (props: InfoplanProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.justifycontainer1}>
        <Text style={styles.blueText}>{props.data?.name}</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.greyTxt}>Subject</Text>
        <Text style={styles.blackTxt}>{props.data?.subject}</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.greyTxt}>Topic</Text>
        <Text style={styles.blackTxt}>{props.data?.topics}</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.greyTxt}>SLOs</Text>
        {props.data?.clos?.map((clo: string, index) => {
          return (
            <View style={{ marginTop: 5 }} key={index}>
              <Text style={styles.blackTxt}>{clo}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Info;
