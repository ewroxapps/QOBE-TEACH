import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  
    topContainer:{
        backgroundColor:'#64748B',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    whitetxt:{
        color:Colors.backgroundWhite
    },
    flexDirection:{
        flexDirection:'row',
        flex:1,
        
    },
    noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },
  
});
