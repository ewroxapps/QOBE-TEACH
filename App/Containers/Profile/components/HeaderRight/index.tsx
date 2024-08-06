import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import { PasswordInput } from '../../../../Assets/SVGs';
import EditBlack from '../../../../Assets/SVGs/EditBlack';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import { useAppSelector } from '../../../../Hooks';
import { useLogoutMutation } from '../../../../RTK/Api/AuthApi';
import { userInfoSelector } from '../../../../Selectors/UserSelector';
import styles from './styles';
import { RightHeaderProps } from './types';
const HeaderRight = (props:RightHeaderProps) => {
  const userInfo = useAppSelector(userInfoSelector);
  const navigation = useNavigation<IHomeNavigationProp>();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation('home');
  const [logout] = useLogoutMutation();

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
              setMenuOpen(false)
              props.setEdit(!props.edit)
            }}>
            <EditBlack width={16} height={20} />
            <Text style={[styles.text]}>{!props.edit?'Edit Profile':'View Profile'}</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer} onSelect={() => {
            setMenuOpen(false)
            navigation.navigate('ChangePasswordPage')
          }}>
            <PasswordInput width={17} height={20} />
            <Text style={[styles.text]}>Change Password</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default HeaderRight;
