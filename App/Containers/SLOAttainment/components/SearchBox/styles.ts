import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  overlay: {
    flex: 1,
  },
  container: {
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingTop: 10,
    elevation:3
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchText: {
    ...Fonts.style.medium,
    marginLeft: 5
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 15
  },
  arrowContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  boxStyles: {
    borderColor: Colors.iconGrey,
    borderWidth: 0.2,
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: '#F8FAFC'
  },
  inputField: {
    marginTop: 10,
    color: Colors.iconGrey
  },
  placeholderStyle: {
    ...Fonts.style.medium,
    color: Colors.iconGrey
  },
  textInput: {
    ...Fonts.style.medium,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  totalResults: {
    ...Fonts.style.medium
  },
  clearResults: {
    ...Fonts.style.medium,
    color: Colors.secondary,
   
  },
  dropDownStyle:{
    top: -26, left: 250, paddingLeft:20, paddingRight:20
  },
  dropDown: {
 
    backgroundColor: Colors.backgroundGrey,
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
        maxWidth: '100%',
      },
    }),
    maxHeight:160,
    
  },
  justifyVieW:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:Colors.backgroundWhite,
    marginLeft:10,
    marginRight:10,
    marginTop:5
  },
  justifyVieWs:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:Colors.backgroundGrey,
    top:-18,
    marginRight:18,
    marginLeft:10,
    marginTop:10,
    marginBottom:-10
  },
  closeCircle:{
    alignItems: 'flex-end',
     backgroundColor:Colors.backgroundGrey,
     top:5,
  },
  heading:{
    color:Colors.black,
    fontSize:12,
    fontWeight:'700'
  },
  list:{
    color:Colors.black,
    fontSize:12,
    fontWeight:'300'
  },
  clearFilterView:{
    flex:1, alignItems:'flex-end',
    bottom:5
  },
  justify:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:2
  },
  justify2:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:2,
    marginTop:12
  },
  center:{
    alignItems:'center'
  },
  nameTxt:{
    color:Colors.black,
    fontWeight:'700',
    fontSize:13,
  },
  regTxt:{
    color:Colors.black,
    fontSize:12
  }
});
