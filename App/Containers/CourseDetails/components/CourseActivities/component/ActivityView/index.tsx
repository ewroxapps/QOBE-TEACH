import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Spinner } from '../../../../../../Components';
import { useClassActivityQuery } from '../../../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../../../Themes';
import styles from './styles';
import { ViewProps } from './types';
const ActivityView = (props: ViewProps) => {
  const [modal, setModal] = React.useState(false);
  const [requires, setRequired] = React.useState(false);
  const { refetch, isLoading, isFetching, isError, data } =
    useClassActivityQuery({
      id: props.activity.aid || 0
    });
  const navigation = useNavigation<ICoursesNavigationProp>();
  function extractPercentageValue(str: string) {
    const regex = /(\d+(\.\d+)?)%/;
    const matches = str.match(regex);

    if (matches && matches.length >= 2) {
      const percentageValue = parseFloat(matches[1]);
      return percentageValue;
    }
    return 0;
  }
  if (isLoading || isFetching) {
    return <Spinner />;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {props.activity.activity_type} {props.index}
      </Text>
      <View style={styles.spacebetweenView}>
        <Text style={[styles.texts, { flex: 1 }]}>
          Date: {props.activity.activity_date}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (!isLoading && !isFetching)
              navigation.navigate('SingeAct', { data: data });
          }}
          style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.viewOnline}>
            View {props.activity.activity_type}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: Colors.backgroundGrey,
          marginTop: 10,
          marginBottom: 10
        }}>
        <View style={styles.spacebetweenView}>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={styles.marks}>
              {props.activity.marks_added}/{props.activity.total_markes}
            </Text>
            <Text style={styles.normalHead}>Marks</Text>
          </View>
          <View
            style={{
              height: '50%',
              width: 2,
              backgroundColor: '#E2E8F0'
            }}
          />
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text
              style={
                props.activity.marks_added === true
                  ? styles.outcomeAdd
                  : styles.outcomeNotAdd
              }>
              {props.activity.marks_added === true ? 'Added' : 'Not Added'}
            </Text>
            <Text style={styles.normalHead}>Outcomes</Text>
          </View>
          <View
            style={{
              height: '50%',
              width: 2,
              backgroundColor: '#E2E8F0'
            }}
          />
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={styles.questionTxt}>
              {props.activity.question_count}
            </Text>
            <Text style={styles.normalHead}>Questions</Text>
          </View>
          <View
            style={{
              height: '50%',
              width: 2,
              backgroundColor: '#E2E8F0'
            }}
          />
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={styles.GpaTxt}>
              {extractPercentageValue(props.activity.gpa_weight)}
            </Text>
            <Text style={styles.normalHead}>GPA</Text>
          </View>
        </View>
      </View>

      {props.activity.is_quiz === '1' ? (
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#16A34A' }]}
          onPress={() => {
            navigation.navigate('ConductQuiz', {id:props.activity.aid});
          }}>
          <Text style={styles.whiteTxt}>Start Quiz</Text>
        </TouchableOpacity>
      ) : null}
     
    </View>
  );
};

export default ActivityView;
