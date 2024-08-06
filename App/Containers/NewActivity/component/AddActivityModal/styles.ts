import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  containers: {
    position: 'absolute',
    bottom: 50,
    right: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0284C7',
    elevation:15
  },
  textWhite:{
    color:Colors.backgroundWhite
  },
  innerContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: Colors.backgroundWhite,
  },
  innerContainer2:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 23,
    height: 23,
    borderRadius: 30,
    backgroundColor: '#0284C7',
  },
  addButton:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#38BDF8',
  
  },
  outerLayer:{
    position: 'absolute',
    bottom: 120,
    right: 30,
  },
  outerLayer1:{
    position: 'absolute',
    bottom: 160,
    right: 30,
  },

  outerLayer2:{
    position: 'absolute',
    bottom: 200,
    right: 30,
  },

  outerLayer3:{
    position: 'absolute',
    bottom: 240,
    right: 30,
  },
});
