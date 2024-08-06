import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler, Image, Text, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from 'react-native-popup-menu';
import { Logout, Profile } from '../../Assets/SVGs';
import { BASE_URL } from '../../Config/Api';
import { useAppSelector } from '../../Hooks';
import { useLogoutMutation } from '../../RTK/Api/AuthApi';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Images } from '../../Themes';
import styles from './styles';
import { HeaderRightProps } from './types';
const HeaderRight = (props:HeaderRightProps) => {
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
            {userInfo?.dp ? (
              <Image
                source={{ uri: `${BASE_URL}${userInfo?.dp}` }}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <MenuOption
            style={styles.menuOptionContainer}
            onSelect={() => {
              navigation.navigate('Profile',{from:'Home'})
              props.setRefresh(false)
              setMenuOpen(false)
            }}>
              <Profile width={20} height={20}/>
            <Text style={[styles.text]}>Profile</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer} onSelect={logout}>
            <Logout width={20} height={20} />
            <Text style={[styles.text, styles.logoutText]}>{t('signOut')}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default HeaderRight;
