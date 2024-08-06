import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    container:{
        padding:10
    },
    topContainer:{
        marginTop:15
    },
    leftText:{
        color:'#64748B'
    },
    rightText:{
      color:Colors.black
    },
    createSpaceView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10
    },
    horizontalLine: {
        marginTop:18,
        borderBottomColor: '#F1F5F9',
        borderBottomWidth: 1,
      },
 
});
