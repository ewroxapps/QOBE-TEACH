import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  
    topContainer:{
     backgroundColor:Colors.backgroundWhite,
     flexDirection:'row',
     paddingTop:10,
     paddingBottom:10,
     paddingLeft:20,
    },
    container:{
        flex:1,
       
    },
    anotherContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    texts:{
        fontSize:10,
        marginTop:5
    }
   
    
});
