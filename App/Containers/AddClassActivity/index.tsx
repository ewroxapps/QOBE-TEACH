import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, } from 'react-native';
import { Colors } from '../../Themes';
import { RightHeader } from '../NewActivity/component';
import { ActivityDetails, Header, Questions } from './components';
const AddClassActivity = () => {
 
  const Tab = createMaterialTopTabNavigator<AddClassActivityList>();
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () =>
      <Header/>
    });
  };


  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader/>

    });
  };


  useEffect(() => {
    changeHeaderTitle()
    changeRight()

  },);
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        textTransform: 'capitalize',

      },
      tabBarStyle: {
        backgroundColor: Colors.background,
        elevation: 0,

      },
      tabBarPressColor: Colors.transparent,
      tabBarActiveTintColor: Colors.secondary,
      tabBarInactiveTintColor: Colors.iconGrey,


    }}

  >
    <Tab.Screen
      name="Activity Details"
      component={ActivityDetails}
      initialParams={params}
      options={{

        tabBarLabel: ({ focused }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 8, color: focused ? '#475569' : '#94A3B8' }}>
               Activity Details
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Sub Activities/Questions"
      component={Questions}
      options={{
        tabBarLabel: ({ focused }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 8, color: focused ? '#475569' : '#94A3B8', textAlign: 'center' }}>
             Sub Activities/Questions
            </Text>
          </View>
        ),

      }}
      initialParams={params}
    />


   
 

 
  </Tab.Navigator>

  );
};

export default AddClassActivity;
 