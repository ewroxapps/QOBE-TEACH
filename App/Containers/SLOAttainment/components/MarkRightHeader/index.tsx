import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import BlueDownload from '../../../../Assets/SVGs/BlueDownload';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import styles from './styles';
const MarksRightHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
                top:-2,
                right: 10
              }}>
               <Verticaldots width={18} height={18}/>
            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>

          
          <MenuOption
            style={styles.menuOptionContainer}>
              <BlueDownload width={18} height={18}/>
            <Text style={styles.text} >Download PDF</Text>
          </MenuOption>
          <MenuOption
            style={styles.menuOptionContainer}>
                <BlueDownload width={18} height={18}/>
            <Text style={styles.text} >Download Excel</Text>
          </MenuOption>
        
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default MarksRightHeader;
