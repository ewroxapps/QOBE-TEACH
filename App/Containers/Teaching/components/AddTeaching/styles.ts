import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },

  textWhite:{
    color:Colors.backgroundWhite
  },

  addButton:{
    alignItems: 'center',
    flexDirection:'row',
    width: 120,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#38BDF8',
  
  },

  addButton2:{
    alignItems: 'center',
    flexDirection:'row',
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#38BDF8',
  
  },
  outerLayer:{
    position: 'absolute',
    bottom: 120,
    right: 20,
  },
  outerLayer1:{
    position: 'absolute',
    bottom: 170,
    right: 20,
  },
  containers: {
    position: 'absolute',
    bottom: 51,
    right: 2,
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
  }

});
