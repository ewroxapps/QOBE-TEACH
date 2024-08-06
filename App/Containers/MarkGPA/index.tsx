import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Screen } from '../../Components';
import { ActivityDetail, Header, RightHeader, TopDetail } from './components';
import PageHeader from './components/PageHeader';
import styles from './styles';

const MarkGPA = (props: any) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [marks, setMarks] = useState(false);
  const [weights, setWeights] = useState(false);
  const [cqi, setCQI] = useState(false);
  const [download, setDownload] = useState(false);

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header from={'Marks (GPA)'}/>
    });
  };

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => (
        <RightHeader
          marks={marks}
          setMarks={setMarks}
          weights={weights}
          setWeights={setWeights}
          cqi={cqi}
          setCql={setCQI}
          download={download}
          setDownload={setDownload}
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
      <PageHeader />
      <View
        style={[
          styles.justifyView,
          { top: -40, paddingLeft: 10, paddingRight: 10 }
        ]}>
        <View style={styles.innerContainer}>
          <Text style={styles.txtColor}>Student</Text>
        </View>
        <View style={[styles.justifyView, { flex: 1 }]}>
        <View style={{alignItems:'center'}}>
            <Text style={styles.txtColor}>Online Quiz 1</Text>
            <Text style={styles.txtColor}>(50.00)</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={styles.txtColor}>Online Quiz 2</Text>
            <Text style={styles.txtColor}>(30.00)</Text>
          </View>
        </View>
      </View>
      <ActivityDetail/>
      <ActivityDetail/>
      <ActivityDetail/>
      <ActivityDetail/>
      <ActivityDetail/>
    </Screen>
  );
};

export default MarkGPA;
