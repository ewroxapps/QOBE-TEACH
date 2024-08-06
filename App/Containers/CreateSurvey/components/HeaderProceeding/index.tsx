import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../../../Themes';
import { CircularTextView } from './components';
import HorizontalLine from './components/HorizontalLine';
import styles from './styles';
import { ProceedingProps } from './type';
const HeaderProceeding = (props: ProceedingProps) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.anotherContainer}>
          <CircularTextView
            size={50}
            text="1"
            textColor={Colors.backgroundWhite}
            circleColor="#38BDF8"
            borderColor="#38BDF8"
          />
          <View style={{ padding: 4 }} />
          <HorizontalLine length={20} color="#38BDF8" />
        </View>
        <Text style={[styles.texts,{color:Colors.black, left:10}]}>Type</Text>
      </View>
      {props.second ? (
        <View style={styles.container}>
          <View style={styles.anotherContainer}>
            <CircularTextView
              size={50}
              text="2"
              textColor={Colors.backgroundWhite}
              circleColor="#38BDF8"
              borderColor="#38BDF8"
            />
            <View style={{ padding: 4 }} />
            <HorizontalLine length={20} color="#38BDF8" />
          </View>
          <Text style={[styles.texts,{color:Colors.black,left:10}]}>Detail</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.anotherContainer}>
            <CircularTextView
              size={50}
              text="2"
              textColor="#CBD5E1"
              circleColor={Colors.backgroundWhite}
              borderColor="#CBD5E1"
            />
            <View style={{ padding: 4 }} />
            <HorizontalLine length={20} color="#CBD5E1" />
          </View>
          <Text style={[styles.texts,{color:'#CBD5E1',left:10}]}>Detail</Text>
        </View>
      )}

      {props.third ? (
        <View style={styles.container}>
          <View style={styles.anotherContainer}>
            <CircularTextView
              size={50}
              text="3"
              textColor={Colors.backgroundWhite}
              circleColor="#38BDF8"
              borderColor="#38BDF8"
            />
            <View style={{ padding: 4 }} />
            <HorizontalLine length={20} color="#38BDF8" />
          </View>
          <Text style={[styles.texts,{color:Colors.black}]}>Questions</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.anotherContainer}>
            <CircularTextView
              size={50}
              text="3"
              textColor="#CBD5E1"
              circleColor={Colors.backgroundWhite}
              borderColor="#CBD5E1"
            />
            <View style={{ padding: 4 }} />
            <HorizontalLine length={20} color="#CBD5E1" />
          </View>
          <Text style={[styles.texts,{color:'#CBD5E1'}]}>Questions</Text>
        </View>
      )}

      {props.fourth ? (
        <View style={styles.container}>
          <View style={styles.anotherContainer}>
            <CircularTextView
              size={50}
              text="4"
              textColor={Colors.backgroundWhite}
              circleColor="#38BDF8"
              borderColor="#38BDF8"
            />
            <View style={{ padding: 4 }} />
          </View>
          <Text style={[styles.texts,{color:Colors.black,left:10}]}>Finish</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.anotherContainer}>
            <CircularTextView
              size={50}
              text="4"
              textColor="#CBD5E1"
              circleColor={Colors.backgroundWhite}
              borderColor="#CBD5E1"
            />
            <View style={{ padding: 4 }} />
          </View>
          <Text style={[styles.texts,{color:'#CBD5E1',left:10}]}>Finish</Text>
        </View>
      )}
    </View>
  );
};

export default HeaderProceeding;
