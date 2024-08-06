import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';
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
  heading: {
    ...Fonts.style.normal,
    width: '180%'

  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  courseDetailText:{
    color:'#475569',
    fontSize:14,
    marginLeft:20
  },
  courseView:{
    flexDirection:'row',
    alignItems:'center',
    marginStart:'30%'
  },
  viewCenter:{
    marginTop:5,
    alignItems:'center'
  },
  uploadButton:{
    flexDirection:'row',
    backgroundColor:Colors.quizBlue,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:8,
    paddingBottom:8,
    marginTop:10,
    borderRadius:5
  },
  remove:{
    flexDirection:'row',
    backgroundColor:'#EF4444',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:8,
    paddingBottom:8,
    marginTop:10,
    borderRadius:5
  },
  whiteTxt:{
    color:Colors.backgroundWhite,
    marginLeft:5,
    fontSize:15,
    
  },
  instructionView:{
    alignItems:'center',
    width:'85%'
  },
  
  instructiontxt1:{
    textAlign:'center',
    color:Colors.black,
    marginTop:15
  },
  visibleView:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20
  },
  visibleTxt:{
    color:Colors.black
  },
  disableupload:{
    backgroundColor:'#94A3B8',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginLeft:20,
    marginRight:20
  },
  upload:{
    backgroundColor:'#16A34A',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginLeft:20,
    marginRight:20
  },
  discriptionView:{
    paddingLeft:20,
    paddingRight:20,
    marginTop:60
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
  blueTxt:{
    color:'#38BDF8',
    textAlign:'center',
    paddingRight:30,
    paddingLeft:30
  }
});
