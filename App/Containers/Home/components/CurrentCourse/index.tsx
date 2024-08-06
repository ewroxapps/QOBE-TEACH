import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import Edits from '../../../../Assets/SVGs/Edits';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import CurrenrCourseModal from '../CurrentCourseModal';
import styles from './styles';
import { CurrentCourseProps } from './types';

const CurrentCourse = (props: CurrentCourseProps) => {
  const {
    label,
    instructorName,
    instructorProfile,
    students,
    activities,
    classes,
    id
  } = props;
  const [clicked, setClicked] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  return (
    <Surface style={styles.container}>
      <View style={styles.leftContainer}>
        {instructorProfile ? (
          <Image
            source={{
              uri: `${BASE_URL}${instructorProfile}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
        <View style={styles.topTextContainer}>
          <Text style={styles.classLabel} numberOfLines={2}>
            {label}
          </Text>
          <Text style={styles.instructorName}>{instructorName}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setClicked(!clicked);
            setModal(true);
          }}>
          <View style={{ padding: 20 }}>
            <Edits />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsView}>
        <View style={styles.innerdetailView}>
          <View style={styles.flexing}>
            <Text style={styles.number}>{students}</Text>
            <Text style={styles.heading}>Student</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.flexing}>
            <Text style={styles.number}>{activities}</Text>
            <Text style={styles.heading}>Activities</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.flexing}>
            <Text style={styles.number}>{classes}</Text>
            <Text style={styles.heading}>Classes</Text>
          </View>
        </View>
      </View>

      {clicked ? (
        <CurrenrCourseModal
          modalVisible={modal}
          setModalVisible={setModal}
          setClicked={setClicked}
          image={instructorProfile}
          label={label}
          instructorName={instructorName}
          id={id}
          permission={props.permission}
        />
      ) : null}
    </Surface>
  );
};

export default CurrentCourse;
