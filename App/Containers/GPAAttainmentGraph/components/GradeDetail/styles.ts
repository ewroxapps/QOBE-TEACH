import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
var width = Dimensions.get('screen').width
export default StyleSheet.create({

   
      topHeading:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10,
        paddingBottom:10
      },
      whitTxt:{
        color:Colors.black,
        fontSize:14,
        fontWeight:'400',
        width:'80%'
      },
      txtView:{
        flex:1,
        alignItems:'center',
        marginLeft:45
      },

      markItTop:{
        top:-60
      }
});
