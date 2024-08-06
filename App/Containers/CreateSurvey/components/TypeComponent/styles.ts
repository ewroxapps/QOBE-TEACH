import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
import colors from '../../../../Themes/Colors';

export default StyleSheet.create({
  
    topContainer:{
       flex:1,
       backgroundColor:colors.backgroundWhite,
       marginTop:10,
       marginLeft:10,
       marginRight:10,
       marginBottom:30,
       borderRadius:5,
       elevation:2,
       padding:10
    },
    headerTxt:{
        color:Colors.black,
        fontWeight:'500',
        fontSize:14
    },
    radioText:{
        color:'#475569',
        top:9,
        fontSize:12
    },
    containers:{
        flexDirection:'row'
    },
    blueTxt:{
        color:Colors.quizBlue,
        marginTop:10
    },
    greytxt:{
        color:'#475569',
        fontSize:15,
        fontWeight:'500'
    },
    error:{
      marginTop:20,
      padding:20 ,
      borderColor:'red',
      borderWidth:1,
      borderRadius:5,
      backgroundColor:Colors.backgroundGrey
    },
    errorTxt:{
        color:'red',
        fontSize:10
    }
   
    
});
