import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container:{
    backgroundColor:Colors.backgroundWhite,
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    marginBottom:10,
    padding:10,
    borderRadius:5,
    elevation:3
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconflex:{
    flexDirection:'row'
  },
  touchableView:{
    paddingLeft:5
  },
  headingTxt:{
    color:Colors.quizBlue,
    fontSize:14,
  },
  discriptionTxt:{
    color:Colors.black,
    marginTop:25,
    fontSize:13,
    fontWeight:'500'
  },

  marksView:{
    backgroundColor:'#F1F5F9',
    padding:10,
    marginTop:20,
    borderRadius:5
  },
  centerView:{
    alignItems:'center',
    flex:1,
  },
  line: {
    width: 1, 
    backgroundColor: '#E2E8F0', 
  },
  greyTxt:{
    color:'#475569',
    fontSize:11
  },
  txt:{
    fontWeight:'600',
    fontSize:12
  },
  resultView:{
    marginTop:10
  },
  blueView:{
  backgroundColor:'#E0F2FE',
  flex:1,
  padding:5,
  alignItems:'center',
  marginRight:5,
  marginLeft:5,
  justifyContent:'center',
  borderRadius:5
  },
  textBlueC:{
    color:'#38BDF8'
  },
  Preview:{
    flex:1,
    padding:13,
    alignItems:'center',
    marginRight:5,
    marginLeft:5,
    justifyContent:'center',
    borderRadius:5,
    flexDirection:'row'
    },
  
});
