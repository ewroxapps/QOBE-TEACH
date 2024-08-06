import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
container:{
  
    backgroundColor:Colors.backgroundWhite,
    marginLeft:10,
    marginRight:10,
    borderRadius:8,
    padding:10,
    elevation:6,
    flexDirection:'row',
    justifyContent:'space-between'
 },
 innerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
 },
 line: {
    width: 1, // Adjust the width of the line as needed
    height: '100%', // Set the height to create a vertical line of the desired height
    backgroundColor: '#E2E8F0', // Set the color of the line as needed
  },
  numberTxt:{
    fontSize:12,
    fontWeight:'700'
  },
  txt:{
    fontSize:12
  }
 
});
