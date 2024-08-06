import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  
    topContainer: {
        height: 100,
        backgroundColor: Colors.lightBlue,
        zIndex: -10
      },
      container:{
        marginTop:70,
        backgroundColor:'#64748B',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        paddingRight:5
      },
      container2:{
        marginTop:120,
        backgroundColor:'#64748B',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        paddingRight:5
      },
      justifyView:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      whiteTxt:{
        color:Colors.backgroundWhite,
        fontSize:12
      },
      inerView:{
        flex:1,
        flexDirection:'row'
      },
      noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },

  
});
