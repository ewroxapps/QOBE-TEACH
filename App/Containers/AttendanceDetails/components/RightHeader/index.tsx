import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import { Eye } from '../../../../Assets/SVGs';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import styles from './styles';
import { RightHeaderProps } from './types';
const RightHeader = (props:RightHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();
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
              setMenuOpen(false)
              navigation.navigate('ViewAttendace', {id:props.id,permission:props.permission});
            }}
          >
             <Eye/>
            <Text style={styles.textColor} >View Attendance</Text>
          </MenuOption>
        
        </MenuOptions>
      </Menu>

    </View>
  );
};

export default RightHeader;
