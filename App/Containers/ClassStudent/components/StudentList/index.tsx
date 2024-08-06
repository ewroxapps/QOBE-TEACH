import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { StudentListProps } from './types';
const StudentList = (props: StudentListProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [click, setClick] = useState(false);
    console.debug(props)
    return (
        <View style={styles.Container}>
            <TouchableOpacity
                onPress={() => { setClick(!click) }}>
                <View style={styles.topContainer}>
                    <View style={styles.textView}>
                        <Text style={styles.textWhite}>{props.data.name}</Text>
                    </View>
                    <View style={[styles.textView,{alignItems:'center', left:20}]}>
                        <Text style={styles.textWhite}>{props.data.reg_no}</Text>
                    </View>
                    {/*   <View style={styles.textView}>
                        <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
                            <MenuTrigger
                                onPress={() => setMenuOpen(true)}
                                customStyles={{
                                    TriggerTouchableComponent: TouchableOpacity
                                }}>
                                <TouchableOpacity
                                    style={[styles.unclickedConfig]}
                                    onPress={() => {
                                        setMenuOpen(!menuOpen)

                                    }}>
                                    <Verticaldots width={18} height={18} style={{ marginTop: -5 }} />
                                </TouchableOpacity>
                            </MenuTrigger>
                            <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
                                <Text style={styles.textColor} >Select</Text>
                                <MenuOption style={styles.menuOptionContainer}>
                                    <EditBlack width={15} />
                                    <Text style={styles.textColor} >Update"</Text>
                                </MenuOption>
                                <MenuOption style={styles.menuOptionContainer}>
                                    <Trash width={18} />
                                    <Text style={styles.deleteAll}>Delete</Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>

                    </View> */}
                  
                </View>
            </TouchableOpacity>
            {click ? (
                <View style={styles.clickView}>
                    <View>
                        <Text style={styles.heading}>Program Batch</Text>
                        <Text style={styles.discription}>{props.data.program_batch}</Text>
                    </View>
                    <ScrollView horizontal={true} style={{padding:5,paddingLeft:-5}}>
                    <View style={styles.spaceBetweenView}>
                        <View style={styles.innerSpaceView}>
                            <Text style={styles.heading}>Section</Text>
                            <Text style={styles.discription}>{props.data.section}</Text>
                        </View>
                        <View style={styles.innerSpaceView}>
                            <Text style={styles.heading}>Use in OBE</Text>
                            <Text style={styles.discription}>{props.data.include_obe ==='0' ?'No':'Yes'}</Text>
                        </View>
                        <View style={styles.innerSpaceView}>
                            <Text style={styles.heading}>Status</Text>
                            <Text style={styles.discription}>{props.data.status}</Text>
                        </View>
                        <View style={styles.innerSpaceView}>
                            <Text style={styles.heading}>Grade</Text>
                            <Text style={styles.discription}>{props.data.grade}</Text>
                        </View>
                        <View style={styles.innerSpaceView}>
                            <Text style={styles.heading}>Score/GPA</Text>
                            <Text style={styles.discription}>{props.data.gpa}</Text>
                        </View>
                    </View>
                    </ScrollView>

                    <View style={{marginTop:10}}>
                        <Text style={styles.heading}>Remarks</Text>
                        <Text style={styles.discription}>{props.data.remarks}</Text>
                    </View>
                </View>
            ) : null

            }
        </View>
    );
};

export default StudentList;
