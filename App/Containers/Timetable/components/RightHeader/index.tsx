import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import styles from './styles';
import { RightProps } from './types';
const RightHeader = (props:RightProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // @ts-ignore 
    <View >
      <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
        <MenuTrigger
          onPress={() => setMenuOpen(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity
            style={[styles.unclickedConfig]}
            onPress={() => {
              setMenuOpen(!menuOpen)

            }}>
            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
              <Verticaldots />

            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {
              props.setWeek(false)
              props.setType('W')
              setMenuOpen(false)
            }}
          >
            <Text style={styles.textColor} >Week View</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {
             props.setWeek(true)
             props.setType('M')
             setMenuOpen(false)
            }}
          >
            <Text style={styles.textColor} >Month View</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

    </View>
  );
};

export default RightHeader;
