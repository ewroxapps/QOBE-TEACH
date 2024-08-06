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
    left:110,
    color:Colors.black,
    fontSize:16,
    fontWeight:'500'
  },

  saveView:{
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#16A34A',
    margin:10,
    padding:10
  },
  whiteTxt:{
    color:Colors.backgroundWhite
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
 

});
