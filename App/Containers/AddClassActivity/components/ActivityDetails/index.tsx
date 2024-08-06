import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { EmptyCalendar } from '../../../../Assets/SVGs';
import colors from '../../../../Themes/Colors';
import style from './styles';
const ActivityDetails = (props: any) => {
  var assessmentMethod: string = props.route.params.activityName
  const [assmentMethod, setAssessmentMethod] = useState(''); 
  const [activityName, setActivityName] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [gpa, setGpa] = useState('');
  const [problem, setProblem] = useState(false);
  const [includeGpa, setIncludeGpa] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [dates, setDates] = useState(new Date());
  const [showstartDatePicker, setstartShowDatePicker] = useState(false);

  const handleDateChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dates;
    setstartShowDatePicker(Platform.OS === 'ios');
    setDates(currentDate);
    setStartDate(selectedDate.toISOString().substring(0, 10))
  };
  const showDatepickerStart = () => {
    setstartShowDatePicker(true);
  };

  function saveActivity(){
    if(activityName.length>0){
      if(startDate.length>0){
        if(totalMarks.length >0) {
          if(gpa.length>0){
            //save activity
          }else{
            ToastAndroid.showWithGravity(
              "Please enter gpa",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          }
        }else{
          ToastAndroid.showWithGravity(
            "Please enter total marks",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      }else{
        ToastAndroid.showWithGravity(
          "Please enter date",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    }else{
      ToastAndroid.showWithGravity(
        "Please enter activity name",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }

  useEffect(() => {
    setAssessmentMethod(assessmentMethod)
  }, []);
  return (
    <View style={style.mainContainer} >
      <ScrollView>
        <View>
          <Text style={style.textStyle}>Activity/Assessment Method</Text>
          <TextInput
            style={style.titletextInput}
            value={assmentMethod}
            onChangeText={value => setAssessmentMethod(value)} />

          <Text style={style.textStyle}>Activity Name</Text>
          <TextInput
            style={style.titletextInput}
            value={activityName}
            onChangeText={value => setActivityName(value)} />

          <Text style={style.textStyle}>Date</Text>
          <TouchableOpacity
            onPress={() => {
              showDatepickerStart()
            }}
            style={style.dateView}>
            {startDate === '' ? (
              <Text style={style.dateText}>dd-mm-yy</Text>
            ) : (
              <Text style={style.dateText}>{startDate}</Text>
            )

            }

            <EmptyCalendar width={20} />
          </TouchableOpacity>
          {showstartDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dates}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChangeStart}
            />
          )}

          <View style={style.statusView}>
            <View style={style.centerView}>
              <Text style={style.textStyle}>Total Marks</Text>
              <TextInput
                placeholder='00'
                keyboardType="numeric"
                style={style.titletextInput1}
                value={totalMarks}
                onChangeText={value => setTotalMarks(value)} />
            </View>

            <View style={style.centerView}>
              <Text style={style.textStyle}>GPA</Text>
              <TextInput
                placeholder='0.00'
                keyboardType="numeric"
                style={style.titletextInput1}
                value={gpa}
                onChangeText={value => setGpa(value)} />
            </View>



          </View>
          <View style={style.onOffView}>
            <Text style={style.textStyle}>Complex Engineering Problem</Text>
            <Switch value={problem} color={colors.quizBlue} onValueChange={() => {
              setProblem(!problem)
            }} />
          </View>

          <View style={style.onOffView}>
            <Text style={style.textStyle}>Include for GPA Calculation</Text>
            <Switch value={includeGpa} color={colors.quizBlue} onValueChange={() => {
              setIncludeGpa(!includeGpa)
            }} />
          </View>
          <View style={style.onOffView}>
            <Text style={style.textStyle}>Show to Students</Text>
            <Switch value={showStudent} color={colors.quizBlue} onValueChange={() => {
              setShowStudent(!showStudent)
            }} />
          </View>
          <View style={style.onOffView}>
            <Text style={style.textStyle}>Show Results to Students</Text>
            <Switch value={showResult} color={colors.quizBlue} onValueChange={() => {
              setShowResult(!showResult)
            }} />
          </View>
          <TouchableOpacity
            onPress={() => {
              saveActivity()
            }}>
          <View style={style.saveActivityView}>
            <Text style={style.whiteTxt}>Save Activity</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityDetails;
