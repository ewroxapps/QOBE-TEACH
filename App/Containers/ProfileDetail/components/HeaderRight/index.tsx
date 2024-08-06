import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import EditBlack from '../../../../Assets/SVGs/EditBlack';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import styles from './styles';
import { RightHeaderProps } from './types';
const HeaderRight = (props: RightHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation('home');

  useEffect(() => {
    const backAction = () => {
      if (menuOpen) {
        setMenuOpen(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.headerRight}>
      <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
        <MenuTrigger
          onPress={() => setMenuOpen(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity onPress={() => setMenuOpen(true)}>
            <Verticaldots />
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <MenuOption
            style={styles.menuOptionContainer}
            onSelect={() => {
              setMenuOpen(false);
              props.setEdit(true);
            }}>
            <EditBlack width={16} height={20} />

            <Text style={[styles.text]}>{'Edit'}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default HeaderRight;
