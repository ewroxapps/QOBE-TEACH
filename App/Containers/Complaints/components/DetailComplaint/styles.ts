import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    container:{
        backgroundColor:Colors.backgroundWhite,
        padding:10,
        margin:10,
        elevation:2,
        borderRadius:5
    },
    categoryTxt:{
        color:Colors.quizBlue,
        fontSize:14,
        marginBottom:15
    },
    justifyView:{
        flexDirection:'row',
    },
    leftTexT:{
        color:Colors.black,
        fontSize:12,
        marginRight:10
    },
    rightTxt:{
        color:Colors.black,
        fontWeight:'300',
        fontSize:12

    }

});
