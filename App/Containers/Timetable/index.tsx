import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Screen, Spinner } from '../../Components';
import {
  useAllTimetableQuery
} from '../../RTK/Api/CourseApi';
import { RightHeader } from './components';
import Calendar from './components/Calendar';
import TimeTableModal from './components/TimeTableModal';
import WeeklyCalendar from './components/WeeklyCalendar';
import styles from './styles';
const Timetable = () => {
  
  const navigation = useNavigation();
  const [clearDate, setClearDate] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(undefined);
  const [selectedDate, setSelectedDate] = useState('');
  const [showWeek, setShowWeek] = useState(false);
  const [type, setType] = useState('W');
  const [modal, setModal] = React.useState(false);
  const [refreshed, setRefreshed] = React.useState(false);

  const {
    data: AlltimeTable,
    refetch: AllTimeTableRefetch,
    isFetching: AllTimeTableFetch,
    isLoading:AllTimeTableLoad
  } = useAllTimetableQuery({
  });

  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => (
        <RightHeader
          week={showWeek}
          setWeek={setShowWeek}
          type={type}
          setType={setType}
        />
      )
    });
    var dates = new Date();
    const formattedDateNext = dates.toISOString().split('T')[0];
    setSelectedDate(formattedDateNext);
  }, );

  const onDaySelected = (date: string) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = moment(date).format('YYYY-MM-DD');
      setSelectedDate(formattedDate);
    }
  };

  const onWeekChanged = (date: string) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
  };

  if(refreshed){
    AllTimeTableRefetch()
    setRefreshed(false)
  }

  if(AllTimeTableLoad || AllTimeTableFetch){
    return(
      <Spinner/>
    )
  }


  return (
    <Screen>
      <View style={styles.topContainer} />
      <View style={styles.calendarContainer}>
        {showWeek ? (
          <Calendar
            initialDate={new Date()}
            data={AlltimeTable}
            setSelectedDate={setSelectedDate}
            AllTimeTableFetch={AllTimeTableFetch}
            setRefresh={setRefreshed}
          />
        ) : (
          <WeeklyCalendar
            clearDate={clearDate}
            onDaySelected={onDaySelected}
            setDateSelection={setIsDateSelected}
            onWeekChanged={onWeekChanged}
            data={AlltimeTable}
            AllTimeTableFetch={AllTimeTableFetch}
            refetch={AllTimeTableRefetch}
            setRefresh={setRefreshed}
          />
        )}
      </View>

      {!modal ? (
        <View style={styles.containers}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModal(!modal);
            }}>
            <View style={styles.innerContainer}>
              <View style={styles.innerContainer2}>
                <Text style={styles.textWhite}>+</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}

      {modal ? (
        <TimeTableModal
         modalVisible={modal} 
         setModalVisible={setModal}
         refreshed={refreshed}
         setRefreshed={setRefreshed}
         />
      ) : null}
    </Screen>
  );
};

export default Timetable;
