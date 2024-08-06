import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Arrow from '../../../../Assets/SVGs/Arrow';
import Surveys from '../../../../Assets/SVGs/Survey';
import styles from './styles';
import { Alert } from './types';
   const Survey = (props:Alert) => {
    const navigation = useNavigation<IHomeNavigationProp>();
    var refetch = false
    function whatTowrite (){
      if(props.surveys.length>1){
          return props.surveys.length+" Suverys"
      }
      else{
          return props.surveys.length+" Survey"
      }
  }

     return (
       
   
       <View style={styles.container}>
           <Surveys/>
         <Text style={styles.textStyle}> {whatTowrite()}</Text>
   
         <TouchableOpacity
         onPress={() =>
          {
            refetch=true
          //  navigation.navigate('Survey',{surveys:props.surveys,refetch:refetch})
          }
         }
         hitSlop={{ left: 20,
           right: 20,
           top: 20,
           bottom: 20,}}>   
         <Arrow/>
       </TouchableOpacity>
      
       </View>
     );
   };
   
   export default Survey;
   