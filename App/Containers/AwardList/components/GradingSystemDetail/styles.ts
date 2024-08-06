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
 textColor2:{
   color:Colors.black,
   fontSize:10,
   fontWeight:'400'
},
 moverView:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-between'

 },
 viewer:{
   flex:1,
   alignItems:'center'
 }
 
});
