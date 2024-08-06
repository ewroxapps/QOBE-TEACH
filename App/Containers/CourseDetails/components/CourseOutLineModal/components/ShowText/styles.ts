import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
 
  detailView:{
    padding:10
  },
  headier:{
    color:Colors.black,
    fontWeight:'700'
  },
  detail:{
    color:Colors.black,
    textAlign:'justify',
    marginTop:10,
    numberOfLines:1000
  }
});
