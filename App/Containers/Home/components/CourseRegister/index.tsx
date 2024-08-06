import { useNavigation } from '@react-navigation/native';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Arrow from '../../../../Assets/SVGs/Arrow';
import Register from '../../../../Assets/SVGs/Register';
import styles from './styles';
   
   
   const CourseRegister = () => {
    const navigation = useNavigation<IHomeNavigationProp>();
   
     return (
   
       <View style={styles.container}>
           <Register/>
         <Text style={styles.textStyle}> Register Your Courses! </Text>
   
         <TouchableOpacity
         onPress={() =>
         // navigation.navigate('CourseRegisteration',{})
      {
        
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
   
   export default CourseRegister;
   