import React from 'react';
import { Image, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { BASE_URL } from '../../../../../../Config/Api';
import { Images } from '../../../../../../Themes';
import styles from './styles';
const MarksDetails = (props: any) => {
  const { data, index, late, studentDetails, setStudentDetails } = props;
  const togglePresentStatus = () => {
    setStudentDetails((prevDetails: Studentss[]) => {
      const updatedDetails = prevDetails.map((student, idx) =>
        idx === index-1
          ? { ...student, present: !student.present }
          : student
      );
      return updatedDetails;
    });
  };

  const toggleLeaveStatus = () => {
    setStudentDetails((prevDetails: Studentss[]) => {
      const updatedDetails = prevDetails.map((student, idx) =>
        idx === index-1
          ? { ...student, lateLeave: !student.lateLeave }
          : student
      );
      return updatedDetails;
    });
  };



  return (
    <View>
      <View style={styles.container} key={props.index}>
        <View style={styles.leftContainer}>
          <Text style={styles.header}>{props.index}</Text>
          {data.dp ? (
            <Image
              source={{
                uri: `${BASE_URL}${data.dp}`
              }}
              defaultSource={Images.profilePlaceholder}
              style={styles.profile}
            />
          ) : (
            <Image source={Images.profilePlaceholder} style={styles.profile} />
          )}

          <View style={styles.topTextContainer}>
            <Text style={styles.classLabel}>{data.name}</Text>
            <Text style={styles.instructorName}>{data.reg_no}</Text>
          </View>
        </View>

        <View style={styles.totalView}>
          <View
            style={props.late === '1' ? styles.withlate : styles.withoutlate}>
            {studentDetails[index-1].present ? (
              <Text style={styles.PresentTxt}>Present</Text>
            ) : (
              <Text style={styles.absenttxt}>Absent</Text>
            )}

            <Switch
              value={studentDetails[index-1].present}
              trackColor={{ false: '#FEE2E2', true: '#D1FAE5' }}
              color={'#10B981'}
              onValueChange={() => {
                togglePresentStatus()
              }}
            />
          </View>
          {late === '1' ? (
            <View style={{ marginRight: 10, flexDirection: 'row' }}>
              <Switch
                value={studentDetails[index-1].lateLeave}
                trackColor={{ true: '#FEF3C7' }}
                color={'#F59E0B'}
                onValueChange={() => {
                  toggleLeaveStatus()
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default MarksDetails;
