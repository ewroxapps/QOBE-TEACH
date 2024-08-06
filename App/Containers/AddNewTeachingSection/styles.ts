import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
    container:{
        flex:1,
        padding:9,
    },
    dateText:{
        color:'#94A3B8',
        marginTop:3
      },
      dateView:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#F1F5F9',
        borderRadius:5,
        padding:5,
        marginTop:3
      },
      textStyle:{
        color:'#475569'
      },
      justyView:{
        justifyContent:'space-between',
        flexDirection:'row'
      },
      titletextInput: {
        height: 45,
        backgroundColor: '#F8FAFC',
        textAlignVertical: 'top',
        borderRadius: 5,
        marginRight:3,
        marginTop:2.5,
        marginBottom:2.5,
      },

      titletextInput1: {
        height: 85,
        backgroundColor: '#F8FAFC',
        textAlignVertical: 'top',
        borderRadius: 5,
        marginRight:3,
        marginTop:2.5,
        marginBottom:2.5,
      },

      saveButton:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#16A34A',
        paddingTop:10,
        paddingBottom:10,
        marginTop:10
      },
      whiteTxt:{
        color:Colors.backgroundWhite,
       
      },
      text:{
        color:Colors.black,
        marginLeft:10,
        marginRight:10
      },
      flatList:{
        height:80
      },

      dropdown:{
        marginTop:2,
        padding:15,
        backgroundColor:'#F8FAFC',
        borderRadius:5,
        alignItems:'flex-end',
        marginLeft:5,
        marginRight:5
      },
});
