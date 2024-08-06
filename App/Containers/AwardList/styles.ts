import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
    topContainer: {
        height: 100,
        backgroundColor: Colors.lightBlue,
        zIndex: -10
      },

      justifyPage:{
        justifyContent:'space-between',
        top:-60,
        marginTop:10,
        height:'70%'
      },
      
      simplBlackTxt:{
        color:Colors.black,
        fontSize:12
      },
      flexDirection:{
        flexDirection:'row'
      },
      inputContainer: {
        flexDirection: 'row',
        width:'50%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginRight:20,
        top:-37
      },
      labelText: {
        marginRight: 10,
        fontSize: 12,
        color:Colors.black
      },
      titleTextInput: {
        flex: 1,
        top:18,
        fontSize:12
        // Add any additional styles for the TextInput
      },
     
});
