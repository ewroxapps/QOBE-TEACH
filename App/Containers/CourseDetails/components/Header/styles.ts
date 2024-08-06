import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';

export default StyleSheet.create({
 innerContainer:{
  flexDirection:'row',
  justifyContent:'center',
  marginTop:10,
  left:'15%'
 },
 textCLO:{
  marginLeft:3,
  marginTop:5,
  fontSize:15,
  colors:colors.black
 },
 textCourse:{
  fontSize:14,
  fontWeight:'800',
  color:colors.black,
  textAlign:'center',
  width:200,
  marginTop:5,
 },

 unclickedConfig:{
    justifyContent:'flex-end',
    flexDirection:'row',
    left:'40%',
    marginTop:1,
    alignContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:colors.backgroundWhite
 },

 clickedConfig:{
   justifyContent:'flex-end',
   flexDirection:'row',
   left:'40%',
   marginTop:1,
   alignContent:'flex-end',
   alignItems:'flex-end',
   backgroundColor:'#E0F2FE',
},

    
 unclickedtext:{
    fontSize:12,
    marginRight:5,
    marginTop:2,
    color:Colors.black
 },

 clickedtext:{
   fontSize:12,
   marginRight:5,
   marginTop:2,
   color:'#0EA5E9'
},
menuOptionsContainer: {
   marginTop: 35,
   paddingHorizontal: 5,
   marginLeft: -10,
   paddingVertical: 10,
   borderRadius: 4,
   width: 180
 },
 menuOptionContainer: {
   flexDirection: 'row'
 },
});
