import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { complainProps } from './types';
const DetailComplaint = (props:complainProps) => {
  const navigation = useNavigation<IComplaintNavigationProp>();
  return (
    <TouchableOpacity style={styles.container}
      onPress={()=>{
        navigation.navigate('ComplaintChat',{id:props.data.id})
      }}
    >
      <Text style={styles.categoryTxt}>{props.data.category}</Text>
      <View style={styles.justifyView}>
        <Text style={styles.leftTexT}>Created by:</Text>
        <Text style={styles.rightTxt}>{props.data.student}</Text>
      </View>
      <View style={[styles.justifyView,{marginTop:3}]}>
        <Text style={styles.leftTexT}>Creation time:</Text>
        <Text style={styles.rightTxt}>{props.data.created_when}</Text>
      </View>
      <View style={[styles.justifyView,{marginTop:3}]}>
        <Text style={styles.leftTexT}>Status</Text>
        <Text style={styles.rightTxt}>{props.data.status}</Text>
      </View>
      <View style={[styles.justifyView,{marginTop:3}]}>
        <Text style={styles.leftTexT}>Subject</Text>
        <Text style={styles.rightTxt}>{props.data.subject}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailComplaint;
