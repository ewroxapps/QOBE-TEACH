import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  topContainer: {
    height: 100,
    backgroundColor: Colors.lightBlue,
    zIndex: -10
  },
  calendarContainer: {
    paddingHorizontal: 10,
    marginTop: -90,
    flex:1
  },
  containers: {
    position: 'absolute',
    bottom: 20,
    right: 20,
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
  direction: {
    flexDirection: 'row'
  },
  headingstyle: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 16
  },
  dateContainer: {
    marginTop: 5
  },
  dateText: {
    color: '#475569',
    fontSize: 14,

  },
  weekView: {
    
  },
  monthView: {
    top:250,
    padding:10
  }

});
