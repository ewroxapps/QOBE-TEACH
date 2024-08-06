import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:Colors.backgroundWhite,
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    elevation:1.1,
    borderRadius:5
  },
  thumbnailContainer: {
  
  },
  thumbnailPlaceholder: {
    backgroundColor: Colors.background,
    width: 310,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnailPlaceholders: {
    backgroundColor: Colors.background,
    width: 310,
    height: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    top: 70, // Adjust the position as needed
    left: 130, // Adjust the position as needed
    width: 50, // Adjust the size as needed
    height: 40, // Adjust the size as needed
    borderRadius:5,
    alignItems:'center'
  },

  logos: {
    position: 'absolute',
    top: 5, // Adjust the position as needed
    left: 339, // Adjust the position as needed
    width: 10, // Adjust the size as needed
    height: 10, // Adjust the size as needed
    borderRadius:5,
    alignContent:'center'
  },

 
  unclickedConfig:{
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:1,
    alignContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:Colors.backgroundWhite,
    padding:5
 },
 menuOptionsContainer: {
  marginTop: 35,
  paddingHorizontal: 5,
  marginLeft: -10,
  paddingVertical: 10,
  borderRadius: 4,
  width: 100
},
menuOptionContainer: {
  flexDirection: 'row'
},
textColor:{
  color:'#475569',
  marginLeft:5,
  fontSize:12
},
textColor1:{
  color:'#EF4444',
  marginLeft:5,
  fontSize:12
},

viewCont:{
  width:'100%',
  marginTop:20,
  marginLeft:20
},
header:{
  color:'#94A3B8'
},
text:{
  color:Colors.black,
  fontWeight:'600'
}

});
