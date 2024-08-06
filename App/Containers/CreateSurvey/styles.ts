import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  
    topContainer:{
       flex:1,
       backgroundColor:colors.backgroundGrey
    },
   saveView:{
    justifyContent:'space-between',
    alignItems:'flex-end',
    flexDirection:'row'
   },
   saveViews:{
      justifyContent:'flex-end',
      alignItems:'flex-end',
      flexDirection:'row'
     },
   touchableSaveView:{
    backgroundColor:'#16A34A',
    width:'30%',
    borderRadius:5,
    alignItems:'center',
    marginBottom:10,
    paddingTop:10,
    paddingBottom:10,
    marginRight:10,
    marginLeft:10,
   
   },
   txt:{
    color:Colors.backgroundWhite
   },
   blacktxt:{
    color:Colors.black
   },

});
