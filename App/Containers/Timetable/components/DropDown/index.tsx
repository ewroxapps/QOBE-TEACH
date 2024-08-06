import React, { useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle } from '../../../../Assets/SVGs';
import WhiteDropDown from '../../../../Assets/SVGs/WhiteDropDown';
import { Colors } from '../../../../Themes';
import style from './styles';
import { DropDownProps } from './types';
const DropDown = (props: DropDownProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option: any) => {
    props.setValue(option);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    props.setError(false);
    if (props.options.length > 0) {
      setDropdownVisible(!dropdownVisible);
    } else {
      ToastAndroid.show('No options available', ToastAndroid.SHORT);
    }
  };

  const overlayStyle = {
    ...style.overlay,
    top: props.height === null ? 0 : props.height
  };
  return (
    <View>
      <Text style={style.textStyle}>{props.containerName}</Text>
      <TouchableOpacity onPress={toggleDropdown}>
        <View
          style={props.error === false ? style.viewDrop : style.viewDropError}>
          <Text style={style.selectedText}>{props.value}</Text>
          <WhiteDropDown style={{ right: 20 }} />
        </View>
        {props.error ? (
          <Text style={style.errorText}>Please select a value</Text>
        ) : null}
      </TouchableOpacity>
      <Modal isVisible={dropdownVisible} backdropOpacity={0}>
        <TouchableWithoutFeedback onPress={toggleDropdown}>
          <View style={overlayStyle}>
            <View ref={dropdownRef} style={style.dropDown}>
              {props.options != undefined ? (
                <ScrollView>
                  {props.options.map((option, index) => (
                    <TouchableOpacity
                      style={{ flexDirection: 'row' }}
                      key={index}
                      onPress={() => handleOptionSelect(option)}>
                      <Text
                        style={{
                          color: Colors.black,
                          fontSize: 12,
                          marginBottom: 5,
                          marginRight: 5,
                          fontWeight:'300'
                        }}>
                        {index + 1}{' '}
                      </Text>
                      <Text
                        style={{
                          color: Colors.black,
                          fontSize: 12,
                          marginBottom: 5,
                          fontWeight:'300'
                        }}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              ) : null}

              <TouchableOpacity
                onPress={() => {
                  setDropdownVisible(false);
                }}>
                <CloseCircle width={15} height={15} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default DropDown;
