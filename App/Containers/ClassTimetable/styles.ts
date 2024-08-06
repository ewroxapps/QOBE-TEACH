import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  noResultsContainer: {
    flex: 1
  },
  lectureItemContainer: {
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#38BDF8',
    elevation: 15
  },
  containers: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  textWhite: {
    color: Colors.backgroundWhite
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: Colors.backgroundWhite,
  },
  innerContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 23,
    height: 23,
    borderRadius: 30,
    backgroundColor: '#38BDF8',
  },
});
