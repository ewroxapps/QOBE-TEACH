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
import colors from '../../../../Themes/Colors';
import style from './styles';
import { DropDownProps } from './types';
const CourseSectionDropDown = (props: DropDownProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option: any) => {
    props.setValue(option);
    setDropdownVisible(false);
  };

  const handleOptionSelects = (option: any) => {
    props.setCourseKey(option);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    props.setError(false);
    const isDataEmpty = Object.keys(props.data).length === 0;
    if (!isDataEmpty) {
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
              <ScrollView>
                {Object.entries(props.data).map(([heading, courses]) => (
                  <ScrollView key={heading}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginBottom: 8,
                        marginTop: 5,
                        borderBottomWidth:0.6
                      }}>
                      {heading}
                    </Text>
                    {Object.entries(courses).map(
                      ([courseId, courseDescription]) => (
                        <TouchableOpacity
                          key={courseId}
                          onPress={() => {
                            handleOptionSelect(courseDescription.toString());
                            handleOptionSelects(courseId);
                          }}>
                          <Text style={{ 
                             fontSize: 12,
                             color:colors.black,
                             fontWeight:'200',
                             marginBottom:2
                           }}>
                            {courseDescription.toString()}
                          </Text>
                        </TouchableOpacity>
                      )
                    )}
                  </ScrollView>
                ))}
              </ScrollView>

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

export default CourseSectionDropDown;
