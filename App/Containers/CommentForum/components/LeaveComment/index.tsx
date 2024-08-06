import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  Text, TextInput, ToastAndroid, TouchableOpacity, View
} from 'react-native';
import SendLogo from '../../../../Assets/SVGs/SendLogo';
import { useAddCommentsMutation } from '../../../../RTK/Api/CourseApi';
import style from './styles';
import { CommentProps } from './type';

const LeaveComment = (props: CommentProps) => {
  const [addComments, { isLoading, isSuccess, isError, data, error }] = useAddCommentsMutation();
  const [comment, setComment] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const containerStyle = {
    ...style.container,
    paddingBottom: keyboardHeight-220, // Adjust the paddingBottom based on keyboard height
  };
  let id=props.courseID
  useEffect(() => {
    if(!isLoading && data !=undefined){
        if(data.success){
             props.setReload(true)
             ToastAndroid.show(data.message,ToastAndroid.SHORT)
           }else{
            ToastAndroid.show('Please try again later',ToastAndroid.SHORT)
           }
    }
    
  }, [data]);

  return (
    <View style={containerStyle}>
      <Text style={style.commentText}>{props.heading}</Text>
      <View style={style.innerContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={style.textInputContainer}>
            <TextInput
              style={style.titletextInput}
              multiline
              value={comment}
              placeholder={'Comment'}
              onChangeText={(value) => {
                setComment(value)
                setKeyboardHeight(420)
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              if (comment.length > 0) {
                addComments({ id: id, comment: comment });
              }
            }}
          >
            <View style={style.sendContainer}>
              <SendLogo />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LeaveComment;
