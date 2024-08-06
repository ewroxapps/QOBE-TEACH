import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';

export default StyleSheet.create({
  Container:{
    flex:1
 },
 topContainer:{
    justifyContent:'space-between',
    padding:15,
    flexDirection:'row',
 },
 textWhite:{
    color:Colors.black
 },
 textView:{
    flexDirection:'row',
    width:'50%'
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
menuOptionsContainer: {
   marginTop: 20,
   paddingHorizontal: 5,
   marginLeft: -10,
   paddingVertical: 2,
   borderRadius: 4,
   width: 120
 },
 menuOptionContainer: {
   flexDirection: 'row'
 },
 textColor:{
   color:Colors.black,
   marginTop:3,
   marginLeft:5,
   fontSize:12
 },
 
 deleteAll:{
   color:'#EF4444',
   marginTop:5,
   marginLeft:5,
   fontSize:12
 },

 clickView:{
   backgroundColor:'#F0F9FF',
   padding:15,
   elevation:2
 },
 heading:{
   color:'#94A3B8',
   fontSize:13
 },
 discription:{
   color:Colors.black,
   fontWeight:'700',
   fontSize:13
 },
 spaceBetweenView:{
   justifyContent:'space-between',
   flexDirection:'row',
   marginTop:15
 },
 innerSpaceView:{
   justifyContent:'center',
   paddingLeft:5,
   paddingRight:20
 }

});
