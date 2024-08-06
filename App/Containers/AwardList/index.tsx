import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Screen } from '../../Components';
import { Header, TopDetail } from '../MarkGPA/components';
import { AwardDetail, GradingSystemDetail, PageHeader, RightHeader } from './components';
import styles from './styles';

const AwardList = (props: any) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [list, setList] = useState('Award List');
  const [weights, setWeights] = useState(false);
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header from={'Award List'} />
    });
  };
  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => (
        <RightHeader
          lists={list}
          setLists={setList}
          percentage={weights}
          setPercentage={setWeights}
        />
      )
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    changeRight();
  });
  return (
    <Screen>
      <View style={styles.topContainer} />
      <TopDetail />
      <PageHeader lists={list}/>
      {list === 'Award List' ? (
        <View style={styles.justifyPage}>
          <View style={{ flex: 1 }}>
            <AwardDetail />
            <AwardDetail />
            <AwardDetail />
          </View>
          <View style={{ paddingLeft: 20, justifyContent: 'flex-end' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.labelText}>Name of Examiner: </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.titleTextInput}
                  value={name}
                  onChangeText={value => setName(value)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: -20
              }}>
              <Text style={styles.labelText}>Examiner's Signature: </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.titleTextInput}
                  value={name}
                  onChangeText={value => setName(value)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: -40
              }}>
              <Text style={styles.labelText}>Examiner's Signature: </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.titleTextInput}
                  value={name}
                  onChangeText={value => setName(value)}
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <GradingSystemDetail/>
          <GradingSystemDetail/>
        </View>
      )}
    </Screen>
  );
};

export default AwardList;
