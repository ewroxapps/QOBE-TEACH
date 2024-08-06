import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    topHeading:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
      },
      whitTxt:{
        color:Colors.black,
        fontSize:10,
        fontWeight:'600',
        width:'80%'
      },
      txtView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        
      }
});
