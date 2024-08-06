import React, { useRef, useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import { Trash } from '../../../../Assets/SVGs';
import Upwards from '../../../../Assets/SVGs/Upwards';
import WhiteDropDown from '../../../../Assets/SVGs/WhiteDropDown';
import DropDown from '../../../Timetable/components/DropDown';
import styles from './styles';
import { surveyQuestionProps } from './types';
const QuestionComponent = (props: surveyQuestionProps) => {
  const itemRef = useRef(null);
  const [newQuestion, setNewQuestion] = useState<SurveyQuestion>({
    itemNumber: 1,
    sequence: 0,
    head: '',
    type: '',
    questionGroup: '',
    question: '',
    choices: [],
    slo: '',
    required: false
  });

  const handleAddQuestion = () => {
    const updatedQuestions = [
      ...props.questions,
      {
        itemNumber: newQuestion.itemNumber,
        sequence: newQuestion.sequence,
        head: newQuestion.head,
        type: newQuestion.type,
        questionGroup: newQuestion.questionGroup,
        question: newQuestion.question,
        choices: newQuestion.choices,
        slo: newQuestion.slo,
        required: newQuestion.required
      }
    ];

    props.setQuestionsValue(updatedQuestions);

    setNewQuestion(prevQuestion => ({
      ...prevQuestion,
      itemNumber: prevQuestion.itemNumber + 1,
      sequence: 0,
      head: '',
      type: '',
      questionGroup: '',
      question: '',
      choices: [],
      slo: ''
    }));
  };

  const handleMoveQuestion = (
    itemNumber: number,
    direction: 'up' | 'down',
    sequence: number
  ) => {
    const updatedQuestions = [...props.questions];

    if (direction === 'down') {
      if (
        updatedQuestions[itemNumber - 1].sequence === props.questions.length
      ) {
        ToastAndroid.show('Reached the down limit', ToastAndroid.SHORT);
      } else {
        updatedQuestions[itemNumber - 1].sequence =
          updatedQuestions[itemNumber - 1].sequence + 1;
      }
    } else {
      if (updatedQuestions[itemNumber - 1].sequence <= 0) {
        ToastAndroid.show('Reached the up limit', ToastAndroid.SHORT);
      } else {
        updatedQuestions[itemNumber - 1].sequence =
          updatedQuestions[itemNumber - 1].sequence - 1;
      }
    }
    props.setQuestionsValue(updatedQuestions);
  };

  const handleRemoveQuestion = (itemNumber: number) => {
    const updatedQuestions = props.questions.filter(
      question => question.itemNumber !== itemNumber
    );

    props.setQuestionsValue(updatedQuestions);
  };

  const renderQuestions = () => {
    return props.questions.map((question, index) => (
      <View
        ref={itemRef}
        key={question.itemNumber}
        style={props.errorIndex === index ? styles.ErrorquestionContainer:styles.questionContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.textClr}>Line item #{question.itemNumber}</Text>
          <TouchableOpacity
            style={styles.removeContainer}
            onPress={() => {
              handleRemoveQuestion(question.itemNumber);
            }}>
            <Text style={styles.textClrRemove}>Remove</Text>
            <Trash width={16} height={16} />
          </TouchableOpacity>
        </View>
        <View style={[styles.topContainer, { marginTop: 10 }]}>
          <View style={styles.innerContainr}>
            <Text style={styles.textClr}>Sequence: </Text>
            <View style={styles.squenceView}>
              <Text style={[styles.textClr, { top: 10, left: 10 }]}>
                {question.sequence}
              </Text>
              <View style={{ marginRight: 10, top: -4 }}>
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => {
                    handleMoveQuestion(
                      question.itemNumber,
                      'up',
                      question.sequence
                    );
                  }}>
                  <Upwards />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => {
                    handleMoveQuestion(
                      question.itemNumber,
                      'down',
                      question.sequence
                    );
                  }}>
                  <WhiteDropDown />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.innerContainr}>
            <Text style={styles.textClr}>Head:</Text>
            <TextInput
              style={styles.input}
              value={newQuestion.head}
              onChangeText={text =>
                setNewQuestion(prevQuestion => ({
                  ...prevQuestion,
                  head: text
                }))
              }
            />
          </View>
        </View>
        <View style={styles.topContainer}>
          <View style={{ flex: 1 }}>
            <DropDown containerName="Type:" height={320} />
          </View>
          <View style={{ flex: 1 }}>
            <DropDown containerName="Question Group" height={320} />
          </View>
        </View>

        {question.required === true ? (
          <View style={styles.touchableView}>
            <TouchableOpacity
              style={styles.square}
              onPress={() => {
                const updatedQuestions = [...props.questions];
                updatedQuestions[index].required = false;
                props.setQuestionsValue(updatedQuestions);
              }}>
              <Text style={styles.tick}>✓</Text>
            </TouchableOpacity>
            <Text style={styles.activeTxt}>Required</Text>
          </View>
        ) : (
          <View style={styles.touchableView}>
            <TouchableOpacity
              style={styles.emptySquare}
              onPress={() => {
                const updatedQuestions = [...props.questions];
                updatedQuestions[index].required = true;
                props.setQuestionsValue(updatedQuestions);
              }}>
              <Text style={[styles.tick, { color: '#F8FAFC' }]}>✓</Text>
            </TouchableOpacity>
            <Text style={styles.activeTxt}>Required</Text>
          </View>
        )}

        <Text style={[styles.textClr, { marginTop: 15 }]}>Question</Text>
        <TextInput
          style={[styles.input, { height: 65 }]}
          value={props.questions[index].question}
          onChangeText={text => {
            const updatedQuestions = [...props.questions];
            updatedQuestions[index].question = text;
            props.setQuestionsValue(updatedQuestions);
          }}
        />
        <Text style={[styles.textClr, { marginTop: 10 }]}>Choices</Text>
        <TextInput
          style={[styles.input, { height: 65 }]}
          value={props.questions[index].choices.join('\n')}
          onChangeText={text => {
            const updatedQuestions = [...props.questions];
            updatedQuestions[index].choices = text
              .split('\n')
              .map(choice => choice.trim());
            props.setQuestionsValue(updatedQuestions);
          }}
          multiline={true}
        />

        <DropDown containerName="SLO" height={550} />
      </View>
    ));
  };

  return (
    <View style={styles.totaView}>
      <ScrollView style={styles.container}>
        {props.questions.length === 0 ? (
          <View style={styles.addQuestionview}>
            <Text style={styles.surveyTxt}>Add Survey Questions</Text>
          </View>
        ) : (
          <View style={styles.questionsContainer}>{renderQuestions()}</View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={handleAddQuestion}>
        <Text style={styles.buttonText}>+ Add New Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionComponent;
