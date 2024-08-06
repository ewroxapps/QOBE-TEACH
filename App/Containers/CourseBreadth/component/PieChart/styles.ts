import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      title: {
        fontSize: 24,
        margin: 10,
      },

      flexDirection:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'center'
      },

      textColor:{
        color:Colors.black,
        fontSize:12,
        marginLeft:7
      }

});
