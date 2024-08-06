import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  Text,
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
import { SearchBoxBatchProps } from './types';
const SearchBoxBatch = (props: SearchBoxBatchProps) => {
  const { t } = useTranslation('myCourses');

  const [searchString, setSearchString] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const dropdownRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const moveForward = () => {
    if (currentIndex < props.batchData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      props.setID(props.batchData[currentIndex + 1].batch_id);
    } else {
      setCurrentIndex(0);
      props.setID(props.batchData[0].batch_id);
    }
    props.setClick(true);
  };

  const moveBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      props.setID(props.batchData[currentIndex - 1].batch_id);
    } else {
      setCurrentIndex(props.batchData.length - 1);

      props.setID(props.batchData[props.batchData.length - 1].batch_id);
    }
    props.setClick(true);
  };

  const handleOptionSelect = (option: any, index: number) => {
    setCurrentIndex(index);
    props.setID(option.batch_id);
    setDropdownVisible(false);

    props.setClick(true);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const overlayStyle = { ...styles.overlay, top: 130 };

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
        <Text style={[styles.boxStyles]}>Search Batch Name</Text>
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
                      <View style={{ flex:1 }}>
                        <Text style={styles.heading}>#</Text>
                      </View>
                      <View style={{ flex: 1,left:2 }}>
                        <Text style={styles.heading}>Name</Text>
                      </View>
                     
                    </View>
                    <ScrollView
                      style={{
                        backgroundColor: Colors.backgroundWhite,
                        paddingBottom: 10
                      }}>
                      {props.batchData.map((option, index) => (
                        <TouchableOpacity
                          key={option.name}
                          onPress={() => handleOptionSelect(option, index)}>
                          <View style={styles.justifyVieW}>
                            <View style={{ flex:1 }}>
                              <Text style={styles.list}>{index + 1}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                              <Text style={styles.list}>{option.name}</Text>
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
        {props.id != -1  ? (
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
              <Text style={styles.nameTxt}>{props.batchData[currentIndex].name}</Text>
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
              setCurrentIndex(0);
              props.setID(-1);
            }}>
            <Text style={styles.clearResults}>{t('clearFilter')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Surface>
  );
};

export default SearchBoxBatch;
