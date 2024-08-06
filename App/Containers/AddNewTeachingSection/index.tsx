import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { EmptyCalendar } from '../../Assets/SVGs';
import WhiteDropDown from '../../Assets/SVGs/WhiteDropDown';
import { MenuList } from '../ClassStudent/components/RightHeader/components/EnrollModal/components';
import { ClassActivity, Header } from './component';
import style from './styles';

const AddNewTeachingSection = ( props: any) => {
    var header = props.route.params.heading
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [topic, setTopic] = useState('');
    const [link, setLink] = useState('');
    const [comments, setComments] = useState('');
    const [startDate, setStartDate] = useState<string | undefined>();
    const [endDate, setEndDate] = useState<string | undefined>();
    const [dates, setDates] = useState<Date>(new Date());
    const [datee, setDatee] = useState<Date>(new Date());
    const [showstartDatePicker, setstartShowDatePicker] = useState(false);
    const [showsendDatePicker, setendShowDatePicker] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpens, setMenuOpens] = useState(false);
    const dummyData = [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },];

    const handleDateChangeStart = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || dates;
        setstartShowDatePicker(Platform.OS === 'ios');
        setDates(currentDate);
        setStartDate(dates.toISOString().substring(0, 10))
    };
    const handleDateChangeEnd = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || datee;
        setendShowDatePicker(Platform.OS === 'ios');
        setDatee(currentDate);
        setEndDate(datee.toISOString().substring(0, 10))
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
    const changeHeaderTitle = () => {
        navigation.setOptions({
            headerTitle: () =>
                <Header
                  name ={header} 
                />
        });
    };

    useEffect(() => {
        changeHeaderTitle()
    },);
    return (
        <ScrollView style={style.container}>
            <Text style={style.textStyle}>Name</Text>
            <TextInput
                style={style.titletextInput}
                value={name}
                onChangeText={value => setName(value)} />

            <Text style={style.textStyle}>Subject</Text>
            <TextInput
                style={style.titletextInput}
                value={subject}
                onChangeText={value => setSubject(value)} />

            <View style={style.justyView}>
                <View style={{ flex: 1, margin: 5 }}>
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

                </View>
                <View style={{ flex: 1, margin: 5 }}>
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
                </View>
            </View>

            <Text style={style.textStyle}>Youtube Link</Text>
            <TextInput
                style={style.titletextInput}
                value={link}
                onChangeText={value => setLink(value)} />


            <Text style={style.textStyle}>Topic</Text>
            <TextInput
                style={style.titletextInput1}
                value={topic}
                onChangeText={value => setTopic(value)} />

            <Text style={style.textStyle}>Comment</Text>
            <TextInput
                style={style.titletextInput1}
                value={comments}
                onChangeText={value => setComments(value)} />


           

            <View style={{marginTop:10}}>
                <Text style={style.text}>SLOs</Text>
                <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                    <View style={style.dropdown}>
                        <WhiteDropDown />
                    </View>
                </TouchableOpacity>
                {menuOpen ? (
                    <FlatList
                        data={dummyData}
                        style={style.flatList}
                        renderItem={({ item }) => (
                            <MenuList
                                data={item.label}
                                from={"Enroll"}
                            />
                        )}
                    />
                ) : null

                }
            </View>

            <View style={{marginTop:10}}>
                <Text style={style.text}>Class Activities</Text>
                <TouchableOpacity onPress={() => setMenuOpens(!menuOpens)}>
                    <View style={style.dropdown}>
                        <WhiteDropDown />
                    </View>
                </TouchableOpacity>
                {menuOpens ? (
                    <FlatList
                        data={dummyData}
                        style={style.flatList}
                        renderItem={({ item }) => (
                            <MenuList
                                data={item.label}
                                from={"Enroll"}
                            />
                        )}
                    />
                ) : null

                }
            </View>
            <ClassActivity
                activityname={"Online Assignment"}
            />
            <ClassActivity
                activityname={"Assignment"}
            />
            <TouchableOpacity style={{marginBottom:20}} >
                <View style={style.saveButton}>
                    <Text style={style.whiteTxt}>Save</Text>
                </View>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default AddNewTeachingSection;
