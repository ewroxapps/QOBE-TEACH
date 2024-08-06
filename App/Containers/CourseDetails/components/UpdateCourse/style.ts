import { Dimensions, StyleSheet } from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  mainContainer:{
    padding:10
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

  titletextInput1: {
    height: 55,
    backgroundColor: '#F8FAFC',
    textAlign:'center',
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
    width:110
  },

  notestitletextInput: {
    height: 85,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
  },
  textStyle:{
    color:'#475569'
  },
  statusView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom:10,
    
  },
  innerStatus:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  centerView:{
    flex:1,
    alignItems:'center'
  },
  onOffView:{
    flexDirection:'row',
    justifyContent:'space-between',
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
});
