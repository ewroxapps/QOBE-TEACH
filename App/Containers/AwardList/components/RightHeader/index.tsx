import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton, Switch } from 'react-native-paper';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import BlueDownload from '../../../../Assets/SVGs/BlueDownload';
import RightHandler from '../../../../Assets/SVGs/RightHandler';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { ClickProps } from './types';
const RightHeader = (props: ClickProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState('');
  const [problem, setProblem] = useState(false);
 
  return (
    // @ts-ignore
    <View>
      <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
        <MenuTrigger
          onPress={() => setMenuOpen(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity
            style={styles.unclickedConfig}
            onPress={() => {
              setMenuOpen(!menuOpen);
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 5,
                paddingRight: 5,
                right: 10
              }}>
              <RightHandler width={18} height={18} />
            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <View style={{ paddingLeft: 10 }}>
            <RadioButton.Group
              onValueChange={newValue => {
                setValue(newValue);
                if (newValue === 'Award List') {
                  props.setLists('Award List');
                } else if (newValue === 'Grade Statistics') {
                  props.setLists('Grade Statistics');
                } else {
                  props.setLists('Grade System');
                }
              }}
              value={value}>
              <View style={styles.containers}>
                <RadioButton
                  value="Award List"
                  status={value === 'Award List' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 60 }]}>
                  Award List
                </Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="Grade Statistics"
                  status={
                    value === 'Grade Statistics' ? 'checked' : 'unchecked'
                  }
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 27 }]}>
                  Grade Statistics
                </Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="Grading System"
                  status={value === 'Grading System' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 27 }]}>
                  Grading System
                </Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.onOffView}>
            <Text style={styles.textStyle}>Show Percentage</Text>
            <Switch value={problem} color={Colors.quizBlue} onValueChange={() => {
              setProblem(!problem)
              props.setPercentage(problem)
            }} />
          </View>

          <View style={styles.line} />
          <MenuOption style={styles.menuOptionContainer}>
            <BlueDownload />
            <Text style={styles.text}>Download PDF</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}>
            <BlueDownload />
            <Text style={styles.text}>Download Excel</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default RightHeader;
