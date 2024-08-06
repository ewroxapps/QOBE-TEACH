import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { StudentCourseRecordProps } from './types';

const StudentCourseRecord = (props: StudentCourseRecordProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.recordContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>{props.student ?? 'N/A'} </Text>
          <Text style={styles.itemLabel}>Students</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>
            {props.activity ?? 'N/A'}
          </Text>
          <Text style={styles.itemLabel}>Activities</Text>

        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.itemValue}>{props.classes ?? 'N/A'} </Text>
          <Text style={styles.itemLabel}>Classes</Text>
        </View>



      </View>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        hitSlop={styles.hitSlop}
        onPress={() => {
          props.setClicked(!props.clicked)
          props.setModalVisible(true)
        }}>
        <Text style={styles.viewDetailsText}>View Course Details</Text>
      </TouchableOpacity>


      
    </View>
  );
};

export default StudentCourseRecord;
