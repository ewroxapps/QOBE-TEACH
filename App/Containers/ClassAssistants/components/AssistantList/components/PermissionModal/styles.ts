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
    marginStart:150,
    top:5,
    fontWeight:'600'

  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  
  buttonView:{
    backgroundColor:'#16A34A',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:5,
    marginTop:-20,
    marginLeft:15,
    marginRight:15
  },
  whiteTxt:{
    color:Colors.backgroundWhite
  },

  spacebetweenView1:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    
  },
  spacebetweenView:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    paddingBottom:15
  },
  textheading:{
    color:'#94A3B8',
    fontSize:15
  },
  textheading1:{
    color:Colors.black,
    fontSize:14,
    fontWeight:'500'
  }
});
