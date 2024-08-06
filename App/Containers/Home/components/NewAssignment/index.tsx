import { useNavigation } from '@react-navigation/native';
import {
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from 'react-native';
import Arrow from '../../../../Assets/SVGs/Arrow';
import Desa from '../../../../Assets/SVGs/Desa';
import styles from './styles';
import { Alert } from './types';
   
   
   const NewAssignment = (props:Alert) => {
       const navigation = useNavigation<IHomeNavigationProp>();
       function whatTowrite (){
           if(props.alertCount>1){
               return props.alertCount+" New Assignments"
           }
           else{
               return props.alertCount+" New Assignment"
           }
       }
   
     return (
   
       <View style={styles.container}>
           <Desa/>
         <Text style={styles.textStyle}> {whatTowrite()} </Text>
   
         <TouchableOpacity
         onPress={() =>
          {
            props.isFetching
            if(props.alertData !=null)
            {
             // navigation.navigate('AssignmentList',{assignmentAlert:props.alertData})
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
   
   export default NewAssignment;
   