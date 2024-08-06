import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { finishProps } from './types';
const FinishComponent = (props: finishProps) => {
  const renderQuestions = () => {
    return props.questions.map((question, index) => 
    <View key={question.itemNumber} >
      <View style={[styles.myView, { flexDirection: 'row' }]}>
        <Text style={styles.textDetail}>Q{question.itemNumber}</Text>
        <Text style={styles.textDetail}>{question.question}</Text>
      </View>
      <View style={[styles.myView]}>
        <Text style={styles.textDetail}>{question.choices}</Text>
      </View>

    </View>);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.myView}>
        <Text style={styles.textHeading}>Name</Text>
        <Text style={styles.textDetail}>{props.name}</Text>
      </View>
      <View style={styles.myView}>
        <Text style={styles.textHeading}>Category</Text>
        <Text style={styles.textDetail}>{props.category}</Text>
      </View>
      <View style={[styles.myView, { flexDirection: 'row' }]}>
        <Text style={styles.textHeading}>Active: </Text>
        <Text style={[styles.textDetail, { marginTop: 0 }]}>
          {props.active === true ? 'Yes' : 'No'}
        </Text>
      </View>
      <View style={[styles.myView]}>
        <Text style={styles.textHeading}>Course Section</Text>
        <Text style={styles.textDetail}>{props.courseSection}</Text>
      </View>
      <View style={[styles.myView]}>
        <Text style={styles.textHeading}>Question Group</Text>
        <Text style={styles.textDetail}>{props.questionGroup}</Text>
      </View>
      <View style={[styles.myView]}>
        <Text style={styles.textHeading}>Notes</Text>
        <Text style={styles.textDetail}>{props.notes}</Text>
      </View>
      <View style={[styles.myView]}>
        <Text style={styles.textHeading}>Questions</Text>
        <View >{renderQuestions()}</View>
      </View>
    </ScrollView>
  );
};

export default FinishComponent;
