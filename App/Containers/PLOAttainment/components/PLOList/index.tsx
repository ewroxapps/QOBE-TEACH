import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { CLOProps } from './types';
const CLOList = (props: CLOProps) => {
  return (
    <View style={{ backgroundColor: Colors.backgroundWhite, paddingBottom:10 }}>
      <View style={styles.container}>
        <View style={{ width: '25%' }}>
          <Text style={styles.cloText}>CLO {props.index}</Text>
        </View>
       {/* {props.marks ? (
          <View style={{ flex: 1 }}>
            <ActivityList />
          </View>
        ) : null}*/} 
      </View>
      <View style={styles.newContainer}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
                     
            <Text
              style={props.data.attained === 'N'?[
                styles.text,
                {
                  fontSize: 10,
                  color: '#EF4444',
                  width: '50%',
                  left: 5,
                  top: -2
                }
              ]:[ styles.text,
                {
                  fontSize: 10,
                  color: '#E0F2FE',
                  width: '50%',
                  left: 5,
                  top: -2
                }]}>
              KPI not achieved
            </Text>
            <Text style={[styles.text, { paddingTop: 5 }]}>Weighted Total</Text>
          </View>

          <View style={styles.horizontalLine} />
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={[styles.text, { right: 10, paddingBottom: 5 }]}>
              SLO Achieved
            </Text>
          </View>
        </View>
        <View style={[styles.verticalLine]} />
        <View
          style={{
            alignItems: 'center',
            width: '20%',
            justifyContent: 'center'
          }}>
          <Text style={styles.text}>50 %KPI</Text>
        </View>
        <View style={[styles.verticalLine]} />
        <View
          style={{
            alignItems: 'center',
            width: '30%',
            justifyContent: 'center'
          }}>
          <Text style={[styles.text, { bottom: 5 }]}>{props.data.score}</Text>
          <Text style={[styles.text, { top: 5 }]}>{props.data.attained}</Text>
        </View>
      </View>
    </View>
  );
};

export default CLOList;
