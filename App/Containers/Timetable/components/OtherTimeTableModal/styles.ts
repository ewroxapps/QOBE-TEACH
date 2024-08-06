import { Dimensions, Platform, StyleSheet } from 'react-native';
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
    backgroundColor: Colors.backgroundWhite,
    maxHeight:deviceHeight/1.3
  },

  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    marginStart:100,
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
  textStyle:{
    color:'#475569',
    marginTop:16
  },
  titletextInput: {
    height: 65,
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
    marginTop:16
  },
  onlinetxt:{
    color:'#475569'
  },

  saveActivityView:{
    backgroundColor:'#16A34A',
    justifyContent:'center',
    alignItems:'center',
    marginTop:35,
    paddingBottom:10,
    flex:1,
    padding:10,
    borderRadius:5,
    marginBottom:30
  },
  whiteTxt:{
    color:Colors.backgroundWhite
  },
  dateText:{
    color:'#94A3B8',
    marginTop:3
  },
  dateView:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#F1F5F9',
    borderRadius:5,
    padding:5,
    marginTop:3
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

  overlay: {
    flex: 1,
    top:270
  },

  overlay1: {
    flex: 1,
    top:430
  },
  overlay2: {
    flex: 1,
    top:520
  },
  dropDown: {
    flexDirection:'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    elevation: 5,
    ...Platform.select({
      ios: {
        maxHeight: 200,
      },
      android: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        maxWidth: '80%',
      },
    }),
    height:100
  },

  viewDrop:{
    backgroundColor: '#F8FAFC',
    height:45,
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    justifyContent:'space-between',
   flexDirection:'row',
   alignItems:'center'
  },
  selectedText:{
    marginLeft:12
  },
  containerGreys:{
    backgroundColor: '#F8FAFC',
    height:45,
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    justifyContent:'space-between',
   flexDirection:'row',
   alignItems:'center'
  },
  textStyling:{
    color:'#475569',
    marginTop:16
  },
});
