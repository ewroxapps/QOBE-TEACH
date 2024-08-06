import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 13,
    borderRadius: 10,
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation:1
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileContainer: {
    borderRadius: 50
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
    fontWeight: '600'
  },
  instructorName: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: Colors.black
  },
  detailsView:{
    marginTop:10,
    padding:10,
    borderRadius:10,
    backgroundColor:Colors.backgroundGrey
  },
  innerdetailView:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  flexing:{
    alignItems:'center',
    paddingLeft:25,
    paddingRight:25,
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#475569',
  },
  number:{
    color:'#475569',
    fontSize:16,
    fontWeight:'500'
  },
  heading:{
    color:'#475569',
    fontSize:13,
    fontWeight:'400'
  }
});
