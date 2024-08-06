import { StyleSheet } from 'react-native';
import { Metrics } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 4 - 15,
    marginHorizontal: 5,
    borderRadius: 5
  },
  innerContainer: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
   fontSize:12,
   marginTop:3,
   textAlign:'center'
  }
});
