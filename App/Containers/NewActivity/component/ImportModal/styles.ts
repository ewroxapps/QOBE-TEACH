import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    flex: 1,
    width: Metrics.screenWidth,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 10,
    backgroundColor: Colors.backgroundWhite
  },

  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  importTxt:{
    top:10,
    left:120,
    color:Colors.black,
    fontSize:16,
    fontWeight:'500'
  },
  centerView:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    paddingBottom:10
  },
  uploadButton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.quizBlue,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:5,
    paddingTop:5,
    borderRadius:5,
    marginTop:10
  },
  whiteTxt:{
    color:Colors.backgroundWhite,
    fontSize:14,
    marginLeft:4
  },
  noteTxt:{
    color:'#475569',
    padding:10,
    textAlign:'center',
    paddingBottom:150,
    marginTop:5
  },
  templateTxt:{
    color:Colors.black,
    fontSize:16
  },
  downloadButton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#475569',
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:5,
    paddingTop:5,
    borderRadius:5,
    marginTop:10
  },
  importButton:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.quizBlue,
    paddingBottom:8,
    paddingTop:8,
    borderRadius:5,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:20
  },
  redBin:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#EF4444',
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:5,
    paddingTop:5,
    borderRadius:5,
    marginTop:10
  },
  filetxt:{
    color:Colors.quizBlue,
    paddingBottom:10,
    fontSize:16,
    fontWeight:'600'
  }

});
