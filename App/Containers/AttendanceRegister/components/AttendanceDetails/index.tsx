import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useContext, useState } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { EmptyCalendar } from '../../../../Assets/SVGs';
import { SharedStateContext } from './../../../AttendanceRegister';

import style from './styles';
const AttendanceDetails = () => {
  const {
    startDate,
    setStartDate,
    startDate1,
    setStartDate1,
    lecture,
    setLecture,
    duration,
    setDuration,
    topic,
    setTopic,
    assessment,
    setAssessment,
    room,
    setRoom,
    data,
    myID
  } = useContext(SharedStateContext);

  const [dates, setDates] = useState(new Date());
  const [showstartDatePicker, setstartShowDatePicker] = useState(false);
  const [showStartTimePicker, setStartTimePicker] = useState(false);
  const handleDateChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dates;
    setstartShowDatePicker(Platform.OS === 'ios');
    setDates(currentDate);
    setStartDate(selectedDate.toISOString().substring(0, 10));
  };
  const showDatepickerStart = () => {
    setstartShowDatePicker(true);
  };

  const handleTimeChangeStart = (
    event: any,
    selectedTime: Date | undefined
  ) => {
    if (selectedTime) {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      const seconds = selectedTime.getSeconds();
      
      // Format the time as "hh:mm:ss" (24-hour format)
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
      setStartTimePicker(Platform.OS === 'ios');
      setDates(selectedTime);
      setStartDate1(formattedTime);
    }
  };
  

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <View>
          <Text style={style.textStyle}>Lecture Name</Text>
          <TextInput
            style={style.titletextInput}
            value={lecture}
            onChangeText={value => setLecture(value)}
          />

          <Text style={style.textStyle}>Date</Text>
          <TouchableOpacity
            onPress={() => {
              showDatepickerStart();
            }}
            style={style.dateView}>
            {startDate === '' ? (
              <Text style={style.dateText}>dd-mm-yy</Text>
            ) : (
              <Text style={style.dateText}>{startDate}</Text>
            )}

            <EmptyCalendar width={20} />
          </TouchableOpacity>
          {showstartDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dates}
              mode="date"
              display="default"
              onChange={handleDateChangeStart}
            />
          )}
          <Text style={style.textStyle}>Time</Text>
          <TouchableOpacity
            onPress={() => {
              setStartTimePicker(true);
            }}
            style={style.dateView}>
            {startDate1 === '' ? (
              <Text style={style.dateText}>hh-mm-ss</Text>
            ) : (
              <Text style={style.dateText}>{startDate1}</Text>
            )}
            <EmptyCalendar width={20} />
          </TouchableOpacity>
          {showStartTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={dates}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleTimeChangeStart}
            />
          )}
          <Text style={style.textStyle}>Duration (mins)</Text>
          <TextInput
            style={style.titletextInput}
            keyboardType="numeric"
            value={duration}
            onChangeText={value => setDuration(value)}
          />

          <Text style={style.textStyle}>Topic Taught/Remarks</Text>
          <TextInput
            style={style.titletextInput}
            value={topic}
            onChangeText={value => setTopic(value)}
          />

          <Text style={style.textStyle}>Assessment</Text>
          <TextInput
            style={style.titletextInput}
            value={assessment}
            onChangeText={value => setAssessment(value)}
          />

          <Text style={style.textStyle}>Room</Text>
          <TextInput
            style={style.titletextInput}
            value={room}
            onChangeText={value => setRoom(value)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AttendanceDetails;
