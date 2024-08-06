import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { CloseCircle, CoursesHollow } from '../../../../Assets/SVGs';
import { ShowText } from './components';
import styles from './styles';
import { modalProps } from './types';
const CourseOutlineModal = (props: modalProps) => {
  const { modalVisible = false, setModalVisible } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [numLines, setNumLines] = useState(0);
  const [isExpandedBooks, setIsExpandedBooks] = useState(false);
  const [numLinesBooks, setNumLinesBooks] = useState(0);

  const [isExpandedRef, setIsExpandedRef] = useState(false);
  const [numLinesRef, setNumLinesRef] = useState(0);

  const [isExpandedOutline, setIsExpandedOutline] = useState(false);
  const [numLinesOutline, setNumLinesOutline] = useState(0);

  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <View style={styles.topRowContainer}>
          <View style={styles.courseView}>
            <CoursesHollow width={20} />
            <Text style={styles.courseDetailText}>Course Outline</Text>
          </View>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseCircle />
            </TouchableOpacity>
          </View>
        </View>

   <ScrollView>
        <ShowText
          expanded={isExpandedBooks}
          setIsExpanded={setIsExpandedBooks}
          numLines={numLinesBooks}
          setNumLines={setNumLinesBooks}
          title="Recommended Books"
          detail={props.data.recommended_book}
        />
        <ShowText
          expanded={isExpandedRef}
          setIsExpanded={setIsExpandedRef}
          numLines={numLinesRef}
          setNumLines={setNumLinesRef}
          title="Reference Books"
          detail={props.data.reference_books}
        />

        <ShowText
          expanded={isExpandedOutline}
          setIsExpanded={setIsExpandedOutline}
          numLines={numLinesOutline}
          setNumLines={setNumLinesOutline}
          title="Outline"
          detail={props.data.outline}
        />
        <ShowText
          expanded={isExpanded}
          setIsExpanded={setIsExpanded}
          numLines={numLines}
          setNumLines={setNumLines}
          title="Course Breakdown"
          detail={props.data.course_breakdown}
        />
        </ScrollView>
      </View>
    </Modal>
  );
};
export default CourseOutlineModal;
