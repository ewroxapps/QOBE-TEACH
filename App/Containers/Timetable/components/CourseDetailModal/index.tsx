import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle, } from '../../../../Assets/SVGs';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import style from './styles';
import { DetailProps } from './types';
const CourseDetailModal = (props: DetailProps) => {
    let teacherName: string;
    if (typeof props.data.teacher === 'string') {
      teacherName = props.data.teacher;
    } else if ('name' in props.data.teacher) {
      teacherName = props.data.teacher.name;
    } else {
      teacherName = 'Unknown';
    }
    return (
        <Modal
            isVisible={props.modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.7}
            onBackButtonPress={() => {
                props.setModalVisible(false)

            }}>
            <View style={style.container}>

                <View style={style.topRowContainer}>
                    <Text style={style.heading}>Course Details</Text>
                    <View style={style.closeButtonContainer}>
                        <TouchableOpacity onPress={() => {
                            props.setModalVisible(false)

                        }}>
                            <CloseCircle />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.cont}>
                    <View style={style.rightContainer}>
                        {props.data.type === 'O' ? (
                            <View>
                                {props.data.teacher.img ? (
                                    <Image
                                        source={{
                                            uri: `${BASE_URL}${props.data.teacher.img}`
                                        }}
                                        defaultSource={Images.profilePlaceholder}
                                        style={style.profile}
                                    />
                                ) : (
                                    <Image
                                        source={Images.profilePlaceholder}
                                        style={style.profile}
                                    />
                                )}


                            </View>
                        ) : (
                            <View>
                                {props.data.dp ? (
                                    <Image
                                        source={{
                                            uri: `${BASE_URL}${props.data.dp}`
                                        }}
                                        defaultSource={Images.profilePlaceholder}
                                        style={style.profile}
                                    />
                                ) : (
                                    <Image
                                        source={Images.profilePlaceholder}
                                        style={style.profile}
                                    />
                                )}


                            </View>
                        )

                        }

                        <View style={{flex:1}}>
                            
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Course:</Text>
                                <Text style={style.text2}>{props.data.course}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Code:</Text>
                                <Text style={style.text2}>{props.data.name}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Teacher:</Text>
                                <Text style={style.text2}>{teacherName}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Topic:</Text>
                                <Text style={style.text2}>{props.data.topic}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Status:</Text>
                                <Text style={style.text2}>{props.data.status}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Is Online:</Text>
                                <Text style={style.text2}>{props.data.isonline}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Class:</Text>
                                <Text style={style.text2}>{props.data.class}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Slot:</Text>
                                <Text style={style.text2}>{props.data.slot}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Time:</Text>
                                <Text style={style.text2}>{props.data.time}</Text>
                            </View>
                            <View style={style.rowCont}>
                                <Text style={style.text1}>Type:</Text>
                                <Text style={style.text2}>{props.data.type === "C" ? 'Regular' : "Extra"}</Text>
                            </View>
                            
                        </View>
                    </View>

                </View>

            </View>
        </Modal>
    );
};
export default CourseDetailModal;
