import { StyleSheet } from 'react-native';
import colors from '../../../../Themes/Colors';

export default StyleSheet.create({
  

    scroollView:{
        flexDirection:'row',
        paddingTop:5,
        marginTop:10
    },
    justify:{
        justifyContent:'space-between',
        flexDirection:'row',
        flex:1
    },
    txt:{
        color:colors.black,
        fontWeight:'500',
        paddingLeft:10,
        paddingRight:10,
        fontSize:12
    }
  
});
