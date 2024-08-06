import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../../../Themes';
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
    color:Colors.black,
    marginStart:120,
    top:5,
    fontWeight:'600'

  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },

  dataView:{
    padding:10,
    marginLeft:10,
    marginRight:10
  },

  
  text:{
    color:Colors.black,
    marginLeft:10,
    marginRight:10
  },
  titletextInput: {
    height: 45,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginLeft:3,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    
  
  },
  titletextInput2: {
    height: 85,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginLeft:3,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
  
  },

  buttonView:{
    backgroundColor:'#16A34A',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:5,
    marginTop:10
  },
  buttonView2:{
    backgroundColor:Colors.quizBlue,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:5,
    marginTop:10
  },
  whiteTxt:{
    color:Colors.backgroundWhite
  },
  dropdown:{
    marginTop:2,
    padding:15,
    backgroundColor:'#F8FAFC',
    borderRadius:5,
    alignItems:'flex-end',
    marginLeft:5,
    marginRight:5
  },
  flatList:{
    height:80
  }
});
