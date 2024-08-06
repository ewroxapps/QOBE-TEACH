import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton, Switch } from 'react-native-paper';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import BlueDownload from '../../../../Assets/SVGs/BlueDownload';
import RightHandler from '../../../../Assets/SVGs/RightHandler';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { ClickProps } from './types';
const RightClick = (props:ClickProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState('');
  const [weights, setWeights] = useState('');
  const [attachment, setAttachment] = useState(false);
  return (
    // @ts-ignore
    <View>
      <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
        <MenuTrigger
          onPress={() => setMenuOpen(true)}
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity
          }}>
          <TouchableOpacity
            style={styles.unclickedConfig}
            onPress={() => {
              setMenuOpen(!menuOpen);
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 5,
                paddingRight: 5,
                right: 10
              }}>
              <RightHandler width={18} height={18} />
            </View>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>

          
          <View
            style={{ flexDirection: 'row', marginTop: 5, marginBottom: 15 }}>
            <Text style={styles.textColor}>Marks</Text>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <RadioButton.Group onValueChange={(newValue) => {
              setValue(newValue)
              if(newValue === 'Without Marks'){
                props.setMarks(false)
              }else{
                props.setMarks(true)
              }
            }
                   
            } value={value}>
              <View style={styles.containers}>
                <RadioButton
                  value="Without Marks"
                  status={value === 'Without Marks' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={styles.radioText}>Without Marks</Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="With Marks"
                  status={value === 'With Marks' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right: 50 }]}>
                  With Marks
                </Text>
              </View>
            </RadioButton.Group>
          </View>


          <View
            style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}>
            <Text style={styles.textColor}>Weights</Text>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <RadioButton.Group  onValueChange={(newValue) => {
              setWeights(newValue)
              if(newValue === 'Both'){
                props.setGender('Both')
              }else if(newValue === 'Male'){
                props.setGender("Male")
              }else{
                props.setGender("Female")
              }
            }
                   
            }  value={weights}>
              <View style={styles.containers}>
                <RadioButton
                  value="Both"
                  status={weights === 'Both' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText,{right:91, top:5}]}>Both</Text>
              </View>
              <View style={styles.containers}>
                <RadioButton
                  value="Male"
                  status={weights === 'Male' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right:88,top:5 }]}>
                Male
                </Text>
              </View>

              <View style={styles.containers}>
                <RadioButton
                  value="Female"
                  status={weights === 'Female' ? 'checked' : 'unchecked'}
                  color={Colors.quizBlue}
                />
                <Text style={[styles.radioText, { right:75,top:5 }]}>
                Female
                </Text>
              </View>
            </RadioButton.Group>
          </View>
          <View style={styles.onOffView}>
                        <Text style={styles.textColor}>CQI Activity</Text>
                        <Switch value={attachment} color={Colors.quizBlue} onValueChange={() => {
                            setAttachment(!attachment)
                            props.setCql(true)
                        }} />
                    </View>
          <View style={styles.line}/>
          <MenuOption
            style={styles.menuOptionContainer}>
              <BlueDownload/>
            <Text style={styles.text} >Download PDF</Text>
          </MenuOption>
        
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default RightClick;
