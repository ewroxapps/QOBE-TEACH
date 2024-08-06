import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
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
const RightClick = (props: ClickProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState('');
  const [weights, setWeights] = useState('');
  const [attachment, setAttachment] = useState(false);
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
          <View
            style={{ flexDirection: 'row', marginTop: 5, marginBottom: 15 }}>
            <Text style={styles.textColor}>Marks</Text>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <RadioButton.Group
              onValueChange={newValue => {
                setValue(newValue);
                if (newValue === 'Summary Report') {
                  props.setMarks(false);
                } else {
                  props.setMarks(true);
                }
              }}
              value={value}>
              <View style={styles.containers}>
                <RadioButton
                  value="Summary Report"
                  status={value === 'Summary Report' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText,{right:21}]}>Summary Report</Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="Detail Report"
                  status={value === 'Detail Report' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 43 }]}>
                  Detail Report
                </Text>
              </View>
            </RadioButton.Group>
          </View>

          <View
            style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}>
            <Text style={styles.textColor}>Weights</Text>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <RadioButton.Group
              onValueChange={newValue => {
                setWeights(newValue);
                if (newValue === 'Show Percentage') {
                  props.setWeights(false);
                } else {
                  props.setWeights(true);
                }
              }}
              value={weights}>
              <View style={styles.containers}>
                <RadioButton
                  value="Show Percentage"
                  status={
                    weights === 'Show Percentage' ? 'checked' : 'unchecked'
                  }
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText,{right:19}]}>Show Percentage</Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="Show Marks"
                  status={weights === 'Show Marks' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right:50 }]}>Show Marks</Text>
              </View>
            </RadioButton.Group>
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

export default RightClick;
