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
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { ClickProps } from './types';
const RightHeader = (props: ClickProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState('');
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
                <Verticaldots width={18} height={18}/>
            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <View style={{ paddingLeft: 10 }}>
            <RadioButton.Group
              onValueChange={newValue => {
                setValue(newValue);
                if (newValue === 'Pie Chart') {
                  props.setgraphType('Pie Chart');
                } else if (newValue === 'Bar Graph') {
                  props.setgraphType('Bar Graph');
                } 
              }}
              value={value}>
              <View style={styles.containers}>
                <RadioButton
                  value="Pie Chart"
                  status={value === 'Pie Chart' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 40 }]}>
                Pie Chart
                </Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="Bar Graph"
                  status={
                    value === 'Bar Graph' ? 'checked' : 'unchecked'
                  }
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 35 }]}>
                Bar Graph
                </Text>
              </View>
          
            </RadioButton.Group>
          </View>


          <View style={styles.line} />
          <MenuOption style={styles.menuOptionContainer}>
            <BlueDownload width={18} height={18}/>
            <Text style={styles.text}>Download PDF</Text>
          </MenuOption>

        </MenuOptions>
      </Menu>
    </View>
  );
};

export default RightHeader;
