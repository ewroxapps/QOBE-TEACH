import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({

  container: {
    justifyContent:'space-between',
    flexDirection:'row',
    paddingTop:20,
    paddingBottom:8,
    paddingLeft:10,
    paddingRight:10

  },
  innerContainer:{
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center'
  },
  header:{
    color:'#64748B',
    fontSize:14,
    marginRight:5
  },
  totalView:{
    justifyContent:'space-between',
    flexDirection:'row'
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
    alignItems:'center',   
  },
  profile: {
    height: 22,
    width: 22,
    borderRadius: 20
  },
  topTextContainer: {
    marginLeft: 5
  },
  classLabel: {
    fontSize:13,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '600',
    width:deviceWidth/3
  },
  instructorName: {
    fontSize:11,
    fontFamily: 'Inter',
    color: '#64748B'
  },

  absenttxt:{
    color:'#EF4444',
    fontSize:10,
    fontWeight:'600',
    right:5
  },

  PresentTxt:{
    color:'#10B981',
    fontSize:10,
    fontWeight:'600',
    right:5
  },

  withlate:{
    
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  withoutlate:{
    flexDirection: 'row',
    alignItems: 'center',
    
  }

});
