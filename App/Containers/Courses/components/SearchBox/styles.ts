import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    top:-90,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingTop: 10,
    elevation:3
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchText: {
    ...Fonts.style.medium,
    marginLeft: 5
  },
  inputContainer: {
    marginTop: 10,
    marginHorizontal: 15
  },
  arrowContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  boxStyles: {
    borderColor: Colors.iconGrey,
    borderWidth: 0.2,
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: Colors.backgroundGrey
  },
  inputField: {
    marginTop: 10
  },
  placeholderStyle: {
    ...Fonts.style.medium,
    color: Colors.iconGrey
  },
  textInput: {
    ...Fonts.style.medium
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  totalResults: {
    ...Fonts.style.medium
  },
  clearResults: {
    ...Fonts.style.medium,
    color: Colors.secondary
  }
});
