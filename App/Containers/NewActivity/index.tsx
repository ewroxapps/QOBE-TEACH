import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Colors } from '../../Themes';
import { ActivityDesign, CustomTab, Header, RightHeader } from './component';
import styles from './styles';
const Tab = createMaterialTopTabNavigator();
const NewActivity = (props: any) => {
  const { params } = useRoute<any>();
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  const groupActivitiesByType = (activities: Activity[]) => {
    const groupedActivities: { [key: string]: Activity[] } = {};
    const activityCount: { [key: string]: number } = {}; // Keep track of count for each activity type

    activities.forEach(activity => {
      const activityType = activity.activity_type;
      if (!groupedActivities[activityType]) {
        groupedActivities[activityType] = [];
        activityCount[activityType] = 0; // Initialize count to 0 for each activity type
      }
      groupedActivities[activityType].push(activity);
      activityCount[activityType]++; // Increment count for each activity type
    });

    return { groupedActivities, activityCount };
  };
  const { groupedActivities, activityCount } = groupActivitiesByType(
    params?.data.activities || []
  );

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  });
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize'
        },
        tabBarStyle: {
          backgroundColor: Colors.backgroundGrey,
          elevation: 0
        },
        tabBarPressColor: Colors.transparent,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.iconGrey,
        tabBarScrollEnabled: true
      }}
      initialRouteName={props.route.params.data.activityType}>
      {Object.entries(groupedActivities).map(([activityType, activities]) => {
        // Get the count for each activity type
        const count = activityCount[activityType] || 0;

        return (
          <Tab.Screen
            key={activityType}
            name={activityType}
            component={() => (
              // Render the component dynamically based on the activity type
              <ScrollView style={{backgroundColor:Colors.backgroundGrey,flex:1}}>
                {/* Render the activities for this type */}
                {activities.map(activity => (
                  <View style={styles.container}>
                    <ActivityDesign from={'No Quiz'} data={activity}/>
                  </View>
                ))}
              </ScrollView>
            )}
            initialParams={{ activities: groupedActivities[activityType] }}
            options={{
              tabBarLabel: ({ focused }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      marginRight: 8,
                      color: focused ? '#475569' : '#94A3B8'
                    }}>
                    {activityType}
                  </Text>
                  <CustomTab focused={focused} count={count} />
                  {/* Pass the count of the specific activity type to the CustomTab */}
                </View>
              )
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default NewActivity;
