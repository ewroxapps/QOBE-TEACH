import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Greentick from '../../../../Assets/SVGs/Greentick';
import RedCross from '../../../../Assets/SVGs/RedCross';
import { useClassActivityQuery } from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import ActionModal from '../ActionModal';
import styles from './styles';
import { ActivityDesignProps } from './type';
const ActivityDesign = (props: ActivityDesignProps) => {
  const [modal, setModal] = React.useState(false);
  const navigation = useNavigation<ICoursesNavigationProp>();
  const { refetch, isLoading, isFetching, isError, data } =
  useClassActivityQuery({
    id: props.data.aid || 0
  });
  function extractPercentageValue(str: string) {
    // Use a regular expression to find the percentage value in the input string
    const regex = /(\d+(\.\d+)?)%/;
    const matches = str.match(regex);

    // If there is a match, extract the percentage value and return it as a number
    if (matches && matches.length >= 2) {
      const percentageValue = parseFloat(matches[1]);
      return percentageValue;
    }

    // Return 0 if no match is found or the input is undefined
    return 0;
  }
 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.data.activity_type}</Text>
      <View style={styles.spacebetweenView}>
        <Text style={styles.texts}>{props.data.activity_date}</Text>
        <TouchableOpacity onPress={() => {
          if(!isLoading && !isFetching)
           navigation.navigate('SingeAct', { data:data });
        }}>
          <Text style={styles.viewOnline}>View {props.data.activity_type}</Text>
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
              {props.data.marks_added}/{props.data.total_markes}
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
            {props.data.marks_added ? (
              <Greentick style={{ top: 4 }} />
            ) : (
              <RedCross />
            )}

            <Text style={styles.norrmalHead}>Outcomes</Text>
          </View>
          <View
            style={{
              height: '50%',
              width: 2,
              backgroundColor: '#E2E8F0'
            }}
          />
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={styles.questionTxt}>{props.data.question_count}</Text>
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
            <Text style={styles.GpaTxt}>{extractPercentageValue(props.data.gpa_weight)}</Text>
            <Text style={styles.normalHead}>GPA</Text>
          </View>
        </View>
      </View>

      {props.data.is_quiz === '1' ? (
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#16A34A' }]}
          onPress={() => {
            navigation.navigate('ConductQuiz', {});
          }}>
          <Text style={styles.whiteTxt}>Start Quiz</Text>
        </TouchableOpacity>
      ) : null}
      {modal ? (
        <ActionModal modalVisible={modal} setModalVisible={setModal} />
      ) : null}
    </View>
  );
};

export default ActivityDesign;
