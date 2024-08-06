import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  leftContainer: {
    alignItems: 'center'
  },
  dayText: {
    ...Fonts.style.medium,
    color: Colors.primary
  },
  date: {
    ...Fonts.style.description,
    color: Colors.black
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginLeft: 10,
    paddingVertical: 10,
    borderRadius: 5
  },
  dottedLine: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1
  },
  infoEntryContainer: {
    flexDirection: 'row',
    marginVertical: 3
  },
  infoLeftContainer: {},
  infoRightContainer: {
    flex: 1
  },
  infoEntryLabel: {
    flexDirection: 'row',
    width: 100,
    paddingRight: 20
  },
  key: {
    ...Fonts.style.description,
    marginLeft: 10
  },
  valueContainer: { flex: 1 },
  value: {
    ...Fonts.style.medium,
    color: Colors.black
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: '#EF4444',
    marginBottom:10,
    marginTop:10
  },
  
  deleteButtonText: {
    color: 'white',
  },
  
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: Colors.quizBlue,
    marginBottom:10,
    marginTop:10
  },
});
