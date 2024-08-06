import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
   justifyContent:'space-between',
   padding:10,
   flexDirection:'row' 
  },
  innerContainer:{ 
    borderRadius:5,
    backgroundColor:'#CBD5E1',
    width:'30%',  
  },
  second:{
    backgroundColor:Colors.backgroundGrey,
    borderRadius:5,
    alignItems:'center',
    padding:10,
    marginLeft:1,
    marginBottom:1,
    marginRight:1,
    marginTop:1
   
  },
  
  text:{
    color:'#475569',
    fontSize:12
  },
  showLess:{
    alignItems:'center',
  },
  blueText:{
    color:'#38BDF8',
    fontSize:12
  },
  menuOptionsContainer: {
    marginTop: 65,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 4,
    width: '90%'
  },
  menuOptionContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F1F5F9',
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    padding:10,
    borderRadius:5
  },
  menuOptionsContainers: {
    marginTop: 45,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 4,
    width: '50%'
  },
  menuOptionContainers: {
    flex:1,
    flexDirection:'row',
    marginLeft:5,
    marginRight:5,
    marginTop:3,
    padding:5,
    borderRadius:5
  },
  textColor:{
    color:'#475569',
    marginLeft:10,
    marginBottom:4
  },

  sloheader:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  sloTxt:{
    color:Colors.black,
    left:5
  },
  menuJustify:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  txts:{
    color:Colors.black,
    marginTop:4,
    textAlign:'center'
  },
  rtxts:{
    color:Colors.black,
    marginTop:4,
    textAlign:'center',
    fontSize:12
  },
  horizontalLine: {
    borderBottomColor: '#F1F5F9',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  outerBlockContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft:3,
    marginRight:3,
 
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
    marginRight:3,
    borderColor:'#CBD5E1',
    borderWidth:1
  },

  textStyle:{
    color:'black',
    fontSize:11
  },

  showMore:{
    justifyContent:'center',
    alignItems:'center'
  }
});
