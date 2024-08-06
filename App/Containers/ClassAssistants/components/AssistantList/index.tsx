import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { Trash } from '../../../../Assets/SVGs';
import BlackPermission from '../../../../Assets/SVGs/BlackPermission';
import BluePermission from '../../../../Assets/SVGs/BluePermission';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import { PermissionModal } from './components';
import styles from './styles';
import { AssistantProps } from './types';
const AssistantList = (props: AssistantProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [required, setRequired] = useState(false);
  function isEven(num: number) {
    if (num % 2 === 0) return true;
    else return false;
  }
  return (
    <View style={styles.Container}>
      <View style={styles.topContainer}>
        <View style={styles.textView}>
          <Text style={styles.textWhite}>{props.name}</Text>
        </View>
        {required ? (
          <View>
            {isEven(props.index) ? (
              <View style={styles.textView}>
                <TouchableOpacity
                  onPress={() => {
                    setClick(!click);
                  }}>
                  <BluePermission style={{ paddingRight: 120 }} />
                </TouchableOpacity>
                <Menu
                  opened={menuOpen}
                  onBackdropPress={() => setMenuOpen(false)}>
                  <MenuTrigger
                    onPress={() => setMenuOpen(true)}
                    customStyles={{
                      TriggerTouchableComponent: TouchableOpacity
                    }}>
                    <TouchableOpacity
                      style={[styles.unclickedConfig]}
                      onPress={() => {
                        setMenuOpen(!menuOpen);
                      }}>
                      <Verticaldots
                        width={18}
                        height={18}
                        style={{ marginTop: -5 }}
                      />
                    </TouchableOpacity>
                  </MenuTrigger>
                  <MenuOptions
                    optionsContainerStyle={styles.menuOptionsContainer}>
                    <MenuOption style={styles.menuOptionContainer}>
                      <Trash width={18} />
                      <Text style={styles.deleteAll}>Remove</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            ) : (
              <View style={styles.textView}>
                <TouchableOpacity
                  onPress={() => {
                    setClick(!click);
                  }}>
                  <BlackPermission style={{ paddingRight: 120 }} />
                </TouchableOpacity>
                <Menu
                  opened={menuOpen}
                  onBackdropPress={() => setMenuOpen(false)}>
                  <MenuTrigger
                    onPress={() => setMenuOpen(true)}
                    customStyles={{
                      TriggerTouchableComponent: TouchableOpacity
                    }}>
                    <TouchableOpacity
                      style={[styles.unclickedConfig]}
                      onPress={() => {
                        setMenuOpen(!menuOpen);
                      }}>
                      <Verticaldots
                        width={18}
                        height={18}
                        style={{ marginTop: -5 }}
                      />
                    </TouchableOpacity>
                  </MenuTrigger>
                  <MenuOptions
                    optionsContainerStyle={styles.menuOptionsContainer}>
                    <MenuOption style={styles.menuOptionContainer}>
                      <Trash width={18} />
                      <Text style={styles.deleteAll}>Remove</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            )}
          </View>
        ) : null}
      </View>

      {click ? (
        <PermissionModal modalVisible={click} setModalVisible={setClick} />
      ) : null}
    </View>
  );
};

export default AssistantList;
