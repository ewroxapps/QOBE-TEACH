import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Platform,
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
  useAddTimeTableClassroomMutation,
  useSingleTimetableSlotsQuery
} from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import DropDown from '../../../Timetable/components/DropDown';
import style from './styles';
import { DeleteProps } from './types';
const AddTimeTable = (props: DeleteProps) => {
  const { t: errorsTranslations } = useTranslation('errors');
  const { modalVisible = false, setModalVisible } = props;
  const [topic, setTopic] = useState(props.topic != '' ? props.topic : '');
  const [room, setRoom] = useState(props.room != '' ? props.room : '');
  const [isOnline, setisOnline] = useState(convertToBoolean(props.isOnline));
  const [errorSlot, setErrorSlot] = useState(false);
  const initialDate = props.date !== '' ? new Date(props.date) : new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const [dates, setDates] = useState(new Date());
  const [showstartDatePicker, setstartShowDatePicker] = useState(false);
  const [slot, setSlot] = useState(props.slot != '' ? props.slot : '');
  var slotOptions: string[];


  const [addClassTimeTable, { isLoading: addload, data: addclassroom,error:adderror }] =
  useAddTimeTableClassroomMutation();

  const {
    data: slotData,
    refetch: slotRefetch,
    isFetching: slotFetch,
    isLoading: slotLoad,
    isError: SlotError
  } = useSingleTimetableSlotsQuery({
    date: (startDate as Date).toISOString().substring(0, 10)
  });


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

 

  const handleDateChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dates;
    setstartShowDatePicker(Platform.OS === 'ios');
    setDates(currentDate);
    setStartDate(selectedDate);
    setSlot('');
    slotRefetch();
  };
  const showDatepickerStart = () => {
    setstartShowDatePicker(true);
  };

  if (SlotError ) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          setModalVisible(false);
        }}
      />
    );
  }

  if (slotLoad || slotFetch ) {
    return <Spinner />;
  } else {
    slotOptions = Object.values(slotData);

  }


 
    if(!addload && addclassroom !=undefined){
      if(addclassroom.success){
        ToastAndroid.show(addclassroom.message,ToastAndroid.SHORT)
      }else{
      //  const error = addclassroom.errors['timetableother-slot_id'][0];
       // ToastAndroid.show(error, ToastAndroid.SHORT);
      }
     }

   

  function addMainTime() {
    if (props.from === 'Add') {
      if (slot.length > 0) {
        const slotKey = findActivityKey(slotData, slot);

        addClassTimeTable({
            date: (startDate as Date).toISOString().substring(0, 10),
            slot: slotKey,
            topic: topic,
            room_no: room,
            classrommId:props.id
          });
      } else {
        setErrorSlot(true);
      }
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
        props.setRefreshed(true)
        setModalVisible(false);
      }}>
      <View style={style.container}>
        <View style={style.topRowContainer}>
          <Text style={style.heading}>Add Time Table</Text>
          <View style={style.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.setRefreshed(true)
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: 10, paddingLeft: 20, paddingRight: 20 }}>
         

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
            }}>
            <View style={style.saveActivityView}>
              <Text style={style.whiteTxt}>{props.from==='Add'?'Save':'Update'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default AddTimeTable;
