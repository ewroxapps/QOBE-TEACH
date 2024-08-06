import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
 

      justifyView:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        marginTop:10,
      },
      txtColor:{
        color:Colors.black,
        fontWeight:'600',
        fontSize:12
      },
      innerContainer:{
        flex:1
      },
    
      regTxt:{
        color:Colors.quizBlue,
        fontSize:12
      },
      simplBlackTxt:{
        color:Colors.black,
        fontSize:12
      }
});
