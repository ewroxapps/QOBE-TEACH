import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor:Colors.backgroundWhite,
    elevation:3
  },
  topContainer: {
    justifyContent:'space-between',
    flexDirection:'row'
  },
  profileContainer: {
    borderRadius: 50
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  topTextContainer: {
    marginLeft: 10
  },
  classLabel: {
    ...Fonts.style.description,
    color: Colors.black,
    fontFamily: 'Inter',
    fontWeight: '700'
  },
  instructorName: {
    ...Fonts.style.regular,
    fontFamily: 'Inter',
    color: Colors.black
  },
  classInfoContainer: {
    backgroundColor: Colors.backgroundGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginTop: 5,
    borderRadius: 5
  },
  classInfoSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    ...Fonts.style.small,
    color: Colors.textBlack
  },
  divider: {
    width: 1,
    height: '100%'
  },
  dateStyke:{
    marginStart:80,
    fontSize:10,
    color:Colors.black,
    fontWeight:'300'
  }
});
