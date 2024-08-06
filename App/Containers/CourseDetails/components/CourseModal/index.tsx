import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle, CoursesHollow } from '../../../../Assets/SVGs';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { modalProps } from './types';
const CourseModal = (props: modalProps) => {
  const [required, setRequired] = useState(false);
  const { modalVisible = false, setModalVisible, setClicked, data } = props;
  const navigation = useNavigation<ICoursesNavigationProp>();
  function YesNo(num: string) {
    if (num === '0') {
      return 'No';
    } else {
      return 'Yes';
    }
  }

  function OpenClose(num: string) {
    if (num === '0') {
      return 'Close';
    } else {
      return 'Open';
    }
  }

  function ConnectedClass(num: any[]) {
    if (num.length === 0) {
      return 'No Connected class';
    } else {
      return num;
    }
  }
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
        setClicked(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.courseView}>
            <CoursesHollow width={20} />
            <Text style={styles.courseDetailText}>Course Details</Text>
          </View>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setClicked(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>School</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.campus}</Text>
              </View>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Semester</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.semester}</Text>
              </View>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Name</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.name}</Text>
              </View>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Teacher</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.teacher}</Text>
              </View>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Course</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.course}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Gender</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.gender}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Department</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.department}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Section</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.section}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Marks %</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.per_marks}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Student %</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.per_student}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>WhatsApp Group</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.whatsapp_grp}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Office Hours</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.office_hrs}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Status</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>
                  {OpenClose(data.online_status)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Use in OBE</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{YesNo(data.plo_base)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Use in GPA</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{YesNo(data.include_gpa)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Supervisor based</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{YesNo(data.supervisor)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Available Seats</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>{data.seating}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <View style={{ marginTop: 2 }}></View>
                <Text style={styles.text1}>Connected Class</Text>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.second}>
                <Text style={styles.text2}>
                  {ConnectedClass(data.connected_class)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {required ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setClicked(false);
                navigation.navigate('UpdateCourseDetails', { data });
              }}
              style={{
                flex: 1,
                backgroundColor: Colors.quizBlue,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                marginRight: 10
              }}>
              <Text style={{ color: Colors.backgroundWhite }}>Update</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </Modal>
  );
};
export default CourseModal;
