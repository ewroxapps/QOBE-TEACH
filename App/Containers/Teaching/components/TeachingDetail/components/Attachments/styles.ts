import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({
    container:{
    backgroundColor:Colors.backgroundWhite,
    padding:10,
    marginTop:10,
    elevation:1.1,
    borderRadius:5
    },
    justifyView:{
      justifyContent:'space-between',
      flexDirection:'row',
      flex:1
    },
    blueTxt:{
      color:Colors.quizBlue,
      fontSize:14,
      left:20
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
    marginTop: 35,
    paddingHorizontal: 5,
    marginLeft: -10,
    paddingVertical: 10,
    borderRadius: 4,
    width: 100
  },
  menuOptionContainer: {
    flexDirection: 'row'
  },
  textColor:{
    color:'#475569',
    marginLeft:5,
    fontSize:12
  },
  textColor1:{
    color:'#EF4444',
    marginLeft:5,
    fontSize:12
  },
  texts:{
    color:'#475569'
  }
});
