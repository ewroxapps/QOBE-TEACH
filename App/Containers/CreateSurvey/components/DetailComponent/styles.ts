import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

var height= Dimensions.get('screen').height
export default StyleSheet.create({
  
   container:{
      padding:10,
      marginLeft:15,
      marginRight:15,
      marginTop:10,
      marginBottom:10,
      backgroundColor:Colors.backgroundWhite,
      borderRadius:5,
      elevation:2,
      height:height/1.65
   },
   topContainer:{
      marginTop:5
   },
   textColor:{
      color:'#475569',
   },
   titletextInput: {
      height: 45,
      backgroundColor: '#F8FAFC',
      textAlignVertical: 'top',
      borderRadius: 5,
      marginRight:3,
      marginTop:2.5,
      marginBottom:2.5,
    },
    square: {
      width: 15, 
      height: 15,
      backgroundColor: Colors.quizBlue, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    tick: {
      fontSize: 10,
      color: 'white',
    },

    emptySquare:{   
      width: 15, 
      height: 15,
      backgroundColor: '#F8FAFC', 
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:'black',
      borderWidth:0.6
    },
    touchableView:{
      flexDirection:'row',
      marginTop:10,
      marginLeft:5,
    },
    activeTxt:{
      color:Colors.black,
      left:5,
      fontSize:12
    }
});
