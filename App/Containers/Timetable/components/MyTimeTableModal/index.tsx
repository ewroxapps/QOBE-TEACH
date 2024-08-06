import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import { Switch } from 'react-native-paper';
import { CloseCircle, EmptyCalendar } from '../../../../Assets/SVGs';
import WhiteDropDown from '../../../../Assets/SVGs/WhiteDropDown';
import { GenericMessage, Spinner } from '../../../../Components';
import {
  useAddTimeTableMainMutation,
  useOtherTimetableClassListQuery,
  useSingleTimetableSlotsQuery,
  useUpdateTimeTableMainMutation
} from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import CourseSectionDropDown from '../CourseSectionDropDown';
import DropDown from '../DropDown';
import style from './styles';
import { DeleteProps } from './types';
const MyTimeTableModal = (props: DeleteProps) => {
  const { t: errorsTranslations } = useTranslation('errors');
  const { modalVisible = false, setModalVisible } = props;
  const [topic, setTopic] = useState(props.topic != '' ? props.topic : '');
  const [room, setRoom] = useState(props.room != '' ? props.room : '');
  const [isOnline, setisOnline] = useState(convertToBoolean(props.isOnline));
  const [errorSlot, setErrorSlot] = useState(false);
  const [show, setShow] = useState(false);
  const [errorCourse, setErrorCourse] = useState(false);
  const initialDate = props.date !== '' ? new Date(props.date) : new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const [dates, setDates] = useState(new Date());
  const [courseKey, setCourseKey] = useState('');
  const [showstartDatePicker, setstartShowDatePicker] = useState(false);
  const [course, setCourse] = useState(
    props.courseSection != '' ? props.courseSection : ''
  );
  const [slot, setSlot] = useState(props.slot != '' ? props.slot : '');
  var slotOptions: string[];
  const {
    data: courseData,
    refetch: courseRefetch,
    isFetching: courseFetch,
    isLoading: courseLoad,
    isError: courseError
  } = useOtherTimetableClassListQuery(
    {
      date: (startDate as Date).toISOString().substring(0, 10)
    }.date
  );

  const {
    data: slotData,
    refetch: slotRefetch,
    isFetching: slotFetch,
    isLoading: slotLoad,
    isError: SlotError
  } = useSingleTimetableSlotsQuery({
    date: (startDate as Date).toISOString().substring(0, 10)
  });

  const [
    updateMainTimeTable,
    { isLoading: updateOtherLoad, data: updateotherdata }
  ] = useUpdateTimeTableMainMutation();

  function findActivityKey(
    object: ActivityMap,
    valueToFind: string
  ): string | null {
    for (const key in object) {
      if (object.hasOwnProperty(key) && object[key] === valueToFind) {
        return key;
      }
    }
    return null;
  }
  const [addMainTimeTable, { isLoading: addOtherLoad, data: addotherdata }] =
    useAddTimeTableMainMutation();

  const handleDateChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dates;
    setstartShowDatePicker(Platform.OS === 'ios');
    setDates(currentDate);
    setStartDate(selectedDate);
    setCourse('');
    setSlot('');
    slotRefetch();
    courseRefetch();
  };
  const showDatepickerStart = () => {
    setstartShowDatePicker(true);
  };

  if (SlotError || courseError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          setModalVisible(false);
        }}
      />
    );
  }

  if (slotLoad || slotFetch || courseFetch || courseLoad) {
    return <Spinner />;
  } else {
    slotOptions = Object.values(slotData);
  }

  if (!addOtherLoad && addotherdata != undefined) {
    if (addotherdata.success) {
      ToastAndroid.show(addotherdata.msg, ToastAndroid.SHORT);
      props.setRefreshed(true);
      setModalVisible(false);
      props.setModalVisibleMain(false);
    } else {
      const errorKeysToCheck = [
        'timetableother-class_room_id',
        'timetableother-slot_id'
      ];
      let errorMessage = '';
      // Iterate through the error keys and check if any of them exist in the JSON data
      errorKeysToCheck.forEach(errorKey => {
        if (addotherdata.errors[errorKey]) {
          // If the error key exists, set the errorMessage to the first error message found
          errorMessage = addotherdata.errors[errorKey][0];
        }
      });
      if (!show) {
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        setShow(true);
      }
    
    }
  }


  if (!updateOtherLoad && updateotherdata != undefined) {
    if (updateotherdata.success) {
      ToastAndroid.show(updateotherdata.msg, ToastAndroid.SHORT);
      props.setRefreshed(true);
      setModalVisible(false);
      props.setModalVisibleMain(false);
    } else {
      
      const errorKeysToCheck = [
        'timetableother-class_room_id',
        'timetableother-slot_id'
      ];
      let errorMessage = '';
      // Iterate through the error keys and check if any of them exist in the JSON data
      errorKeysToCheck.forEach(errorKey => {
        if (updateotherdata.errors[errorKey]) {
          // If the error key exists, set the errorMessage to the first error message found
          errorMessage = updateotherdata.errors[errorKey][0];
        }
      });
      if (!show) {
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        setShow(true);
      }

     
    }
  }

  function addMainTime() {
    if (props.from === 'Add') {
      if (slot.length > 0) {
        const slotKey = findActivityKey(slotData, slot);
        if (courseKey.length > 0) {
          addMainTimeTable({
            date: (startDate as Date).toISOString().substring(0, 10),
            slot: slotKey,
            classroom: courseKey,
            topic: topic,
            room_no: room
          });
        } else {
          setErrorCourse(true);
        }
      } else {
        setErrorSlot(true);
      }
    } else {
      updateMainTimeTable({ id: props.id, topic: topic, room_no: room });
    }
  }

  function convertToBoolean(value: string) {
    if (value === 'Yes') {
      return true;
    } else if (value === 'No') {
      return false;
    }
  }
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={style.container}>
        <View style={style.topRowContainer}>
          <Text style={style.heading}>Add Time Table</Text>
          <View style={style.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ padding: 10, paddingLeft: 20, paddingRight: 20 }}>
          {props.from === 'Add' ? (
            <CourseSectionDropDown
              courseKey={courseKey}
              setCourseKey={setCourseKey}
              containerName={'Course Section'}
              height={220}
              data={courseData}
              setValue={setCourse}
              value={course}
              error={errorCourse}
              setError={setErrorCourse}
            />
          ) : (
            <View>
              <Text style={style.textStyling}>Course Section</Text>
              <View style={style.containerGreys}>
                <Text style={{ left: 10 }}>{course}</Text>
                <WhiteDropDown style={{ right: 20 }} />
              </View>
            </View>
          )}

          <Text style={style.textStyle}>Date</Text>
          <TouchableOpacity
            onPress={() => {
              showDatepickerStart();
            }}
            style={style.dateView}>
            <Text style={style.dateText}>
              {startDate.toISOString().substring(0, 10)}
            </Text>
            <EmptyCalendar width={20} />
          </TouchableOpacity>
          {props.from === 'Add' && showstartDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dates}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChangeStart}
            />
          )}

          <Text style={style.textStyle}>Topic</Text>
          <TextInput
            style={style.titletextInput}
            value={topic}
            onChangeText={value => setTopic(value)}
          />

          {props.from === 'Add' ? (
            <DropDown
              containerName={'Slot'}
              height={480}
              options={slotOptions}
              setValue={setSlot}
              value={slot}
              error={errorSlot}
              setError={setErrorSlot}
            />
          ) : (
            <View>
              <Text style={style.textStyling}>Slot</Text>
              <View style={style.containerGreys}>
                <Text style={{ left: 10 }}>{slot}</Text>
                <WhiteDropDown style={{ right: 20 }} />
              </View>
            </View>
          )}
          <Text style={style.textStyle}>Room No.</Text>
          <TextInput
            style={style.titletextInput}
            value={room}
            onChangeText={value => setRoom(value)}
          />

          <View style={style.onOffView}>
            <Text style={style.onlinetxt}>is Online?</Text>
            <Switch
              value={isOnline}
              color={Colors.quizBlue}
              onValueChange={() => {
                setisOnline(!isOnline);
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              addMainTime();
              setShow(false);
            }}>
            <View style={style.saveActivityView}>
              <Text style={style.whiteTxt}>
                {props.from === 'Add' ? 'Save' : 'Update'}
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default MyTimeTableModal;
