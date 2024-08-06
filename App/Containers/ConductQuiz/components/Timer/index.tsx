import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import BigClock from '../../../../Assets/SVGs/BigClock';
import { Spinner } from '../../../../Components';
import {
  useClassQuizMarkMutation,
  useClassQuizReTakeMutation,
  useClassQuizStartMutation,
  useClassQuizStopMutation
} from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { TimerProps } from './types';
const TimerComponent = (props: TimerProps) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [showPicker, setShowPicker] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (props.data.allow_stop) {
      const startTime = new Date(props.data.start_time);
      const endTime = new Date(props.data.end_time);
      const currentTime = new Date();
      const currentTimeWithOffset = new Date(
        currentTime.getTime() + currentTime.getTimezoneOffset() * 60000
      );

      if (
        startTime.getDate() === currentTimeWithOffset.getDate() &&
        endTime.getTime() > currentTimeWithOffset.getTime()
      ) {
        const remainingSeconds = Math.floor(
          (endTime.getTime() - currentTimeWithOffset.getTime()) / 1000
        );
        setRemainingTime(remainingSeconds);
      }
    }
  }, [props.data.allow_stop, props.data.end_time, props.data.start_time]);

  useEffect(() => {
    if (remainingTime > 0) {
      const timerInterval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [remainingTime]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes}:${secs}`;
  };

  const handleTimePickerConfirm = (time: Date) => {
    const selectedTime = new Date(time);
    const currentTime = new Date();

    if (selectedTime > currentTime) {
      const differenceInMilliseconds =
        selectedTime.getTime() - currentTime.getTime();
      const differenceInMinutes = Math.floor(
        differenceInMilliseconds / (1000 * 60)
      );

      setShowPicker(false);
      if (props.data.allow_start) {
        handleStartTimer(differenceInMinutes);
      } else if (props.data.allow_retake) {
        handleRetakeTimer(differenceInMinutes);
      }
    } else {
    }
  };

  const [stopQuiz, { isLoading: stop, data: stopdata }] =
    useClassQuizStopMutation();

  const [startQuiz, { isLoading: start, data: startdata }] =
    useClassQuizStartMutation();

  const [retakeQuiz, { isLoading: retake, data: retakedate }] =
    useClassQuizReTakeMutation();

  const [markQuiz, { isLoading: mark, data: markdata }] =
    useClassQuizMarkMutation();

  const handleStopTimer = () => {
    stopQuiz({ id: props.myID });
  };

  if (!stop && stopdata != undefined) {
    if (stopdata.success) {
      props.setReload(true);
    }
  }

  const handleStartTimer = (differenceInMinutes: number) => {
    startQuiz({
      id: props.myID,
      quiz_duration: differenceInMinutes?.toString(),
      quiz_note: 'Please attempt quiz in given duration',
      shuffle_quiz: '1'
    });
  };

  if (!start && startdata != undefined) {
    if (startdata.success) {
      props.setReload(true);
    }
  }

  const handleRetakeTimer = (differenceInMinutes: number) => {
    retakeQuiz({
      id: props.myID,
      quiz_duration: differenceInMinutes?.toString(),
      quiz_note: 'Please attempt quiz in given duration',
      shuffle_quiz: '1'
    });
  };

  if (!retake && retakedate != undefined) {
    if (retakedate.success) {
      props.setReload(true);
    }
  }

  const handleMarkTimer = () => {
    markQuiz({ id: props.myID });
  };

  if (!mark && markdata != undefined) {
    if (markdata.success) {
      props.setReload(true);
    }
  }

  return (
    <View style={styles.topContainer}>
      <View style={styles.innerContainer}>
        <BigClock />
        <Text style={styles.timeText}>{formatTime(remainingTime)}</Text>
      </View>
      {props.data.allow_stop ? (
        <TouchableOpacity
          style={styles.startTimerView}
          onPress={() => {
            setShow(false);
            handleStopTimer();
          }}>
          <Text style={styles.greenTxt}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <View>
          {props.data.allow_start ? (
            <TouchableOpacity
              style={styles.startTimerView}
              onPress={() => {
                setShow(false);
                setShowPicker(true);
              }}>
              <Text style={styles.greenTxt}>Start</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.justifyView}>
              {props.data.allow_retake ? (
                <TouchableOpacity
                  style={[styles.startTimerView, { marginRight: 10 }]}
                  onPress={() => {
                    setShow(false);
                    setShowPicker(true);
                  }}>
                  <Text style={[styles.greenTxt, { color: '#e1ad01' }]}>
                    Retake
                  </Text>
                </TouchableOpacity>
              ) : null}
              {props.data.allow_mark ? (
                <TouchableOpacity
                  style={[styles.startTimerView, { marginLeft: 10 }]}
                  onPress={() => {
                    setShow(false);
                    handleMarkTimer();
                  }}>
                  <Text style={[styles.greenTxt, { color: Colors.red }]}>
                    Marks
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          )}
        </View>
      )}
      {showPicker && (
        <DateTimePickerModal
          mode="time"
          isVisible={true}
          date={new Date()}
          onConfirm={handleTimePickerConfirm}
          onCancel={() => setShowPicker(false)}
        />
      )}

      {mark || stop || start || retake ? <Spinner /> : null}
    </View>
  );
};

export default TimerComponent;
