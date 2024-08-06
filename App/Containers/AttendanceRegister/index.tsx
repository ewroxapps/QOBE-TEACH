import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { GenericMessage, Spinner } from '../../Components';
import { useClassAttendanceListQuery } from '../../RTK/Api/CourseApi';
import { Colors } from '../../Themes';
import { Header } from '../AttendanceDetails/components';
import { AttendanceDetails, MarkAttendance } from './components';
export const SharedStateContext = createContext<SharedState>({} as SharedState);

const AttendanceRegister = (props: any) => {
  const [startDate, setStartDate] = useState('');
  const [startDate1, setStartDate1] = useState('');
  const [lecture, setLecture] = useState('');
  const [duration, setDuration] = useState('');
  const [topic, setTopic] = useState('');
  const [assessment, setAssessment] = useState('');
  const [room, setRoom] = useState('');
  const myID = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
    useClassAttendanceListQuery({
      id: myID
    });
  const Tab = createMaterialTopTabNavigator<AttendanceRegisterList>();
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };


  useEffect(() => {
    changeHeaderTitle();
  });

  if (isFetching || isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  return (
    <SharedStateContext.Provider
    value={{
      startDate,
      setStartDate,
      startDate1,
      setStartDate1,
      lecture,
      setLecture,
      duration,
      setDuration,
      topic,
      setTopic,
      assessment,
      setAssessment,
      room,
      setRoom,
      data:data,
      myID:myID
    }}
  >
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize'
        },
        tabBarStyle: {
          backgroundColor: Colors.background, 
          elevation: 0
        },
        tabBarPressColor: Colors.transparent,
        tabBarActiveTintColor: Colors.quizBlue,
        tabBarInactiveTintColor: Colors.iconGrey
      }}>
     <Tab.Screen
          name="AttendanceDetails"
          component={AttendanceDetails}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    marginRight: 8,
                    color: focused ? '#475569' : '#94A3B8'
                  }}
                >
                  Attendance Details
                </Text>
              </View>
            )
          }}
        />

      <Tab.Screen
        name="MarkAttendance"
        component={MarkAttendance}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  marginRight: 8,
                  color: focused ? '#475569' : '#94A3B8'
                }}>
                Mark Attendance
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
    </SharedStateContext.Provider>
  );
};

export default AttendanceRegister;
