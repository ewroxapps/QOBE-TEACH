import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({

 container:{
    flex:1,
    backgroundColor:Colors.backgroundGrey
 },
 activityContainer:{
   paddingLeft:15,
   paddingRight:15,
   paddingTop:10,
   elevation:1
 },
 activityTxt:{
    color:'#94A3B8',
    fontSize:15,
    fontWeight:'600'
 },
 blckTxt:{
   color:Colors.black,
   fontWeight:'700',
   marginTop:5
 },

 container1:{
   backgroundColor:Colors.backgroundWhite,
   paddingTop:5,
   paddingLeft:10,
   paddingBottom:10,
   marginTop:10,
   borderRadius:5,
   elevation:1
 }

});
