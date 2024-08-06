import React, { useState } from 'react';
import { Image, Text, ToastAndroid, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Timetable from '../../../../Assets/SVGs/Timetable';
import { BASE_URL } from '../../../../Config/Api';
import { useDeleteCommentForumMutation } from '../../../../RTK/Api/CourseApi';
import { Images } from '../../../../Themes';
import EditModal from '../EditModal';
import styles from './styles';
import { CommentProps } from './type';
const Comments = (props: CommentProps) => {
  const { commentID, reload, setReload } = props;
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [
    deleteCommentForum,
    {
      isLoading: DeleteLoad,
      data: DeleteData,
    }
  ] = useDeleteCommentForumMutation();

  const renderRightActions = () => {
    return (
      <RectButton style={styles.deleteButton} onPress={deleteComment}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </RectButton>
    );
  };

  const renderLeftActions = () => {
    return (
      <RectButton style={styles.editButton} onPress={editComment}>
        <Text style={styles.deleteButtonText}>Edit</Text>
      </RectButton>
    );
  };

  const deleteComment = () => {
    deleteCommentForum({ id: props.data.id });
  };

  if(DeleteData!=undefined && !DeleteLoad){
    if(DeleteData.success){
      props.setReload(true)
      ToastAndroid.show(DeleteData.message,ToastAndroid.SHORT)
    }else{
      props.setReload(true)
      ToastAndroid.show('Please try again later',ToastAndroid.SHORT)
    }
  }

  const editComment = () => {
    setEdit(true)
  };
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <View style={styles.recordContainer}>
        <View style={styles.itemContainer}></View>
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            {props.data.dp ? (
              <Image
                source={{
                  uri: `${BASE_URL}${props.data.dp}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
            ) : (
              <Image
                source={Images.profilePlaceholder}
                style={styles.profile}
              />
            )}

            <View style={styles.anotherContainer}>
              <View style={styles.calenderContainer}>
                <Text style={styles.textPostby} numberOfLines={1}>
                  {props.data.comment_by}
                </Text>
              </View>
              <View style={styles.calenderContainer}>
                <Timetable width={20} />
                <Text style={styles.time} numberOfLines={1}>
                  {props.data.comment_when}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.secondContainer}>
            <Text style={styles.titleText}>{props.data.comment}</Text>
          </View>
        </View>
        {edit === true ? (
          <EditModal
            modalVisible={edit}
            setModalVisible={setEdit}
            id={props.data.id}
            reload={reload}
            setReload={setReload}
            message={props.data.comment}
            ids={commentID}
          />
        ) : null}
      </View>
    </Swipeable>
  );
};

export default Comments;
