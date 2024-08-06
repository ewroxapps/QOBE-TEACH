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
    marginRight: 20
  },
  detailContainer:{
    paddingLeft:30,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5
  },
  textHeading:{
    color:Colors.black,
    fontWeight:'700',
    fontSize:16,
    bottom:10
  },
  rowflex:{
    flexDirection:'row',
    marginBottom:5,
    marginTop:5
  },
  textView:{
    color:Colors.black,
    left:5,
  },
  textView1:{
    color:Colors.black,
    left:5,
    top:4
  },
  outcomeText:{
    color:'#94A3B8',
    fontSize:15,
    marginTop:10,
    marginBottom:5
  },
  plustext:{
    color:Colors.black,
    fontSize:20,
    marginLeft:3,
    marginRight:5,
    top:-4
  },
  trashTxt:{
    color:'#EF4444',
    fontSize:14
  }


});
