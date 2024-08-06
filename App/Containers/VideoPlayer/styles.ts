import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  discriptionView:{
    backgroundColor:Colors.backgroundWhite,
    top:-80,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    padding:10,
    elevation:2,
    borderRadius:5
  },
  discriptionTxt:{
    color:Colors.black
  }
});
