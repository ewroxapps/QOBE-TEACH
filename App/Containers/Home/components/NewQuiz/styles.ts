import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
   backgroundColor:Colors.quizBlue,
   borderTopEndRadius:10,
   borderBottomEndRadius:10,
   borderBottomLeftRadius:10,
   borderTopStartRadius:10,
   padding:10,
   flexDirection:'row'
   
  },

  textStyle :{
  
    color: Colors.backgroundWhite,
    marginTop:3,
    fontSize:16,
    width:"80%"
  }
  
});
