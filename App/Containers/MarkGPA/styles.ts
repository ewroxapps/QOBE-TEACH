import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

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
        fontWeight:'600',
        fontSize:12
      },
      innerContainer:{
        flex:1
      }
});
