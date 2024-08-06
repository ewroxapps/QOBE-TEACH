import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  
    container:{
        flexDirection:'row',
        padding:10,
    },
    container2:{
        flexDirection:'row',
        padding:10,
    },
    cloText:{
        color:Colors.quizBlue,
        fontWeight:'500',
        fontSize:15
    },
    newContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#E0F2FE',
        borderWidth: 0.5,
        borderColor: '#7DD3FC', 
    },
    text:{
        color:Colors.black,
        fontSize:12
    },
    verticalLine: {
        width: 0.5, // Width of the line
        backgroundColor: '#7DD3FC', // Color of the line,
 
      },
      horizontalLine: {
        height: 0.5, // Height of the line
        backgroundColor: '#7DD3FC', // Color of the line
        marginTop:5,
        marginBottom:5
      },
  
});
