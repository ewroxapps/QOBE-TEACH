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
    marginTop:1,
    alignContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:colors.backgroundWhite,
    padding:5
 },

 clickedConfig:{
   justifyContent:'flex-end',
   flexDirection:'row',
   marginTop:1,
   alignContent:'flex-end',
   alignItems:'flex-end',
   backgroundColor:'#E0F2FE',
   padding:5
},

    
  text:{
    fontSize:14,
    left:10,
    top:2,
    color:Colors.quizBlue
 },


menuOptionsContainer: {
   marginTop: 30,
   paddingHorizontal: 5,
   marginLeft: -10,
   paddingVertical: 10,
   borderRadius: 4,
   width: 180
 },
 menuOptionContainer: {
   flexDirection: 'row',
   left:5
 },
 textColor:{
   color:'#94A3B8',
   left:4,
   top:2
 },
 
 line: {
  borderBottomColor: '#F1F5F9',
  borderBottomWidth: 1,
  marginVertical: 15,
},

containers: {
  flexDirection: 'row',
  justifyContent:'space-between',
  right:10
  
},
radioText:{
  top:10,
  color:'#475569',
  right:30
},
onOffView:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingTop:15,
  paddingBottom:5
},
textStyle:{
  color:'#475569',
},


});
