import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ArrowBack from '../../Assets/SVGs/ArrowBack';
import ArrowForward from '../../Assets/SVGs/ArrowForward';
import Blue from '../../Assets/SVGs/Blue';
import { Screen } from '../../Components';
import { Colors } from '../../Themes';
import { Header } from '../MarkGPA/components';
import { GradeDetail, Graph } from './components';
import styles from './styles';

const GPAAttainmentGraph = () => {
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header from={'GPA Attainment Graph'} />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  });


  return (
  
      <Screen>
        <View style={styles.topContainer} />
        <View
          style={{
            backgroundColor: Colors.backgroundWhite,
            borderRadius: 10,
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 5,
            elevation: 5,
            height: '50%',
            top: -80
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <Text style={styles.textCLO}>CLO Graph</Text>
              <View style={styles.innerView}>
                <TouchableOpacity
                  onPress={() => {
                    // backPress();
                  }}>
                  <ArrowBack />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    //  nextPress();
                  }}>
                  <ArrowForward
                    style={{
                      marginLeft: 20,
                      marginRight: 10
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 10
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 50
                }}>
                <Blue style={{ marginTop: 4 }} width={10} />
                <Text style={styles.texts}>My Score</Text>
              </View>
            </View>
          </View>

          <Graph />
        </View>

        <View style={styles.markItTop}>
          <View style={styles.topHeading}>
            <View style={styles.txtView}>
              <Text style={styles.whitTxt}>Grade</Text>
            </View>
            <View style={styles.txtView}>
              <Text style={styles.whitTxt}>Count</Text>
            </View>
          </View>
        </View>
        <GradeDetail/>
      </Screen>

  );
};

export default GPAAttainmentGraph;
