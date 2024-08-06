import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Trash } from '../../../../../../Assets/SVGs';
import BlueEdit from '../../../../../../Assets/SVGs/BlueEdit';
import styles from './styles';

const Item = (props: any) => {
  return (
    <View style={styles.container} >
      <View style={styles.topContainer}>
        <Text style={styles.itemText}>Item 1</Text>
        <View style={styles.rowFlex}>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <Trash />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <BlueEdit width={50} height={24} style={{ top: 2 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionstyleTxt}>Name</Text>
        <Text style={styles.answerTxt }>Question no 01</Text>
      </View>
      <View style={styles.questionView}>
        <Text style={styles.questionstyleTxt}>Question</Text>
        <Text style={styles.answerTxt }>How are you?</Text>
      </View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={styles.questionView}>
          <Text style={styles.questionstyleTxt}>Answer</Text>
          <Text style={styles.answerTxt }>Multiple Choice</Text>
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionstyleTxt}>Max Marks</Text>
          <Text style={styles.answerTxt}>20</Text>
        </View>
      </View>

       <View style={{marginTop:3}}>
          <Text style={styles.questionstyleTxt1}>Good</Text>
          <Text style={styles.questionstyleTxt1}>Not Good</Text>
          <Text style={styles.questionstyleTxt1}>Bad</Text>
          <Text style={styles.questionstyleTxt1}>Very Bad</Text>
          <Text style={styles.questionstyleTxt1}>Answer: Good</Text>
        </View>
    </View>
  );
};

export default Item;
