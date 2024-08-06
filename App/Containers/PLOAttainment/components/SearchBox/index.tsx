import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  UIManager,
  View,
  findNodeHandle
} from 'react-native';
import Modal from 'react-native-modal';
import { Surface } from 'react-native-paper';
import { CloseCircle, Search } from '../../../../Assets/SVGs';
import Backwards from '../../../../Assets/SVGs/Backwards';
import Forwards from '../../../../Assets/SVGs/Forwards';
import WhiteDropDown from '../../../../Assets/SVGs/WhiteDropDown';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { SearchBoxProps } from './types';
const SearchBox = (props: SearchBoxProps) => {
  const { t } = useTranslation('myCourses');

    
  const students = props.data.scores
  .filter((batch) => batch.batch_id === props.id)
  .flatMap((batch) => batch.scores);

  const [searchString, setSearchString] = useState('');



  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const moveForward = () => {
    if(props.currentIndex){
      if (props.currentIndex < students.length - 1) {
        props.setCurrentIndex(props.currentIndex + 1);
        props.setString(students[props.currentIndex + 1].reg_no);
        props.setName(students[props.currentIndex + 1].name);
      } else {
        props.setCurrentIndex(0);
        props.setString(students[0].reg_no);
        props.setName(students[0].name);
      }
      props.setClick(true)
    }

  
    
  };

  const moveBackward = () => {
    if(props.currentIndex){
    if (props.currentIndex > 0) {
      props.setCurrentIndex(props.currentIndex - 1);
    
      props.setString(students[props.currentIndex - 1].reg_no);
      props.setName(students[props.currentIndex - 1].name);
    } else {
      props.setCurrentIndex(students.length - 1);
    
      props.setString(
        students[students.length - 1].reg_no
      );
      props.setName(
        students[students.length - 1].name
      );
    }

    props.setClick(true)
  }
  };

  const handleOptionSelect = (option: any, index: number) => {
    if(props.id === -1){
      ToastAndroid.show('Please select a batch name first',ToastAndroid.SHORT)
    }else{
      props.setCurrentIndex(index);
    props.setString(option.reg_no);
    props.setName(option.name);
    setDropdownVisible(false);
    props.setClick(true)
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const overlayStyle = { ...styles.overlay, top: 265 };

  const measureDropdown = () => {
    if (dropdownRef.current) {
      const handle = findNodeHandle(dropdownRef.current) as number | null;
      if (handle) {
        UIManager.measure(handle, (x, y, width, height) => {});
      }
    }
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.topRow}>
        <Search />
        <Text style={styles.searchText}>{t('search')}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.boxStyles]}>
          Search Name
        </Text>
        {searchString.length === 0 ? (
          <View>
            <TouchableOpacity
              onPress={toggleDropdown}
              style={styles.dropDownStyle}>
              <WhiteDropDown />
            </TouchableOpacity>

            <Modal
              isVisible={dropdownVisible}
              backdropOpacity={0}
              onShow={measureDropdown}>
              <TouchableWithoutFeedback onPress={toggleDropdown}>
                <View style={overlayStyle}>
                  <View ref={dropdownRef} style={styles.dropDown}>
                    <TouchableOpacity
                      style={styles.closeCircle}
                      onPress={() => {
                        setDropdownVisible(false);
                      }}>
                      <CloseCircle width={15} height={15} />
                    </TouchableOpacity>
                    <View style={styles.justifyVieWs}>
                      <View style={{ width: '10%' }}>
                        <Text style={styles.heading}>#</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.heading}>Name</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.heading}>Registeration Number</Text>
                      </View>
                    </View>
                    <ScrollView
                      style={{
                        backgroundColor: Colors.backgroundWhite,
                        paddingBottom: 10
                      }}>
                      {students.map((option, index) => (
                        <TouchableOpacity
                          key={option.name}
                          onPress={() => handleOptionSelect(option, index)}>
                          <View style={styles.justifyVieW}>
                            <View style={{ width: '10%' }}>
                              <Text style={styles.list}>{index + 1}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.list}>{option.name}</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                              <Text style={styles.list}>
                                {option.reg_no}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        ) : null}
        {props.name != undefined && props.name.length > 0 ? (
          <View
            style={
              searchString.length === 0 ? styles.justify : styles.justify2
            }>
            <TouchableOpacity
              onPress={() => {
                moveBackward();
              }}>
              <Backwards />
            </TouchableOpacity>
            <View style={styles.center}>
              <Text style={styles.nameTxt}>{props.name}</Text>
              <Text style={styles.regTxt}>{props.string}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                moveForward();
              }}>
              <Forwards />
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.bottomRow}>
          <TouchableOpacity
            style={styles.clearFilterView}
            onPress={() => {
              setSearchString('');
              props.setCurrentIndex(0);
              props.setName('');
              props.setString('');
            }}>
            <Text style={styles.clearResults}>{t('clearFilter')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Surface>
  );
};

export default SearchBox;
