import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RadioButton, Switch } from 'react-native-paper';
import { EmptyCalendar } from '../../../../Assets/SVGs';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';
import style from './style';
const UpdateCourse = (props:any) => {
    const data:CourseDetails = props.route.params.data
    const [value, setValue] = useState(data.online_status === "1" ? "Open" : "Incomplete");
    const [school, setSchool] = useState(data.department);
    const [semester, setSemester] = useState(data.semester);
    const [course, setCourse] = useState(data.course);
    const [teacher, setTeacher] = useState(data.teacher);
    const [name, setName] = useState(data.name);
    const [section, setSection] = useState(data.section);
    const [marks, setMarks] = useState(data.per_marks.toString());
    const [student, setStudent] = useState(data.per_student.toString());
    const [seats, setSeats] = useState(data.seating.toString());
    const [useInObe, setUseInObe] = useState(data.include === "1" ? true : false)
    const [useInGpa, setUseInGpa] = useState(data.include_gpa === "1" ? true : false)
    const [connectedCourse, setConnectedCourse] = useState<any[]>([data.connected_class]);
    const [WhatsApp, setWhatsapp] = useState(data.whatsapp_grp);
    const [startDate, setStartDate] = useState(data.st_date);
    const [endDate, setEndDate] = useState(data.en_date);
    const [notes, setNotes] = useState(data.notes);
    const [dates, setDates] = useState(new Date());
    const [datee, setDatee] = useState(new Date());
    const [showstartDatePicker, setstartShowDatePicker] = useState(false);
    const [showsendDatePicker, setendShowDatePicker] = useState(false);
    
    const handleDateChangeStart = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || dates;
        setstartShowDatePicker(Platform.OS === 'ios');
        setDates(currentDate);
        setStartDate(dates.toISOString().substring(0,10))
    };
    const handleDateChangeEnd = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || datee;
        setendShowDatePicker(Platform.OS === 'ios');
        setDatee(currentDate);
        setEndDate(datee.toISOString().substring(0,10))
        if (currentDate < dates) {
            setDatee(dates);
            ToastAndroid.showWithGravity(
                "End Date should be greater than start date",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
          }
    };

    const showDatepickerStart = () => {
        setstartShowDatePicker(true);
    };
    const showDatepickerEnd = () => {
        setendShowDatePicker(true);
    };
    const handleValueChange = (newValue: any) => {
        setValue(newValue);
    };

    function handleInputChange(value: string) {
        // Convert the string value to an array using the delimiter of your choice
        const newValue = value.split(',');
    
        // Update the state with the new array value
        setConnectedCourse(newValue);
      }
    return (
        <View style={style.mainContainer}>
            <ScrollView>
                <View>
                    <Text style={style.textStyle}>School</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={school}
                        onChangeText={value => setSchool(value)} />

                    <Text style={style.textStyle}>Semester</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={semester}
                        onChangeText={value => setSemester(value)} />

                    <Text style={style.textStyle}>Course</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={course}
                        onChangeText={value => setCourse(value)} />

                    <Text style={style.textStyle}>Teacher</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={teacher}
                        onChangeText={value => setTeacher(value)} />
                    <View
                        style={{
                            borderBottomColor: '#F1F5F9',
                            borderBottomWidth: 1,
                            marginTop: 30,
                            marginBottom: 25
                        }}
                    />

                    <Text style={style.textStyle}>Name</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={name}
                        onChangeText={value => setName(value)} />

                    <Text style={style.textStyle}>Section</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={section}
                        onChangeText={value => setSection(value)} />



                    <Text style={style.textStyle}>Status</Text>
                    <View style={style.statusView}>
                        <View style={style.innerStatus}>
                            <RadioButton value="Open" color={Colors.quizBlue} onPress={() => handleValueChange('Open')} status={value === 'Open' ? 'checked' : 'unchecked'} />
                            <Text style={style.textStyle}>Open</Text>
                        </View>
                        <View style={style.innerStatus}>
                            <RadioButton value="Finished" color={Colors.quizBlue} onPress={() => handleValueChange('Finished')} status={value === 'Finished' ? 'checked' : 'unchecked'} />
                            <Text style={style.textStyle}>Finished</Text>
                        </View>
                        <View style={style.innerStatus}>
                            <RadioButton value="Incomplete" color={Colors.quizBlue} onPress={() => handleValueChange('Incomplete')} status={value === 'Incomplete' ? 'checked' : 'unchecked'} />
                            <Text style={style.textStyle}>Incomplete</Text>
                        </View>

                    </View>



                    <View style={style.statusView}>
                        <View style={style.centerView}>
                            <Text style={style.textStyle}>Marks %</Text>
                            <TextInput
                                keyboardType="numeric"
                                style={style.titletextInput1}
                                value={marks}
                                onChangeText={value => setMarks(value)} />
                        </View>

                        <View style={style.centerView}>
                            <Text style={style.textStyle}>Student %</Text>
                            <TextInput
                                keyboardType="numeric"
                                style={style.titletextInput1}
                                value={student}
                                onChangeText={value => setStudent(value)} />
                        </View>
                        <View style={style.centerView}>
                            <Text style={style.textStyle}>Seats %</Text>
                            <TextInput
                                keyboardType="numeric"
                                style={style.titletextInput1}
                                value={seats}
                                onChangeText={value => setSeats(value)} />
                        </View>
                    </View>

                    <View style={style.onOffView}>
                        <Text style={style.textStyle}>Use in OBE</Text>
                        <Switch value={useInObe} color={colors.quizBlue} onValueChange={() => {
                            setUseInObe(!useInObe)
                        }} />
                    </View>

                    <View style={style.onOffView}>
                        <Text style={style.textStyle}>Use in GPA</Text>
                        <Switch value={useInGpa} color={colors.quizBlue} onValueChange={() => {
                            setUseInGpa(!useInGpa)
                        }} />
                    </View>
                    <Text style={style.textStyle}>Connected Course Section</Text>
                    <TextInput
                        style={style.titletextInput}
                        value={connectedCourse.join(',')} 
                        onChangeText={handleInputChange} />

                    <Text style={style.textStyle}>WhatsApp Group</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={style.titletextInput}
                        value={WhatsApp}
                        onChangeText={value => setWhatsapp(value)} />

                    <View
                        style={{
                            borderBottomColor: '#F1F5F9',
                            borderBottomWidth: 1,
                            marginTop: 30,
                            marginBottom: 25
                        }}
                    />
                    <Text style={style.textStyle}>Start Date</Text>
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


                    <Text style={style.textStyle}>End Date</Text>
                    <TouchableOpacity
                        onPress={() => {
                            showDatepickerEnd()
                        }}
                        style={style.dateView}>
                         {endDate === '' ? (
                            <Text style={style.dateText}>dd-mm-yy</Text>
                        ) : (
                            <Text style={style.dateText}>{endDate}</Text>
                        )

                        }
                        <EmptyCalendar width={20} />
                    </TouchableOpacity>
                    {showsendDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={datee}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChangeEnd}
                        />
                    )}


                    <View
                        style={{
                            borderBottomColor: '#F1F5F9',
                            borderBottomWidth: 1,
                            marginTop: 30,
                            marginBottom: 25
                        }}
                    />
                    <Text style={style.textStyle}>Notes</Text>
                    <TextInput
                        style={style.notestitletextInput}
                        multiline
                        value={notes}
                        onChangeText={value => setNotes(value)} />


                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{ flex: 1, backgroundColor: '#16A34A', paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
                            <Text style={{ color: Colors.backgroundWhite }}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};
export default UpdateCourse;
