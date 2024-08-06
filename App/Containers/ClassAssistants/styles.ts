import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  Container:{
    flex:1
 },
 topContainer:{
    justifyContent:'space-between',
    backgroundColor:'#64748B',
    padding:15,
    flexDirection:'row',
 },
 textWhite:{
    color:Colors.backgroundWhite
 },
 textView:{
    flex:1
 },
  permissionView:{
   paddingRight:40
  },
 noResults: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 5
 },
 

});
