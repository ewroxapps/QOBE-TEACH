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
import Assistants from '../../../../Assets/SVGs/Assistants';
import BlackVideo from '../../../../Assets/SVGs/BlackVideo';
import BlueConfig from '../../../../Assets/SVGs/BlueConfig';
import Config from '../../../../Assets/SVGs/Config';
import Plan from '../../../../Assets/SVGs/Plan';
import Student from '../../../../Assets/SVGs/Student';
import {
  CLASS_ACTIVITY_STUDENT,
  CLASS_ASSISTANT,
  CLASS_PLAN,
  VIEW
} from '../../../../Types/Constants';
import styles from './styles';
import { RightProps } from './types';
const RightClickHeader = (props: RightProps) => {
  const navigation = useNavigation<ICoursesNavigationProp>();
  const [menuOpen, setMenuOpen] = useState(false);
  const plan = props.permission?.some(
    (permission: any) =>
      permission.option_type === CLASS_PLAN && permission.action === VIEW
  );

  const student = props.permission?.some(
    (permission: any) =>
      permission.option_type === CLASS_ACTIVITY_STUDENT &&
      permission.action === VIEW
  );

  const assistant = props.permission?.some(
    (permission: any) =>
      permission.option_type === CLASS_ASSISTANT && permission.action === VIEW
  );

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
            style={[styles.unclickedConfig, menuOpen && styles.clickedConfig]}
            onPress={() => {
              setMenuOpen(!menuOpen);
            }}>
            <View
              style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
              <Text
                style={[styles.unclickedtext, menuOpen && styles.clickedtext]}>
                Config
              </Text>
              {menuOpen ? <BlueConfig width={15} /> : <Config width={15} />}
            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          {student ? (
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => {
                navigation.navigate('ClassStudent', { id: props.id });
                setMenuOpen(false);
              }}>
              <Student />
              <Text style={styles.textColor}>Class Student</Text>
            </MenuOption>
          ) : null}
          {assistant ? (
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => {
                navigation.navigate('ClassAssistants', { id: props.id });
                setMenuOpen(false);
              }}>
              <Assistants />
              <Text style={styles.textColor}>Class Assistants</Text>
            </MenuOption>
          ) : null}

          {plan ? (
            <Text style={{ color: '#94A3B8', marginTop: 9, marginBottom: 12 }}>
              Resources
            </Text>
          ) : null}
          {plan ? (
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => {
                navigation.navigate('Teaching', { id: props.id });
                setMenuOpen(false);
              }}>
              <Plan />
              <Text style={styles.textColor}>Teaching Plan</Text>
            </MenuOption>
          ) : null}
          {plan ? (
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => {
                navigation.navigate('VideoMaterial', { id: props.id });
                setMenuOpen(false);
              }}>
              <BlackVideo />
              <Text style={styles.textColor}>Video Material</Text>
            </MenuOption>
          ) : null}
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default RightClickHeader;
