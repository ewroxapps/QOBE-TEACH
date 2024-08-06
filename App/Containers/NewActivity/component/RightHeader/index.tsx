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
import ImportModal from '../ImportModal';
import styles from './styles';

const RightHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
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
            style={styles.unclickedConfig}
            onPress={() => {
              setMenuOpen(!menuOpen)

            }}>
            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
              <Verticaldots width={20} />
            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Import width={20} />
            <Text style={styles.textColor} >Activity Outcome</Text>
          </View>
          <MenuOption
            style={styles.menuOptionContainer}>
            <Text style={styles.text} >Import</Text>
          </MenuOption>
          <MenuOption
            style={styles.menuOptionContainer}
            onSelect={() => setModal(true) }
          >
            <Text style={styles.text} >Import (Advance)</Text>
          </MenuOption>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Export width={20} />
            <Text style={styles.textColor} >Export</Text>
          </View>
          <MenuOption
            style={styles.menuOptionContainer}>
            <Text style={styles.text} >Export</Text>
          </MenuOption>
          <MenuOption
            style={styles.menuOptionContainer}>
            <Text style={styles.text} >Export PDF</Text>
          </MenuOption>
          <MenuOption
            style={styles.menuOptionContainer}>
            <Text style={styles.text} >Activity Outcome</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
      {modal ? (
        <ImportModal
          modalVisible={modal}
          setModalVisible={setModal}
        />
      ) : null
      }
    </View>
  );
};

export default RightHeader;
