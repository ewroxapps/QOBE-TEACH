import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 container:{
    padding:10,
    top:-60
 },
 innerView:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10
 },
 textColor:{
    color:Colors.black,
 },

 viewer:{
   flex:1,
   alignItems:'center'
 }
 
});
