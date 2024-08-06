import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import GreyCalender from '../../../../Assets/SVGs/GreyCalender';
import styles from './styles';
import { planProps } from './types';

const PlanDetail = (props:planProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
      navigation.navigate( "TeachingDetail", {id:props.data?.id})
      }}>
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

        <View style={styles.justifycontainer2}>
          <View style={styles.innerView}>
            <Text style={styles.blackTxt}>{props.data?.from_date}</Text>
            <View style={{ flexDirection: 'row' }}>
              <GreyCalender width={15} height={15} style={{ right: 2 }} />
              <Text style={styles.greyTxt}>Starts</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.innerView}>
            <Text style={styles.blackTxt}>{props.data?.to_date}</Text>
            <View style={{ flexDirection: 'row' }}>
              <GreyCalender width={15} height={15} style={{ right: 2 }} />
              <Text style={styles.greyTxt}>Ends</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlanDetail;
