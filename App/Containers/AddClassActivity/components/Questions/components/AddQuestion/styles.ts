import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
    paddingBottom:20
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
    left:145,
    color:Colors.black,
    fontSize:16,
    fontWeight:'500'
  },
  
  textStyle:{
    color:'#475569',
    marginTop:16
  },
  
  titletextInput: {
    height: 45,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
  },

  guidelineInput: {
    height: 75,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
  },

  
  choiceInput: {
    height: 135,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
  },
  onOffView:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  containers: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  radioText:{
    top:10,
    color:'#475569'
  },
  attachmentView:{
    backgroundColor:'#F1F5F9',
    justifyContent:'space-between',
    paddingTop:20,
    borderRadius:5,
    paddingBottom:20,
    flexDirection:'row'
  },
  fileTxt:{
    color:Colors.quizBlue,
    width:130,
    fontSize:12,
    marginLeft:6
  },
  uploadtxt:{
    color:'#94A3B8',
    marginLeft:5,
    fontSize:15
  },

  blueuploadtxt:{
    color:Colors.quizBlue,
    marginLeft:5,
    fontSize:15
  },
  removetxt:{
    color:'#EF4444',
    marginLeft:2,
    fontSize:15,
    top:4
  },
  addView:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    flex:1,
    padding:10,
    borderRadius:5,
    backgroundColor:'#94A3B8',
    marginLeft:20,
    right:10
  },
  saveView:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    flex:1,
    padding:10,
    borderRadius:5,
    backgroundColor:'#16A34A',
    left:10,
    marginRight:20
  },
  whitetxt:{
    color:Colors.backgroundWhite
  }
});
