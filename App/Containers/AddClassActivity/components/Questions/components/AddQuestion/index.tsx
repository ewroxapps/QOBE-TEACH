import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { RadioButton, Switch } from 'react-native-paper';
import { Attachment, Trash } from '../../../../../../Assets/SVGs';
import BlueUpload from '../../../../../../Assets/SVGs/BlueUpload';
import Upload from '../../../../../../Assets/SVGs/Upload';
import { Colors } from '../../../../../../Themes';
import styles from './styles';
const AddQuestion = () => {
    const [assmentMethod, setAssessmentMethod] = useState('');
    const [value, setValue] = useState('');
    const [attachment, setAttachment] = useState(false);
    const [upload, setUpload] = useState(false);
    const handleValueChange = (newValue: any) => {
        setValue(newValue);
    };
    return (
        <ScrollView>
           <View style={styles.container}>
           <View style={{ padding: 20 }}>
                    <Text style={styles.textStyle}>Name</Text>
                    <TextInput
                        placeholder={'e.g. Q1'}
                        style={styles.titletextInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <Text style={styles.textStyle}>Question (GuideLine for Questions)</Text>
                    <TextInput
                        multiline
                        style={styles.guidelineInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <Text style={styles.textStyle}>Answer Type</Text>
                    <View style={{ paddingLeft: 10 }}>
                        <RadioButton.Group onValueChange={setValue} value={value}>
                            <View style={styles.containers}>
                                <Text style={styles.radioText}>Set Text Answer</Text>
                                <RadioButton value="Text" status={value === 'Text' ? 'checked' : 'unchecked'} color={Colors.quizBlue} />
                            </View>
                            <View style={styles.containers}>
                                <Text style={styles.radioText}>Set Single Choice Answer</Text>
                                <RadioButton value="Single" status={value === 'Single' ? 'checked' : 'unchecked'} color={Colors.quizBlue} />
                            </View>
                            <View style={styles.containers}>
                                <Text style={styles.radioText}>Set Multiple Choice Answer</Text>
                                <RadioButton value="Multiple" status={value === 'Multiple' ? 'checked' : 'unchecked'} color={Colors.quizBlue} />
                            </View>
                        </RadioButton.Group>
                    </View>

                    <TextInput
                        placeholder={'Choice 1\nChoice 2\nChoice 3\nChoice 4\n\nAnswer:Choice 2'}
                        multiline
                        style={styles.choiceInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <View style={styles.onOffView}>
                        <Text style={styles.textStyle}>Set Attachment</Text>
                        <Switch value={attachment} color={Colors.quizBlue} onValueChange={() => {
                            setAttachment(!attachment)
                        }} />
                    </View>
                    <View style={styles.attachmentView}>
                        <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Attachment width={20} height={23} />
                            {upload ? (
                                <Text numberOfLines={3} style={styles.fileTxt}>File name can be as long as possible so i m typing bhoooooooooooooot sara to see kahan tk jata hhy</Text>
                            ) : null

                            }

                        </View>
                        {attachment ? (
                            <TouchableOpacity style={{ flexDirection: 'row', marginRight: 15, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
                                onPress={() => {
                                    setUpload(!upload)
                                }}>
                                {upload ? (
                                    <View style={{ flexDirection: 'row' }}>
                                        <Trash />
                                        <Text style={styles.removetxt}>Remove</Text>
                                    </View>
                                ) : (
                                    <View style={{ flexDirection: 'row' }}>
                                        <BlueUpload width={20} height={20} />
                                        <Text style={styles.blueuploadtxt}>Upload</Text>
                                    </View>
                                )

                                }


                            </TouchableOpacity>
                        ) :
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <Upload width={20} height={20} />
                                <Text style={styles.uploadtxt}>Upload</Text>
                            </View>
                        }


                    </View>


                    <Text style={styles.textStyle}>Max Marks</Text>
                    <TextInput
                        placeholder={'0'}
                        style={styles.titletextInput}
                        keyboardType="numeric"
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textStyle}>OBE Settings</Text>
                    </View>

                    <Text style={styles.textStyle}>OBE %</Text>
                    <TextInput
                        placeholder={'0.00'}
                        keyboardType="numeric"
                        style={styles.titletextInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <Text style={styles.textStyle}>Complexity</Text>
                    <TextInput
                        placeholder={''}
                        style={styles.titletextInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <Text style={styles.textStyle}>SLOs</Text>
                    <TextInput
                        placeholder={''}
                        style={styles.titletextInput}
                        value={assmentMethod}
                        onChangeText={value => setAssessmentMethod(value)} />

                    <View style={styles.onOffView}>
                        <Text style={styles.textStyle}>Not for OBE</Text>
                        <Switch value={attachment} color={Colors.quizBlue} onValueChange={() => {
                            setAttachment(!attachment)
                        }} /></View>
                </View>

                <View style={styles.onOffView}>
                    <TouchableOpacity
                        style={styles.addView}
                        onPress={() => {

                        }}>
                        <View>
                            <Text style={styles.whitetxt}>Add Next Item</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.saveView}
                        onPress={() => {

                        }}>
                        <View>
                            <Text style={styles.whitetxt}>Save Activity</Text>
                        </View>

                    </TouchableOpacity>

                </View>
           </View>
        </ScrollView>
    );
};
export default AddQuestion;
