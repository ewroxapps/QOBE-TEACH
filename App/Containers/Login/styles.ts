import { Dimensions, StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../Themes';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    flexGrow:1,
    
  },
  backgroundImage: {
    width: '100%',
    position: 'absolute',
    height: Metrics.screenWidth + 2 // as image height is 2 pixels more than width
  },
  logoContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  logo: {
    marginTop: 20
  },
  qobe: {
    marginTop: 5,
    fontSize: Fonts.size.regular,
    color: colors.backgroundWhite
  },
  innerContainer: {
    marginTop: 40,
    marginBottom: 5,
    marginHorizontal: 20,
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    elevation:3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent:'space-between',
    height:Dimensions.get('screen').height/1.9
  },
  headingContainer: {
    alignItems: 'center',
    flex:1
    
  },
  headingText: {
    ...Fonts.style.h1,
    fontWeight: '700'
  },
  bodyText: {
    fontSize:14,
  },
  inputField: {
    marginTop: 5,
    fontSize:14,
  
  },
  passwordInputContainer: {
    marginTop: 0
  },
  loginButton: {
    marginTop: 30
  },
  forgotPasswordContainer: {
    marginTop: 30
  },
  forgotPassword: {
    fontSize:14,
    textAlign: 'center'
  },
  alfozeLogoContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  bluebutton:{
    alignItems:'center',
    marginTop:80,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.secondary,
    paddingVertical: 13,
    borderRadius: 5,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  text: {
    color: colors.backgroundWhite,
    fontSize:14
  }
});
