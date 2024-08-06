import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    topContainer: {
        height: 100,
        backgroundColor: Colors.lightBlue,
        zIndex: -10
      },

      justifyView:{
        justifyContent:'space-between',
        flexDirection:'row'
      },
      txtColor:{
        color:Colors.black,
        fontSize:12
      },
      quizBlueTxt:{
        color:Colors.quizBlue,
        fontSize:12,
        fontWeight:'500'
      },
      innerContainer:{
        flex:1
      }
});
