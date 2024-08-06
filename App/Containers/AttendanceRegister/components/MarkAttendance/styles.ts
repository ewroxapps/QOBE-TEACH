import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#64748B',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        paddingLeft:20
        
      },
      innerContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:deviceWidth/2.3
        
      },
      innerContainer2:{
        flexDirection:'row',
        
      },
      header:{
        color:Colors.backgroundWhite,
        fontSize:12
      },
      containers: {
        left:15,
        marginTop:10,
      },

      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth/1.1,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#16A34A',
        flexDirection:'row'
      },

      button2:{
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth/1.1,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#16A34A',
        flexDirection:'row',
      },
      textWhite:{
        color:Colors.backgroundWhite,
        left:6
      },
      noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },

     
});
