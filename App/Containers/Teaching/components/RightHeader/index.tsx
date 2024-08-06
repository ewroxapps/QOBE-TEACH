import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import Export from '../../../../Assets/SVGs/Export';
import Import from '../../../../Assets/SVGs/Import';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import ImportsModal from '../Import';
import styles from './styles';
const RightHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [Imp, setImport] = useState(false);

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
              setImport(true)
              setMenuOpen(false)
            
            }}
          >
             <Import width={18} height={18}/>
            <Text style={styles.textColor} >Import</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {              
              setMenuOpen(false)
           
            }}
          >
             <Export width={18} height={18}/>
            <Text style={styles.textColor} >Export</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

     {Imp ?(
      <ImportsModal
        modalVisible={Imp}
        setModalVisible={setImport}
      />

     ):(null)

     }

    </View>
  );
};

export default RightHeader;
