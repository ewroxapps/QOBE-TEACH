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
    marginLeft:5
  },
  courseView:{
    flexDirection:'row',
    alignItems:'center',
    marginStart:'30%'
  },
  innerView:{
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:20,
  },
  directionView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
  },
  directioninner:{
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  text1:{
    color:'#94A3B8'
  },
  text2:{
    color:'#475569'
  },
  container2: {
    justifyContent:'space-between',
    flexDirection:'row' ,
    flex:1,
    paddingTop:5
   },

   innerContainer:{ 
    borderRadius:5,
    flex:1
  },
  second:{
    borderRadius:5,
    marginLeft:1,
    marginBottom:1,
    marginRight:1,
    marginTop:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    alignContent:'flex-start'
  },
 
});
