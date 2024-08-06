import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ActivityView, Type } from './component';
import styles from './styles';
import { activityProps } from './types';

const CourseActivities = (props: activityProps) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}>
        <Type show={show} activity={props.activity} />
      </TouchableOpacity>

      {show && (
        <FlatList
          data={props.activities.filter(
            activity => activity.activity_type === props.activity
          )}
          keyExtractor={item => item.aid.toString()}
          renderItem={({ item,index }) => <ActivityView activity={item} index={index+1}/>}
        />
      )}
    </View>
  );
};

export default CourseActivities;
