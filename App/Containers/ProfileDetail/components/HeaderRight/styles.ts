import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 15
  },
  speaker: {
    marginHorizontal: 15
  },
  profile: {
    borderRadius: 50,
    width: 35,
    height: 35
  },
  menuOptionsContainer: {
    marginTop: 25,
    paddingHorizontal: 5,
    marginLeft: -10,
    paddingVertical: 10,
    borderRadius: 4,
    width: 70
  },
  menuOptionContainer: {
    flexDirection: 'row'
  },
  text: {
    marginLeft: 5,
    top:2,
    color:Colors.black,
    fontSize:12
  },
  logoutText: {
    color: Colors.red
  },

});
