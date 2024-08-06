import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { Attachment } from '../../../../../../Assets/SVGs';
import EditBlack from '../../../../../../Assets/SVGs/EditBlack';
import Link from '../../../../../../Assets/SVGs/Link';
import Verticaldots from '../../../../../../Assets/SVGs/Verticaldots';
import styles from './styles';

const RightHeader = () => {
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
              setMenuOpen(false)
            
            }}
          >
             <EditBlack width={17} height={17}/>
            <Text style={styles.textColor} >Edit</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {              
              setMenuOpen(false)
           
            }}
          >
             <Attachment width={17} height={17}/>
            <Text style={styles.textColor} >Add Attachment</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {              
              setMenuOpen(false)
           
            }}
          >
              <Link width={17} height={17}/>
            <Text style={styles.textColor} >Add External Link</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>


    </View>
  );
};

export default RightHeader;
