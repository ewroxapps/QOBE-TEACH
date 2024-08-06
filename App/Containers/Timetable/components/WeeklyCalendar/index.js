// T2
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, FlatList,
  Modal,
  Platform,
  RefreshControl,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { EventItem } from '..';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import styles from './Style';
const WeeklyCalendar = props => {
  const [currDate, setCurrDate] = useState(moment());
  const [weekdays, setWeekdays] = useState([]);
  const [weekdayLabels, setWeekdayLabels] = useState([]);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [dateToShow, setDateToShow] = useState(undefined);
  const [isCalendarReady, setCalendarReady] = useState(false);
  const [pickerDate, setPickerDate] = useState(currDate.clone());
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [cancelText, setCancelText] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
 

  function anotherCheck() {
    if (props.data != undefined && selectedDate === undefined && !showComponent) {
      return true
    } else {
      return false
    }
  } 

  const onRefresh = () => {
    props.refetch();
  };

  function CheckBoxComponent() {
   if (selectedDate!=undefined && !showComponent){
    return true
  }else{
    return false
  }
}
  useEffect(() => {
    createWeekdays(currDate);
    setCalendarReady(true);
  }, []);

  useEffect(() => {
    if (props.clearDate) {
      clearDateSelection();
    }
  
  });

  useEffect(() => {
    if (props.data !== undefined && selectedDate !== undefined) {
      const date = new Date(selectedDate);
      const formattedDate = date.toISOString().split("T")[0];
      const newFilteredData = Object.entries(props.data).filter(
        ([date]) => date === formattedDate
      );
      setFilteredData(newFilteredData);
      setShowComponent(newFilteredData.length > 0);
    }
  }, [props.data, selectedDate])

  useEffect(() => {
    if (selectedDate) {
      setDateToShow(selectedDate);
    } else {
      setDateToShow(currDate);
    }
  }, [selectedDate]);

  const clearDateSelection = () => {
    setCalendarReady(false);
    setSelectedDate(undefined);
    props.setDateSelection(false);
    createWeekdays(currDate.clone(), {});
    setCalendarReady(true);
  };

  const createWeekdays = (date, map) => {
    setWeekdays([]);
    for (let i = 0; i < 7; i++) {
      const weekdayToAdd = date.clone().weekday(props.startWeekday - 7 + i);
      setWeekdays(weekdays => [...weekdays, weekdayToAdd]);
      setWeekdayLabels(weekdayLabels => [
        ...weekdayLabels,
        weekdayToAdd.format(props.weekdayFormat)
      ]);
    }
  };

  const clickLastWeekHandler = () => {
    setCalendarReady(false);
    const lastWeekCurrDate = currDate.subtract(7, 'days');
    props.onWeekChanged(lastWeekCurrDate);
    setCurrDate(lastWeekCurrDate.clone());
    setSelectedDate(undefined);
    props.setDateSelection(false);
    createWeekdays(lastWeekCurrDate.clone(), {});
    setCalendarReady(true);
    setShowComponent(false)
  };

  const clickNextWeekHandler = () => {
    setCalendarReady(false);
    const nextWeekCurrDate = currDate.add(7, 'days');
    props.onWeekChanged(nextWeekCurrDate);
    setCurrDate(nextWeekCurrDate.clone());
    setSelectedDate(undefined);
    props.setDateSelection(false);
    createWeekdays(nextWeekCurrDate.clone(), {});
    setCalendarReady(true);
    setShowComponent(false)
  };

  const isSelectedDate = date => {
    if (!selectedDate) return;
    if (!date) return Date.now();
    return (
      selectedDate.year() === date.year() &&
      selectedDate.month() === date.month() &&
      selectedDate.date() === date.date()
    );
  };

  const pickerOnChange = (_event, pickedDate) => {
    if (Platform.OS === 'android') {
      setPickerVisible(false);
      setLoading(true);
      if (pickedDate !== undefined) {
        // when confirm pressed
        setTimeout(() => {
          let pickedDateMoment = moment(pickedDate);
          setPickerDate(pickedDateMoment);
          confirmPickerHandler(pickedDateMoment);
          onDayPress(pickedDateMoment);
          setLoading(false);
        }, 0);
      } else setLoading(false);
    } else {
      onDayPress(pickedDateMoment);
      setPickerDate(moment(pickedDate));
    }
  };

  const confirmPickerHandler = pickedDate => {
    setCurrDate(pickedDate);
    setSelectedDate(pickedDate);
    props.setDateSelection(false);
    setCalendarReady(false);
    createWeekdays(pickedDate, {});
    setCalendarReady(true);

    setPickerVisible(false);
  };

  const onDayPress = weekday => {
    setSelectedDate(weekday.clone());
    if (props.onDaySelected !== undefined) {
      props.setDateSelection(true);
      props.onDaySelected(weekday.clone());
    } else {
      props.setDateSelection(false);
    }
  };

  function myDate(dateString) {
    const date = moment(dateString, 'YYYY-MM-DD');
    const formattedDay = date.format('dddd');
    const formattedDate = date.format('D MMMM');

    return `${formattedDay}, ${formattedDate}`;
  };

  function getScheduleItemCount(scheduleData, dateString) {

    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];

    if (scheduleData != undefined) {
      const scheduleItems = scheduleData[formattedDate] || [];
      return scheduleItems.length;
    } else {
      return null
    }


  }

  const rendering = (
      <View style={styles.week}>
      <View style={styles.weekdayLabelContainer}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[0])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[0], 0)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[0])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[0] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[0])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[0].date() : ''}
              </Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[0])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[0])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[0]) : ''}
            </Text>
          </View>
        </View>


        <View style={{ flex: 1, alignItems: 'center' }}>

          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[1])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[1], 1)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[1])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[1] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[1])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[1].date() : ''}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[1])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[1])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[1]) : ''}
            </Text>
          </View>
        </View>


        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[2])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[2], 2)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[2])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[2] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[2])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[2].date() : ''}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[2])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[2])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[2]) : ''}
            </Text>
          </View>
        </View>



        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[3])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[3], 3)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[3])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[3] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[3])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[3].date() : 'NaN'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[3])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[3])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[3]) : ''}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[4])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[4], 4)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[4])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[4] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[4])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[4].date() : ''}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[4])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[4])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[4]) : ''}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[5])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[5], 5)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[5])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[5] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[5])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[5].date() : ''}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[5])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[5])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[5]) : ''}
            </Text>
          </View>

        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              styles.weekdayLabel,
              isCalendarReady && isSelectedDate(weekdays[6])
                ? styles.selectedWeekdayLabel
                : {}
            ]}
            onPress={onDayPress.bind(this, weekdays[6], 6)}>
            <Text
              style={[
                styles.weekdayLabelText,
                isCalendarReady && isSelectedDate(weekdays[6])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {weekdays.length > 0 ? weekdayLabels[6] : ''}
            </Text>
            <View style={styles.weekDayNumber}>
              <Text
                style={[
                  isCalendarReady && isSelectedDate(weekdays[6])
                    ? styles.selectedDayText
                    : {}
                ]}>
                {isCalendarReady ? weekdays[6].date() : ''}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.innerContainer, isCalendarReady && isSelectedDate(weekdays[6])
            ? styles.innerContainer2 : {}]}>
            <Text
              style={[
                isCalendarReady && isSelectedDate(weekdays[6])
                  ? styles.selectedDayText
                  : {}
              ]}>
              {isCalendarReady ? getScheduleItemCount(props.data, weekdays[6]) : ''}
            </Text>
          </View>
        </View>
      </View>

    </View>
    )
  


  return (
    <View style={[styles.component]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={clickLastWeekHandler}>
          <VectorIcons
            name="chevron-thin-left"
            size={16}
            iconType={ICON_TYPES.Entypo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPickerVisible(true)}
          style={styles.titleContainer}>
          <Timetable />
          <Text style={[styles.title, props.titleStyle]}>
            {dateToShow
              ? isCalendarReady &&
              `${dateToShow.clone().get('D')} ${dateToShow
                .clone()
                .format('MMMM')}, ${dateToShow.clone().format('YYYY')}`
              : `${moment().get('D')} ${moment().format(
                'MMMM'
              )}, ${moment().format('YYYY')}`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={clickNextWeekHandler}>
          <VectorIcons
            name="chevron-thin-right"
            size={16}
            iconType={ICON_TYPES.Entypo}
          />
        </TouchableOpacity>
      </View>
   

      {Platform.OS === 'ios' && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isPickerVisible}
          onRequestClose={() => setPickerVisible(false)} // for android only
          style={styles.modal}>
          <TouchableWithoutFeedback onPress={() => setPickerVisible(false)}>
            <View style={styles.blurredArea} />
          </TouchableWithoutFeedback>
          <View style={styles.pickerButtons}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setPickerVisible(false)}>
              <Text style={styles.modalButtonText}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={confirmPickerHandler.bind(this, pickerDate)}>
              <Text style={styles.modalButtonText}>{confirmText}</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            locale={props.locale}
            value={pickerDate.toDate()}
            onChange={pickerOnChange}
            style={styles.picker}
          />
        </Modal>
      )}
      {Platform.OS === 'android' && isPickerVisible && (
        <DateTimePicker
          locale={props.locale}
          value={pickerDate.toDate()}
          onChange={pickerOnChange}
        />
      )}
      {(!isCalendarReady || isLoading) && (
        <ActivityIndicator size="large" color="grey" style={styles.indicator} />
      )}

        {anotherCheck() && (
         <View>
         <FlatList
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={false} />
          }
          refreshing={props.AllTimeTableFetch}
          data={Object.entries(props.data)
            .sort((a, b) => new Date(b[0]) - new Date(a[0]))
            .filter(([date]) => {
              // Filter events to include only those within the current week's dates
              const eventDate = new Date(date);
              return (
                eventDate >= currDate.clone().startOf('week') &&
                eventDate <= currDate.clone().endOf('week')
              );
            })}
           keyExtractor={(item) => item[0]}
           renderItem={({ item,index }) => {
             return (
               <View>
                 <View>
                   <View style={styles.dateContainer}>
                     <Text style={styles.dateText}>{myDate(item[0])}</Text>
                   </View>
                   {item[1].map((scheduleItem) => (
                     <EventItem 
                       date={item[0]}
                       data={scheduleItem} 
                       index={index} 
                       setRefreshed={props.setRefresh}
                       />
                   ))}
                 </View>
               </View>
             );
           }}
           ListHeaderComponent={()=>(
            <>
        
            {rendering}
            <Text style={[styles.headingstyle,{marginTop:10}]}>Event this week</Text>
            </>
           )}
         />
       </View>
       
        )
        }

        {showComponent && (
          <FlatList
            data={filteredData}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            refreshing={props.AllTimeTableFetch}
            keyExtractor={(item) => item[0]}
            renderItem={({ item,index }) => {
              return (
                <View>
                  <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{myDate(item[0])}</Text>
                  </View>
                  {item[1].map((scheduleItem) => (
                     <EventItem 
                     date={item[0]}
                     data={scheduleItem} 
                     index={index} 
                     setRefreshed={props.setRefresh}/>
                  ))}
                </View>
              );
            }}
            ListHeaderComponent={()=>(
              <>
          
              {rendering}
              <Text style={styles.headingstyle}>Event this week</Text>
              </>
             )}
          />
        )

        }
        {CheckBoxComponent() &&(
          <View>
            {rendering}
          <View style={{justifyContent:'center',alignItems:'center',marginTop:120}}>
             <Text style={styles.dateText}>No Event Found</Text>
            </View>
            </View>
         
        )

        }

    </View>
  );
};

