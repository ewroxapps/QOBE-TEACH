import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { Search } from '../../../../Assets/SVGs';
import styles from './styles';
import { SearchBoxProps } from './types';

const SearchBox = (props: SearchBoxProps) => {
  const { t } = useTranslation('myCourses');
  const [searchString, setSearchString] = useState('');
  const { searchCourses, numberOfCourses = 0 } = props;

  return (
    <Surface  style={styles.container}>
      <View style={styles.topRow}>
        <Search />
        <Text style={styles.searchText}>{t('search')}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={searchString}
          style={[styles.boxStyles, styles.inputField, styles.textInput]}
          onChangeText={value => {
            setSearchString(value);
            searchCourses(value);
          }}
        />
        <View style={styles.bottomRow}>
          <Text>
            {t('totalResults')}: {numberOfCourses}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSearchString('');
              searchCourses('');
            }}>
            <Text style={styles.clearResults}>{t('clearFilter')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Surface>
  );
};

export default SearchBox;
