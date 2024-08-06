import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { EventItem } from '..';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { VectorIcons } from '../../../../Components';
import { ICON_TYPES } from '../../../../Components/VectorIcons/VectorIcons';
import styles from './styles';
import { CalendarProps } from './types';
const Calendar = (props: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(props.initialDate);
  const [myday, setMyDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredData, setFilteredData] = useState<[string, ScheduleItem[]][]>(
    []
  );
  const [showComponent, setShowComponent] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [highlightedDates, setHighlightedDates] = useState<string[]>([]);
  const [buttton, setButton] = useState(false);

  const generateHighlightedDates = () => {
    const year = new Date().getFullYear();
    const month = currentMonth;

    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const highlightedDates = [];
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const formattedDate = date.toISOString().split('T')[0];
      if (formattedDate in props.data) {
        highlightedDates.push(formattedDate);
      }
    }

    setHighlightedDates(highlightedDates);
  };
  React.useEffect(() => {
    if (props.data != undefined) {
      generateHighlightedDates();
    }
  }, [currentMonth, props.data]);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const nextDate = new Date(currentDate); // Create a new date object

  if (buttton) {
    nextDate.setDate(nextDate.getDate() + 1);
    const formattedDateNext = nextDate.toISOString().split('T')[0];
    props.setSelectedDate(formattedDateNext);
  } else {
    nextDate.setDate(nextDate.getDate());
    const formattedDateNext = nextDate.toISOString().split('T')[0];
    props.setSelectedDate(formattedDateNext);
  }

  const dateSelect = (selectedDate: number) => {
    selectedDate = selectedDate + 1;
    setButton(false);
    const selectedYear = currentDate.getFullYear();
    const selectedMonth = currentDate.getMonth();
    const newDate = new Date(selectedYear, selectedMonth, selectedDate);

    // Adjust for the time zone offset
    const timeZoneOffsetInMinutes = newDate.getTimezoneOffset();
    const adjustedDate = new Date(
      newDate.getTime() + timeZoneOffsetInMinutes * 60 * 1000
    );

    const formattedDate = adjustedDate.toISOString().split('T')[0];

    setSelectedDate(formattedDate);
    setMyDay(adjustedDate.getDate());
    setCurrentDate(adjustedDate);
  };

  useEffect(() => {
    if (props.data != undefined && selectedDate != '') {
      const date = new Date(selectedDate);
      const formattedDate = date.toISOString().split('T')[0];
      const newFilteredData: [string, ScheduleItem[]][] = Object.entries(
        props.data
      ).filter(([date]) => date === formattedDate);
      setFilteredData(newFilteredData);
      setShowComponent(newFilteredData.length > 0);
    }
  }, [props.data, selectedDate]);

  function anotherCheck() {
    if (props.data != undefined && selectedDate === '') {
      return true;
    } else {
      return false;
    }
  }

  function CheckBoxComponent() {
    if (selectedDate != '' && !showComponent) {
      return true;
    } else {
      return false;
    }
  }
  const previousMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonth = prevDate.getMonth();
      const prevYear = prevDate.getFullYear();
      return new Date(prevYear, prevMonth - 1, 1);
    });
    setMyDay(0);
    setButton(true);
  };

  const handleMonthChange = (next: boolean) => {
    setCurrentMonth(prevMonth => {
      const newMonth = next ? prevMonth + 1 : prevMonth - 1;
      return newMonth < 0 ? 11 : newMonth % 12;
    });
  };

  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 1;
      const nextYear = prevDate.getFullYear();

      return new Date(nextYear, nextMonth, 1);
    });
    setButton(true);
    setMyDay(0);
  };

  function presentorNOT(year: number, month: number, day: number) {
    const myMonth = (month + 1).toString().padStart(2, '0'); // Ensure two-digit month
    const myDay = day.toString().padStart(2, '0'); // Ensure two-digit day
  
    const formattedDate = `${year}-${myMonth}-${myDay}`;
    const isDateHighlighted = highlightedDates.includes(formattedDate);
  
    if (isDateHighlighted) {
      return true;
    } else {
      return false;
    }
  }
  

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return new Date(year, month, 0).getDate();
  };

  const renderCalendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = getDaysInMonth(currentDate);

    const calendar = [];

    // Render days of the week (Sun, Mon, Tue, ...)
    const weekdaysRow = (
      <View style={styles.row} key="weekdays">
        {daysOfWeek.map(day => (
          <Text
            style={[
              styles.weekday,
              day === 'Sun' && styles.sundayDate,
              day === 'Sat' && styles.sundayDate
            ]}
            key={day}>
            {day}
          </Text>
        ))}
      </View>
    );

    calendar.push(weekdaysRow);

    // Render dates of the month
    const startDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    let week = [];
    for (let i = 0; i < startDay; i++) {
      week.push(
        <View style={styles.dateContainer} key={`empty-${i}`}>
          <Text style={styles.emptyCell} />
        </View>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      ).getDay();
      const dateCell = (
        <View style={styles.dateContainer} key={`day-${day}`}>
          <View
            style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
            <TouchableOpacity
              onPress={() => {
                dateSelect(day);
              }}
              style={[styles.normalCircle, myday === day && styles.dateCircle]}>
              <Text
                style={[
                  styles.dateCell,
                  dayOfWeek === 0 && styles.sundayDate,
                  dayOfWeek === 6 && styles.sundayDate
                ]}>
                {day}
              </Text>
              {presentorNOT(year, month, day) ? (
                <View style={styles.classs} />
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      );
      week.push(dateCell);

      if (week.length === 7) {
        calendar.push(
          <View style={styles.row} key={`week-${day}`}>
            {week}
          </View>
        );
        week = [];
      }
    }

    if (week.length > 0) {
      // Add empty cells to complete the last week
      while (week.length < 7) {
        week.push(
          <View style={styles.dateContainer} key={`empty-${week.length}`}>
            <Text style={styles.emptyCell} />
          </View>
        );
      }

      calendar.push(
        <View style={styles.row} key={`week-${daysInMonth}`}>
          {week}
        </View>
      );
    }

    return calendar;
  };

  function myDate(dateString: any) {
    const date = moment(dateString, 'YYYY-MM-DD');
    const formattedDay = date.format('dddd');
    const formattedDate = date.format('D MMMM');

    return `${formattedDay}, ${formattedDate}`;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => {
            handleMonthChange(false);
            previousMonth();
          }}>
          <VectorIcons
            name="chevron-thin-left"
            size={16}
            iconType={ICON_TYPES.Entypo}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Timetable />

          <Text style={styles.heading}>{formattedDate}</Text>
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => {
            nextMonth();
            handleMonthChange(true);
          }}>
          <VectorIcons
            name="chevron-thin-right"
            size={16}
            iconType={ICON_TYPES.Entypo}
          />
        </TouchableOpacity>
      </View>

      {anotherCheck() && (
        <FlatList
          refreshing={props.AllTimeTableFetch}
          data={Object.entries(props.data)
            .sort((a, b) => {
              const dateA = new Date(a[0]);
              const dateB = new Date(b[0]);
              return dateB.getTime() - dateA.getTime();
            })
            .map(([date, scheduleItems]) => ({ date, scheduleItems }))}
          ListHeaderComponent={() => (
            <>
              <View style={styles.con}>{renderCalendar()}</View>
              <Text style={[styles.headingstyle, { marginTop: 10 }]}>
                Event this month
              </Text>
            </>
          )}
          keyExtractor={item => item.date}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText]}>{myDate(item.date)}</Text>
              </View>
              {item.scheduleItems.map((scheduleItem: ScheduleItem) => (
                <EventItem
                  date={item.date}
                  index={index}
                  data={scheduleItem}
                  setRefreshed={props.setRefresh}
                />
              ))}
            </View>
          )}
        />
      )}

      {showComponent && (
        <FlatList
          refreshing={props.AllTimeTableFetch}
          data={filteredData}
          keyExtractor={item => item[0]}
          ListHeaderComponent={() => (
            <>
              <View style={styles.con}>{renderCalendar()}</View>
              <Text style={[styles.headingstyle, { marginTop: 10 }]}>
                Event this month
              </Text>
            </>
          )}
          renderItem={({ item, index }) => {
            return (
              <View>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{myDate(item[0])}</Text>
                </View>
                {item[1].map(scheduleItem => (
                  <EventItem
                    date={item[0]}
                    index={index}
                    data={scheduleItem}
                    setRefreshed={props.setRefresh}
                  />
                ))}
              </View>
            );
          }}
        />
      )}

      {CheckBoxComponent() && (
        <View>
          <View style={styles.con}>{renderCalendar()}</View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 120
            }}>
            <Text style={styles.dateText}>No Event Found</Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default Calendar;