WeeklyCalendar.propTypes = {
  /** initially selected day */
  selected: PropTypes.any,
  /** If firstDay = 1, week starts from Monday. If firstDay = 7, week starts from Sunday. */
  startWeekday: PropTypes.number,
  /** Set format to display title (e.g. titleFormat='MMM YYYY' displays "Jan 2020") */
  titleFormat: PropTypes.string,
  /** Set format to display weekdays (e.g. weekdayFormat='dd' displays "Mo" and weekdayFormat='ddd' displays "Mon") */
  weekdayFormat: PropTypes.string,
  /** Set locale (e.g. Korean='ko', English='en', Chinese(Mandarin)='zh-cn', etc.) */
  locale: PropTypes.string,
  /** Set list of events you want to display below weekly calendar.
   * Default is empty array []. */
  events: PropTypes.array,
  /** Specify how each event should be rendered below weekly calendar. Event & index are given as parameters. */
  renderEvent: PropTypes.func,
  /** Specify how first event should be rendered below weekly calendar. Event & index are given as parameters. */
  renderFirstEvent: PropTypes.func,
  /** Specify how last event should be rendered below weekly calendar. Event & index are given as parameters. */
  renderLastEvent: PropTypes.func,
  /** Specify how day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. */
  renderDay: PropTypes.func,
  /** Specify how first day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. */
  renderFirstDay: PropTypes.func,
  /** Specify how last day should be rendered below weekly calendar. Event Views, day (Moment object), index are given as parameters. */
  renderLastDay: PropTypes.func,
  /** Handler which gets executed on day press. Default = undefined */
  onDayPress: PropTypes.func,
  /** Set theme color */
  themeColor: PropTypes.string,
  /** Set style of component */
  style: PropTypes.any,
  /** Set text style of calendar title */
  titleStyle: PropTypes.any,
  /** Set text style of weekday labels */
  dayLabelStyle: PropTypes.any,
  /** Action on day pressed */
  onDaySelected: PropTypes.any,
  /** Action if date selected */
  setDateSelection: PropTypes.any,
  /** Action if week changed */
  onWeekChanged: PropTypes.any,
  /** Clear date */
  clearDate: PropTypes.bool,

  data: PropTypes.any,

  AllTimeTableFetch:PropTypes.any,

  refetch:PropTypes.any,

  setRefresh:PropTypes.any

};

WeeklyCalendar.defaultProps = { 
  // All props are optional
  selected: moment(),
  startWeekday: 7,
  titleFormat: undefined,
  weekdayFormat: 'ddd',
  locale: 'en',
  events: [],
  renderEvent: undefined,
  renderFirstEvent: undefined,
  renderLastEvent: undefined,
  renderDay: undefined,
  renderFirstDay: undefined,
  renderLastDay: undefined,
  onDayPress: undefined,
  onDaySelected: undefined,
  setDateSelection: undefined,
  themeColor: '#46c3ad',
  style: {},
  titleStyle: {},
  dayLabelStyle: {}
};

export default WeeklyCalendar;
