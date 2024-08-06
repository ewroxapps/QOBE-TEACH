import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 container:{
    backgroundColor:'#64748B',
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
   color:Colors.backgroundWhite,
   fontSize:10,
   fontWeight:'700'
},

 viewer:{
   flex:1,
   alignItems:'center'
 }
 
});
