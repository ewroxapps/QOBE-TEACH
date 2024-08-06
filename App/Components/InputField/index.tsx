import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Eye, EyeCrossed } from '../../Assets/SVGs';
import styles from './styles';
import { InputFieldProps } from './types';

const InputField = (props: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <View style={[styles.container, props.style ?? {}]}>
        <TextInput
          value={props.value}
          placeholder={props.label}
          style={styles.inputField}
          onChangeText={props.onTextChange ? props.onTextChange : () => {}}
          secureTextEntry={props.secureTextEntry && !showPassword}
        />
        {props.secureTextEntry &&
          (!showPassword ? (
            <TouchableOpacity
              onPress={() => setShowPassword(true)}
              hitSlop={styles.hitSlop}>
              <EyeCrossed />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setShowPassword(false)}
              hitSlop={styles.hitSlop}>
              <Eye />
            </TouchableOpacity>
          ))}
      </View>
      {props.isError ? <Text style={styles.error}>{props.error}</Text> : null}
    </>
  );
};

export default InputField;
