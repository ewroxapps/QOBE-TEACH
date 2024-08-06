import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({

  container:{
    backgroundColor:Colors.backgroundGrey,
    borderRadius:5,
    padding:10,
    elevation:2
  },
   topContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
   },
   itemText:{
    color:Colors.quizBlue,
    fontSize:15
   },
   rowFlex:{
    flexDirection:'row'
   },
   questionView:{
    marginTop:15
   },
   questionstyleTxt:{
     color:'#64748B',
     fontWeight:'400',
     fontSize:13
   },
   questionstyleTxt1:{
    color:'#64748B',
    fontWeight:'400',
    fontSize:13,
    marginTop:3
  },
   answerTxt:{
    color:Colors.black,
    fontWeight:'600',
    fontSize:15
   },
});
