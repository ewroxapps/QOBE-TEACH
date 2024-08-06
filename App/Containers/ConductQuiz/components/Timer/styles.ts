import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  topContainer: {
    backgroundColor:'#38BDF8',
    marginLeft:10,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    elevation:4,
    marginBottom:10,
    paddingTop:30,
    paddingBottom:30,
    marginTop:5
  },
  startTimerView:{
    backgroundColor:Colors.backgroundWhite,
    borderRadius:5,
    paddingLeft:55,
    paddingRight:55,
    paddingTop:10,
    paddingBottom:10,
    elevation:5
  },
  greenTxt:{
    color:'#16A34A'
  },
  innerContainer:{
    flexDirection:'row',
    marginBottom:28
  },
  timeText:{
    color:Colors.backgroundWhite,
    fontSize:35,
    fontWeight:'600',
    top:4
    
  },
  justifyView:{
    justifyContent:'space-between',
    flexDirection:'row',
  }
});
