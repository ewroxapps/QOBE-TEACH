import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 container:{
  backgroundColor:Colors.backgroundWhite,
  padding:10,
  marginLeft:20,
  marginRight:20,
  borderRadius:8,
  top:-80,
  elevation:5
 },
 centertxt:{
    alignItems:'center'
 },
 header:{
    color:Colors.black,
    fontWeight:'600',
    fontSize:13
 },
 detailtxt:{
    color:'#475569',
    fontWeight:'400',
    fontSize:11
 },
 rowView:{
    flexDirection:'row',
    paddingLeft:10,
    paddingRight:10,
    marginTop:5
 }
 
});
