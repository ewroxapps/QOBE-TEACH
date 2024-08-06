import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
        paddingRight:10
    },
    topContainer2:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#E0F2FE',
        elevation:2
    },
    whitetxt:{
        color:Colors.black,
        fontWeight:'600',
        fontSize:13
    },
    greyTxt:{
        color:'#475569'
    },
    greentxt:{
        color:'#16A34A'
    },
    flexDirection:{
        flexDirection:'row',
        flex:1   
    },
    scroollView:{
        flexDirection:'row',
        backgroundColor:'#F5F5F5',
        paddingTop:5,
        paddingBottom:5
    
    },
    justify:{
        justifyContent:'space-between',
        flexDirection:'row',
        flex:1
    },
    txt:{
        color:'#475569',
        paddingLeft:10,
        paddingRight:10,
        fontSize:12
    },
    noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },
  
});
