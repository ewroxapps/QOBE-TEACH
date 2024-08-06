import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Colors } from '../../../../Themes';
import DropDown from '../../../Timetable/components/DropDown';
import styles from './styles';
import { typeProps } from './types';
const TypeComponent = (props: typeProps) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.headerTxt}>Select Survey Type</Text>
      <View style={{ paddingLeft: 10 }}>
        <RadioButton.Group
          onValueChange={newValue => {
            props.setValue(newValue);
          }}
          value={props.value}>
          <View style={styles.containers}>
            <RadioButton
              value="Template "
              status={props.value === 'Template ' ? 'checked' : 'unchecked'}
              color={Colors.quizBlue}
            />
            <Text style={[styles.radioText]}>Template</Text>
          </View>
          <View style={styles.containers}>
            <RadioButton
              value="SLO Base"
              status={props.value === 'SLO Base' ? 'checked' : 'unchecked'}
              color={Colors.quizBlue}
            />
            <Text style={[styles.radioText]}>SLO Base</Text>
          </View>

          <View style={styles.containers}>
            <RadioButton
              value="Template Base + SLO Base"
              status={
                props.value === 'Template Base + SLO Base'
                  ? 'checked'
                  : 'unchecked'
              }
              color={Colors.quizBlue}
            />
            <Text style={[styles.radioText]}>Template Base + SLO Base</Text>
          </View>
        </RadioButton.Group>
      </View>
      <Text style={styles.blueTxt}>It will create SLO base survey.</Text>

      {props.value === 'SLO Base' && !props.error ? (
        <DropDown containerName="Survey Category" height={380} />
      ) : (
        <View>
          {!props.error ? (
            <DropDown containerName="Survey Template" height={380} />
          ) : null}
        </View>
      )}
      {props.error ? (
        <TouchableOpacity onPress={()=>{
          props.setError(!props.error)
        }}>
          <View style={styles.error} />
          <Text style={styles.errorTxt}>Survey cannot be empty</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TypeComponent;
