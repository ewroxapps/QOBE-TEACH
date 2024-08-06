import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({

  spacebetweenView:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    paddingBottom:15
  },
 
  textheading1:{
    color:Colors.black,
    fontSize:14,
    fontWeight:'500'
  }
});
