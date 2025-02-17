import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:Colors.backgroundWhite,
        padding:10,
        borderRadius:5
    },
    heading:{
        color:Colors.black,
        fontWeight:'500',
        fontSize:17
    },
    spacebetweenView:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    texts:{
        color:Colors.black,
        fontSize:12
    },
    viewOnline:{
        color:'#3B82F6',
        fontSize:12,
    },
    normalHead:{
        color:'#475569'
    },
    marks:{
        color:'#475569',
        fontWeight:'700',
        fontSize:14
    },
    outcomeAdd:{
      color:'#10B981',
      fontWeight:'700',
      fontSize:14  
    },
    outcomeNotAdd:{
        color:'#EF4444',
        fontWeight:'700',
        fontSize:14  
    },
    questionTxt:{
        color:'#F59E0B',
        fontWeight:'700',
        fontSize:14  
    },
    GpaTxt:{
        color:'#3B82F6',
        fontWeight:'700',
        fontSize:14,
    },
    downloadView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        alignContent:'center',
        marginLeft:15,
        marginRight:15
    },
    pdfTxt:{
        color:'#EF4444',
        marginRight:4
    },
    docTxt:{
        color:'#38BDF8',
        marginRight:4
    },
    actionView:{
        marginTop:10,
        flex:1,
        flexDirection:'row',
        backgroundColor:'#38BDF8',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        padding:5
    },
    whiteTxt:{
        color:Colors.backgroundWhite
    },
    actionButton:{
        flexDirection:'row',
        backgroundColor:Colors.quizBlue,
        justifyContent:'center',
        marginTop:20,
        borderRadius:5,
        alignItems:'center',
        marginLeft:5,
        marginRight:5,
        paddingTop:5,
        paddingBottom:5
    },
    
});
