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
import { Trash } from '../../../../Assets/SVGs';
import Export from '../../../../Assets/SVGs/Export';
import Import from '../../../../Assets/SVGs/Import';
import Verticaldots from '../../../../Assets/SVGs/Verticaldots';
import { EnrollModal } from './components';
import CopyModal from './components/CopyModal';
import styles from './styles';
const RightHeader = () => {
  const navigation = useNavigation<ICoursesNavigationProp>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
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
          <Text style={styles.textColor} >Select</Text>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {
              setUpdate(!update)
              setMenuOpen(false)
            }}
          >
            <Text style={styles.textColor} >Update "Use in OBE"</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}
            onSelect={() => {
              setModal(!modal)
              setMenuOpen(false)
            }}
          >
            <Text style={styles.textColor}>Enroll Existing</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}
              onSelect={() => {
                 setCopy(!copy)
                setMenuOpen(false)
              }}
           >
            <Text style={styles.textColor} >Copy from Program Batch</Text>
          </MenuOption>
          <MenuOption style={styles.menuOptionContainer}>
            <Import width={18} />
            <Text style={styles.importExport} >Import</Text>
          </MenuOption>

          <MenuOption style={styles.menuOptionContainer}>
            <Export width={18} />
            <Text style={styles.importExport}>Export</Text>
          </MenuOption>
          <View style={styles.line}></View>
          <MenuOption style={styles.menuOptionContainer}>
            <Trash />
            <Text style={styles.deleteAll}>Delete All</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

      {modal ? (
        <EnrollModal
          modalVisible={modal}
          setModalVisible={setModal}
          from={"Enroll"}
        />
      ) : null

      }

      {update ? (
        <EnrollModal
          modalVisible={update}
          setModalVisible={setUpdate}
          from={"Update"}
        />
      ) : null

      }
      {copy  ?(
        <CopyModal
        modalVisible={copy}
        setModalVisible={setCopy}
         />
      ):null

      }
    </View>
  );
};

export default RightHeader;
