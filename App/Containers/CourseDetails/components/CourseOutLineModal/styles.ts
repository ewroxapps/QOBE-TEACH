import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: Metrics.screenWidth/1.2,
    paddingVertical: 10,
    backgroundColor: Colors.backgroundWhite,
    maxHeight:deviceHeight/1.5,
    marginLeft:10,
    borderRadius:5,
    elevation:2,
    borderColor:Colors.cloud,
    borderWidth:10,
    marginBottom:20,
  },

  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    ...Fonts.style.normal,
    width: '10%'

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
    marginStart:'25%'
  },
  
  detailView:{
    padding:10
  },
  headier:{
    color:Colors.black
  },
  detail:{
    color:Colors.black,
    textAlign:'justify',
    marginTop:10,
    numberOfLines:1000
  }
});
