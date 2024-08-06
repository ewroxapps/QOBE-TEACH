import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import WhiteBack from '../../../../Assets/SVGs/WhiteBack';
import WhiteNext from '../../../../Assets/SVGs/WhiteNext';
import styles from './styles';

const PageHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.viewer}>
          <Text style={styles.textColor}>Activity</Text>
        </View>
        <View style={styles.moverView}>
          <TouchableOpacity>
            <WhiteBack />
          </TouchableOpacity>
          <Text style={styles.textColor}>Assignment </Text>
          <TouchableOpacity>
            <WhiteNext />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.innerView,{paddingTop:20}]}>
        <View style={styles.viewer}>
          <Text style={styles.textColor}>Total Weightage</Text>
        </View>
        <View style={[styles.viewer,{alignItems:'center'}]}>
          <Text style={styles.textColor}>5</Text>
        </View>
      </View>
      <View style={[styles.innerView,{paddingTop:20}]}>
        <View style={styles.viewer}>
          <Text style={styles.textColor}>Weightage</Text>
        </View>
        <View style={styles.moverView}>
          <Text style={styles.textColor}>3.00%</Text>
          <Text style={styles.textColor}>5.00%</Text>
        </View>
      </View>
    </View>
  );
};

export default PageHeader;
