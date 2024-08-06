import { useNavigation } from '@react-navigation/native';
import {
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import { MessageEdit } from '../../../../Assets/SVGs';
import Arrow from '../../../../Assets/SVGs/Arrow';
import styles from './styles';
import { QuizAlert } from './types';
   
   
   const NewQuiz = (props:QuizAlert) => {
       const navigation = useNavigation<IHomeNavigationProp>();
       function whatTowrite (){
           if(props.QuizCount>1){
               return props.QuizCount+" New Quizes"
           }
           else{
               return props.QuizCount+" New Quiz"
           }
       }
   
     return (
   
       <View style={styles.container}>
           <MessageEdit/>
         <Text style={styles.textStyle}> {whatTowrite()} </Text>
   
         <TouchableOpacity
         onPress={() =>
           {
             props.isFetching
             if(props.quizData != null){
              // navigation.navigate('QuizList',{quizAlert:props.quizData})
             }
             else{
               ToastAndroid.showWithGravity(
                 "Something went wrong....",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
             }
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
   
   export default NewQuiz;
   