import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

var height= Dimensions.get('screen').height
export default StyleSheet.create({
  
   container:{
      padding:10,
      marginLeft:15,
      marginRight:15,
      marginTop:10,
      marginBottom:10,
      backgroundColor:Colors.backgroundWhite,
      borderRadius:5,
      elevation:2,
      height:height/1.65
   },
   textHeading:{
      color:'#94A3B8',
      fontSize:14,
      fontWeight:'400'
   },
   textDetail:{
      color:Colors.black,
      fontSize:14,
      marginTop:4
   },
   myView:{
      marginTop:10
   }
});
