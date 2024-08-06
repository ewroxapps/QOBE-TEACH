import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    topContainer:{
        padding:10
    },
    container:{
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#F59E0B',
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        paddingTop:3,
        paddingBottom:3
    },
    textColor:{
        color:Colors.backgroundWhite,
        top:5
    },
    update:{
        color:'#475569',
        fontSize:16,
        marginBottom:5,
        fontWeight:'600'
    }
});
