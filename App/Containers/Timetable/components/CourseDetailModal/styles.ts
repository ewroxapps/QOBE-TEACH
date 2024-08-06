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
  heading: {
    marginStart:127,
    color:Colors.black,
    top:5,
    fontSize:15,
    fontWeight:'400'
  },
  closeButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
    marginTop:5
  },
  profile: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  cont:{
    padding:20
  },
  rowCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  text1:{
    color:Colors.black,
    fontWeight:'500',
    width:'25%'
  },
  text2:{
    color:'#475569',
    fontWeight:'300',
    marginLeft:15,
    width:'70%'
  }

});
