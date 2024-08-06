import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({

  container: {
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20
  },
  innerContainer:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
  
  },
  header:{
    color:'#64748B',
    fontSize:14,
  },
  totalView:{
    flex: 1, alignItems: 'flex-end'
  },
  totalinnerView:{
    alignItems:'center',
    justifyContent:'center'
  },
  totaldowntxt:{
    color:'#64748B',
    fontSize:12
  },
  totaltxt:{
    color:Colors.black
  },
  leftContainer: {
    flexDirection: 'row',
    flex:1,
    marginLeft:20,
    top:5
    
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 20
  },
  topTextContainer: {
    marginLeft: 10
  },
  classLabel: {
    ...Fonts.style.description,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '600'
  },
  instructorName: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: '#64748B'
  },
});
