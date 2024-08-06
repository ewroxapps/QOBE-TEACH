import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor:'#475569',
    borderRadius:10
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemLabel: {
    ...Fonts.style.regular,
    color: Colors.backgroundWhite
  },
  itemValue: {
    ...Fonts.style.h6,
    fontWeight: '700',
    color:Colors.backgroundWhite,
    marginBottom:5
  },
  divider: {
    borderLeftColor: 'white',
    borderLeftWidth: 1,
    height: '100%',
  },
  viewDetailsContainer: {
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewDetailsButton: {
    padding: 3
  },
  viewDetailsText: {
    ...Fonts.style.small,
    color: '#38BDF8'
  },
  hitSlop: {
    left: 5,
    top: 5,
    right: 5,
    bottom: 5
  }
});
