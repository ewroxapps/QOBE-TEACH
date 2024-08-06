import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Header } from './../Survey/component';
import {
  DetailComponent,
  FnishComponent,
  HeaderProceeding,
  QuestionComponent,
  TypeComponent
} from './components';
import styles from './styles';

const CreateSurvey = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [type, setType] = useState('');
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [question, setQestion] = useState('');
  const [notes, setNotes] = useState('');
  const [errorIndex, setErrorIndex] = useState(-1);
  const [active, setActive] = useState(false);
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);

  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header title="Create Survey" />
    });
  };

  const nextPress = () => {
    if (type != '' && !second && !third && !fourth) {
      setSecond(true);
    } else if (
      name != '' &&
      question != '' &&
      second &&
      !third &&
      !fourth
    ) {
      setThird(true);
    } else if (questions.length > 0 && second && third && !fourth) {
      let hasError = false;
      for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        if (currentQuestion.question === '' || currentQuestion.choices.length === 0 || currentQuestion.choices.some(choice => choice.trim() === '')) {
          hasError = true;
          setErrorIndex(i)
          break;
        }
      }
      if (hasError) {
        ToastAndroid.show('Please enter valid questions and choices', ToastAndroid.SHORT);
      } else{
        setFourth(true);

      }
     
    } else {
      if(type === ''){
        ToastAndroid.show('Please select your survey type',ToastAndroid.SHORT)
      }else if( name === ''){
        ToastAndroid.show('Please enter your survey name',ToastAndroid.SHORT)
      }else if(question === ''){
        ToastAndroid.show('Please enter your question group',ToastAndroid.SHORT)
      }
      else if(questions.length === 0){
        ToastAndroid.show('Please add you questions',ToastAndroid.SHORT)
      }
    }
  };

  const backPress = () => {
    if (second && !third && !fourth) {
      setSecond(false);
    } else if (second && third && !fourth) {
      setThird(false);

    } else if (second && third && fourth) {
      setFourth(false);
    }
  };

  useEffect(() => {
    changeHeaderTitle();
  });
  return (
    <View style={styles.topContainer}>
      <HeaderProceeding second={second} third={third} fourth={fourth} />
      {!second && !third && !fourth ? (
        <TypeComponent
          value={type}
          setValue={setType}
          error={error}
          setError={setError}
        />
      ) : (
        <View>
          {second && !third && !fourth ? (
            <DetailComponent
              name={name}
              setName={setName}
              question={question}
              setQuestion={setQestion}
              note={notes}
              setNote={setNotes}
              active={active}
              setActive={setActive}
            />
          ) : (
            <View>
              {second && third && !fourth ? (
                <QuestionComponent
                  questions={questions}
                  setQuestionsValue={setQuestions}
                  errorIndex={errorIndex}
                />
              ) : (
                <View>
                  {second && third && fourth ? (
                    <FnishComponent
                      name={name}
                      notes={notes}
                      category="Student Course Evaluation Survey (Standard)"
                      courseSection="A"
                      active={active}
                      questionGroup="General"
                      questions={questions}
                    />
                  ) : null}
                </View>
              )}
            </View>
          )}
        </View>
      )}
      <View
        style={second || third || fourth ? styles.saveView : styles.saveViews}>
        {second || third || fourth ? (
          <TouchableOpacity
            style={[styles.touchableSaveView, { backgroundColor: '#CBD5E1' }]}
            onPress={backPress}>
            <Text style={styles.blacktxt}>Back</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity style={styles.touchableSaveView} onPress={nextPress}>
          <Text style={styles.txt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateSurvey;
