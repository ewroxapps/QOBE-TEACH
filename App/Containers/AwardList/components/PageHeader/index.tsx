import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import WhiteBack from '../../../../Assets/SVGs/WhiteBack';
import WhiteNext from '../../../../Assets/SVGs/WhiteNext';
import styles from './styles';
import { PageProps } from './types';
const PageHeader = (props: PageProps) => {
  return (
    <View>
      {props.lists === 'Award List' ? (
        <View style={styles.container}>
          <View style={styles.innerView}>
            <View style={styles.viewer}>
              <Text style={styles.textColor}>Student Details</Text>
            </View>
            <View style={styles.moverView}>
              <TouchableOpacity>
                <WhiteBack />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.textColor, { fontSize: 12 }]}>
                  Assignment 1{' '}
                </Text>
                <Text style={[styles.textColor, { fontSize: 10 }]}>
                  (15.00)
                </Text>
              </View>

              <TouchableOpacity>
                <WhiteNext />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.innerView}>
            <View style={styles.viewer}>
              <Text style={styles.textColor2}>Numeric Grading</Text>
            </View>
            <View style={styles.viewer}>
              <Text style={styles.textColor2}>Grade Point</Text>
            </View>
            <View style={styles.viewer}>
              <Text style={styles.textColor2}>Letter Grade</Text>
            </View>
            <View style={styles.viewer}>
              <Text style={styles.textColor2}>Remarks</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default PageHeader;
