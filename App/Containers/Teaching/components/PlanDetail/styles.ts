import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    container:{
        backgroundColor:Colors.backgroundWhite,
        padding:10,
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:3,
        elevation:1.1,
        borderRadius:5
    },
    justifycontainer1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    justifycontainer2:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#F1F5F9',
        marginTop:10,
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10
    },
    blueText:{
        color:'#38BDF8',
        fontSize:16
    },
    container2:{
        marginTop:15
    },
    greyTxt:{
        color:'#94A3B8',
        fontSize:12
    },
    blackTxt:{
        fontSize:15,
        color:Colors.black,
        fontWeight:'600'
    },
    innerView:{
        flex:1,
        alignItems:'center',
        borderRadius:5
    },
    line: {
        width: 1,
        height: '100%',
        backgroundColor: '#94A3B8',
      },
    
 unclickedConfig:{
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:1,
    alignContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:Colors.backgroundWhite,
    padding:5
 },
 menuOptionsContainer: {
    marginTop: 25,
    paddingHorizontal: 5,
    marginLeft: -10,
    paddingVertical: 10,
    borderRadius: 4,
    width: 90
  },
  menuOptionContainer: {
    flexDirection: 'row'
  },
  textColor:{
    color:Colors.quizBlue,
    marginLeft:4,
    fontSize:12
  },
  textColor1:{
    color:'red',
    marginLeft:4,
    fontSize:12,
    top:2
  },
});
