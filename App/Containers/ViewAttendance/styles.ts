import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
 container:{
  backgroundColor:Colors.backgroundGrey,
  flex:2
 },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  }

});
