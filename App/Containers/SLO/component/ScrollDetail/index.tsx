import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import styles from './styles';
import { ScrollDetailProps } from './types';
const ScrollDetail = (props:ScrollDetailProps) => {
  const [modal, setModal] = React.useState(false);
  var screenWidth = Dimensions.get('screen').width;
  return (
    // @ts-ignore
    <View style={{marginBottom:10}}>
      <View style={styles.scroollView}>
        <View style={styles.justify}>
          <View style={{width: screenWidth / 9}}>
            <Text style={styles.txt}>{props.index}</Text>
          </View>
          <View style={{width: screenWidth / 3}}>
            <Text style={styles.txt}>-</Text>
          </View>
          <View style={{ width: screenWidth / 3}}>
            <Text style={styles.txt}>{props.data.plo}</Text>
          </View>
          <View style={{width: screenWidth / 3}}>
            <Text style={styles.txt}>{props.data.learning_type}</Text>
          </View>

          <View style={{width: screenWidth / 3}}>
            <Text style={styles.txt}>{props.data.level}</Text>
          </View>
          <View style={{width: screenWidth / 3}}>
            <Text style={styles.txt}>{props.data.emphasis}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScrollDetail;
