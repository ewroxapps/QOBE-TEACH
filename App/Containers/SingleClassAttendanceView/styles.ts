import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceWidth = Dimensions.get('window').height;
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
  },

  button: {
    backgroundColor: '#16A34A',
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    marginTop:10
  },
  butoonless:{
    backgroundColor: '#16A34A',
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    marginTop:deviceWidth/1.9
  },
  textColor:{
    color:Colors.backgroundWhite
  }

});
