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
import { AddAssistantModal } from './component';
import styles from './styles';
const RightHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = React.useState(false);
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
              setModal(!modal)
              setMenuOpen(false)
            }}
          >
            <Text style={styles.textColor} >Add Class Assistant</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

      {modal ?(

        <AddAssistantModal
          modalVisible={modal}
          setModalVisible={setModal}
         />
      ):null

      }

    </View>
  );
};

export default RightHeader;
