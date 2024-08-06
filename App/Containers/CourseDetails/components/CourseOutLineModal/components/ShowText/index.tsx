import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../../../../Themes/Colors';
import styles from './styles';
import { ShowTxtProps } from './types';
const ShowText = (props: ShowTxtProps) => {
  const handleTextLayout = (event: any) => {
    const { lines } = event.nativeEvent;
    props.setNumLines(lines.length);
    props.setIsExpanded(false); // Set to false initially to show "Read More")
  };

  const toggleReadMore = () => {
    props.setIsExpanded(!props.expanded);
  };

  return (
 

        <View style={styles.detailView}>
          <Text style={styles.headier}>{props.title}</Text>
          <View>
            {!props.expanded ? (
              <Text
                numberOfLines={props.expanded ? undefined : 2}
                onTextLayout={handleTextLayout}
                style={[styles.detail, !props.detail && { color: 'red' }]} // Set text color to red when course_breakdown is not added
              >
                {props.detail ? props.detail : 'Not added'}
              </Text>
            ) : (
              <Text
                style={[styles.detail, !props.detail && { color: '#F87171',fontWeight:'200' }]} // Set text color to red when course_breakdown is not added
              >
                {props.detail ? props.detail : 'Not added'}
              </Text>
            )}

            {props.detail && props.numLines > 2 && (
              <>
                {props.expanded ? (
                  <TouchableOpacity onPress={toggleReadMore}>
                    <Text style={{ color: colors.quizBlue,}}>Read Less</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={toggleReadMore}>
                    <Text style={{ color: colors.quizBlue }}>Read More</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
      
  );
};
export default ShowText;
