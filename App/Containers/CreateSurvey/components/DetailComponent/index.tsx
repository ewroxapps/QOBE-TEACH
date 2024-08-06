import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDown from '../../../Timetable/components/DropDown';
import styles from './styles';
import { detailProps } from './types';
const DetailComponent = (props:detailProps) => {

  
  return (
    <ScrollView style={styles.container}  scrollEventThrottle={16}>
      <View style={styles.topContainer}>
        <Text style={styles.textColor}>Name</Text>
        <TextInput
          style={styles.titletextInput}
          value={props.name}
          onChangeText={value => props.setName(value)}
        />
      </View>
      <View style={styles.topContainer}  >
        <DropDown height={290} containerName="Category" />
        {props.active === true ? (
          <View style={styles.touchableView}>
            <TouchableOpacity
              style={styles.square}
              onPress={() => {
                props.setActive(false);
              }}>
              <Text style={styles.tick}>✓</Text>
            </TouchableOpacity>
            <Text style={styles.activeTxt}>Active</Text>
          </View>
        ) : (
          <View style={styles.touchableView}>
            <TouchableOpacity
              style={styles.emptySquare}
              onPress={() => {
                props.setActive(true);
              }}>
              <Text style={[styles.tick, { color: '#F8FAFC' }]}>✓</Text>
            </TouchableOpacity>
            <Text style={styles.activeTxt}>Active</Text>
          </View>
        )}
      </View>
        <DropDown height={390} containerName="Course Section" />
      <View style={styles.topContainer}>
        <Text style={styles.textColor}>Question Group</Text>
        <TextInput
          style={[styles.titletextInput,{height:60}]}
          value={props.question}
          onChangeText={value => props.setQuestion(value)}
        />
      </View>

      <View style={styles.topContainer}>
        <Text style={styles.textColor}>Notes</Text>
        <TextInput
          style={[styles.titletextInput,{height:100, marginBottom:20}]}
          value={props.note}
          onChangeText={value =>props. setNote(value)}
        />
      </View>
    </ScrollView>
  );
};

export default DetailComponent;
