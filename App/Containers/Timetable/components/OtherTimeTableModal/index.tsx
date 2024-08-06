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
import { CloseCircle, EmptyCalendar } from '../../../../Assets/SVGs';
import WhiteDropDown from '../../../../Assets/SVGs/WhiteDropDown';
import { GenericMessage, Spinner } from '../../../../Components';
import {
  useAddTimeTableOtherMutation,
  useOtherTimetableActivityListQuery,
  useOtherTimetableClassListQuery,
  useSingleTimetableSlotsQuery,
  useUpdateTimeTableOtherMutation
} from '../../../../RTK/Api/CourseApi';
import CourseSectionDropDown from '../CourseSectionDropDown';
import DropDown from '../DropDown';
import style from './styles';
import { DeleteProps } from './types';
const OtherTimeTableModal = (props: DeleteProps) => {
  const [show, setShow] = useState(false);
  const { t: errorsTranslations } = useTranslation('errors');
  const { modalVisible = false, setModalVisible } = props;
  const [detail, setDetail] = useState(props.detail != '' ? props.detail : '');
  const initialDate = props.date !== '' ? new Date(props.date) : new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const [dates, setDates] = useState(new Date());
  const [showstartDatePicker, setstartShowDatePicker] = useState(false);
  const [courseKey, setCourseKey] = useState('');
  const [course, setCourse] = useState(
    props.courseSection != '' ? props.courseSection : ''
  );
  const [slot, setSlot] = useState(props.slot != '' ? props.slot : '');
  const [activity, setActivity] = useState(
    props.activityType != '' ? props.activityType : ''
  );
  const [errorActivity, setErrorActivity] = useState(false);
  const [errorSlot, setErrorSlot] = useState(false);
  const [errorCourse, setErrorCourse] = useState(false);
  const {
    data: slotData,
    refetch: slotRefetch,
    isFetching: slotFetch,
    isLoading: slotLoad,
    isError: SlotError
  } = useSingleTimetableSlotsQuery({
    date: (startDate as Date).toISOString().substring(0, 10)
  });

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
    data: activityData,
    refetch: activityRefetch,
    isFetching: activityFetch,
    isLoading: activityLoad,
    isError: activityError
  } = useOtherTimetableActivityListQuery({
    date: (startDate as Date).toISOString().substring(0, 10)
  });

  const [addOtherTimeTable, { isLoading: addOtherLoad, data: addotherdata }] =
    useAddTimeTableOtherMutation();

  const [
    updateOtherTimeTable,
    { isLoading: updateOtherLoad, data: updateotherdata, error }
  ] = useUpdateTimeTableOtherMutation();

  var slotOptions: string[];
  var activityOptions: string[];
  const handleDateChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dates;
    setstartShowDatePicker(Platform.OS === 'ios');
    setDates(currentDate);
    setStartDate(selectedDate);

    setCourse('');
    setActivity('');
    setSlot('');
    setCourseKey('')

    courseRefetch();
    slotRefetch();
    activityRefetch();
  };

  const showDatepickerStart = () => {
    setstartShowDatePicker(true);
  };

  if (SlotError || courseError || activityError) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          setModalVisible(false);
        }}
      />
    );
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
      errorKeysToCheck.forEach(errorKey => {
        if (addotherdata.errors[errorKey]) {
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
      errorKeysToCheck.forEach(errorKey => {
        if (updateotherdata.errors[errorKey]) {
          errorMessage = updateotherdata.errors[errorKey][0];
        }
      });
      if (!show) {
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        setShow(true);
      
    }
    }
  }

  if (
    slotLoad ||
    slotFetch ||
    courseFetch ||
    courseLoad ||
    activityFetch ||
    activityLoad
  ) {
    return <Spinner />;
  } else {
    slotOptions = Object.values(slotData);
    activityOptions = Object.values(activityData);
  }

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

  function saveActivity() {
    console.debug(courseKey)
    if (props.from === 'Add') {
      if (courseKey.length>0) {
        if (slot.length > 0) {
          const slotKey = findActivityKey(slotData, slot);
          if (activity.length > 0) {
            const activityKey = findActivityKey(activityData, activity);

            addOtherTimeTable({
              date: (startDate as Date).toISOString().substring(0, 10),
              slot: slotKey,
              activityType: activityKey,
              classroom: courseKey,
              detail: detail
            });
          } else {
            setErrorActivity(true);
          }
        } else {
          setErrorSlot(true);
        }
      } else {
        setErrorCourse(true);
      }
    } else {
      const activityKey = findActivityKey(activityData, activity);
      updateOtherTimeTable({
        id: props.id,
        activityType: activityKey,
        detail: detail
      });
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
          <Text style={style.heading}>Add Time Table (Other)</Text>
          <View style={style.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ padding: 10, paddingLeft: 20, paddingRight: 20,  }}>
          {props.from === 'Add' ? (
            <CourseSectionDropDown
              courseKey={courseKey}
              setCourseKey={setCourseKey}
              containerName={'Course Section'}
              height={280}
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
                <Text>{course}</Text>
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
              {(startDate as Date).toISOString().substring(0, 10)}
            </Text>

            <EmptyCalendar width={20} />
          </TouchableOpacity>
          {props.from !== 'Edit' && showstartDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dates}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChangeStart}
            />
          )}
          {props.from === 'Add' ? (
            <DropDown
              containerName={'Slot'}
              height={430}
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
                <Text>{slot}</Text>
                <WhiteDropDown style={{ right: 20 }} />
              </View>
            </View>
          )}

          <DropDown
            containerName={'Activity type'}
            height={530}
            options={activityOptions}
            setValue={setActivity}
            value={activity}
            error={errorActivity}
            setError={setErrorActivity}
          />

          <Text style={style.textStyle}>Detail</Text>
          <TextInput
            style={style.titletextInput}
            value={detail}
            onChangeText={value => setDetail(value)}
          />

          <TouchableOpacity
            onPress={() => {
              saveActivity();
              //setModalVisible(false);
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
export default OtherTimeTableModal;
