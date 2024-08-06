import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Items } from './components';
import styles from './styles';
const Questions = (props: any) => {
  const navigation = useNavigation<ICoursesNavigationProp>();
  return (
    <View style={styles.container} >
       <Items/>

      <View style={styles.containers}>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate('AddQuestion',{ });
          }}
        >
          <View style={styles.innerContainer}>
            <View style={styles.innerContainer2}>
              <Text style={styles.textWhite}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Questions;
