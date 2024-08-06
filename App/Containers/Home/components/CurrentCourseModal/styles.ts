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
  headingContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginStart: 110
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:20,
    paddingRight:20
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  topTextContainer: {
    flexShrink: 1,
    flex: 1,
    marginLeft: 10
  },
  classLabel: {
    ...Fonts.style.description,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '500'
  },
  instructorName: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: Colors.black
  },

  blockContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    flex:1,
    marginLeft:15,
    marginRight:15
  },

  blockContainers:{

    flexDirection:'row',
    flex:1,
    marginLeft:15,
    marginRight:15
  },
  innerBlockContainer:{
    backgroundColor:Colors.backgroundGrey,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:105,
    height:70,
    marginTop:10,
    marginLeft:3,
    marginRight:3
  },
  outerBlockContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft:10,
    marginRight:10
  },

  textStyle:{
    color:'black',
    fontSize:11
  },
  reportContainer:{
    padding:10,
    marginLeft:10
  },
});
