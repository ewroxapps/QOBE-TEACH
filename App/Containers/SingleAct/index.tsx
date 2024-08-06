import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { NoResults } from '../../Components';
import { Colors } from '../../Themes';
import styles from './styles';
const SingleAct = (props: any) => {
  var myData: SingleActivity = props.route.params.data;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.centerView}>
          <View style={styles.flexRow}>
            <Text style={styles.heading}>Name: </Text>
            <Text style={styles.discription}>{myData.name}</Text>
          </View>
        </View>
        <View style={styles.justifyView}>
          <View style={styles.flexRow}>
            <Text
              style={[
                styles.discription,
                { fontSize: 12, color: Colors.quizBlue }
              ]}>
              From:{' '}
            </Text>
            <Text
              style={[
                styles.discription,
                { color: Colors.quizBlue, fontSize: 12, fontWeight: '600' }
              ]}>
              {myData.upload_from_date}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text
              style={[
                styles.discription,
                { fontSize: 12, color: Colors.quizBlue }
              ]}>
              To:{' '}
            </Text>
            <Text
              style={[
                styles.discription,
                { color: Colors.quizBlue, fontSize: 12, fontWeight: '600' }
              ]}>
              {myData.upload_to_date}
            </Text>
          </View>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Question Count: </Text>
          <Text style={[styles.discription,{flex:1}]}>{myData.question_count}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Total Marks: </Text>
          <Text style={[styles.discription,{flex:1,}]}>{myData.total_markes}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Marks added on: </Text>
          <Text style={[styles.discription,{flex:1}]}>{myData.marks_added_on}</Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Allow upload: </Text>
          <Text
            style={[
              myData.allow_student_upload === '0' ? styles.noTxt : styles.yesTxT
            ]}>
            {myData.allow_student_upload === '0' ? 'No' : 'Yes'}
          </Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Include in GPA: </Text>
          <Text
            style={[
              myData.include_in_gpa === '0' ? styles.noTxt : styles.yesTxT
            ]}>
            {myData.include_in_gpa === '0' ? 'No' : 'Yes'}
          </Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Is complex: </Text>
          <Text
            style={[myData.is_complex === '0' ? styles.noTxt : styles.yesTxT]}>
            {myData.is_complex === '0' ? 'No' : 'Yes'}
          </Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Show activity: </Text>
          <Text
            style={[
              myData.show_activity_to_student === '0'
                ? styles.noTxt
                : styles.yesTxT
            ]}>
            {myData.show_activity_to_student === '0' ? 'No' : 'Yes'}
          </Text>
        </View>

        <View style={styles.flexRow}>
          <Text style={[styles.heading,{flex:1}]}>Show result: </Text>
          <Text
            style={[
              myData.show_result_to_student === '0'
                ? styles.noTxt
                : styles.yesTxT
            ]}>
            {myData.show_result_to_student === '0' ? 'No' : 'Yes'}
          </Text>
        </View>
        <Text
          style={[
            styles.heading,
            { paddingLeft: 10, paddingRight: 10, marginTop: 10 }
          ]}>
          Questions:{' '}
        </Text>
        <FlatList
          data={myData.questions}
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <NoResults message={'Questions not available'} />
            </View>
          )}
          renderItem={({ item, index }) => (
            <View style={styles.questionView}>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Question number: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.qno}</Text>
              </View>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Question: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.question === "" ? 'Not added' : item.question}</Text>
              </View>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Question Type: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.question_type}</Text>
              </View>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Choices: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.choices !='' ?item.choices :'Not available'}</Text>
              </View>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Marks: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.max_marks}</Text>
              </View>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>OBE Weight: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.obe_weight}</Text>
              </View>
              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Complexity: </Text>
                <Text style={[styles.discription,{flex:1}]}>{item.complexity}</Text>
              </View>

              <View style={styles.flexRows}>
                <Text style={[styles.heading,{flex:1}]}>Correct Answer: </Text>
                <Text style={[styles.discription,{flex:1,}]}>{item.correct_answer === '' ? 'Not available' : item.correct_answer}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default SingleAct;
