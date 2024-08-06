import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../Themes';

export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:Colors.backgroundWhite,
    marginTop:10,
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

});
