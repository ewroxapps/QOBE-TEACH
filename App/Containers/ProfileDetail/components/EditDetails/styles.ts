import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
    titletextInput: {
        height: 45,
        backgroundColor: '#F8FAFC',
        textAlignVertical: 'top',
        borderRadius: 5,
        marginRight:3,
        marginTop:2.5,
        marginBottom:2.5,
      },
      textStyle:{
        color:'#475569',
        marginTop:16
      },
      containers: {
        top:10,
        right: 20,
        width:"100%",
        marginBottom:20,
        flex:1,
        justifyContent:'flex-end'
       
      },
      button:{
        backgroundColor:'#16A34A',
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        width:"100%",
        alignItems:'center',
        left:20
      },
      whiteTxt:{
        color:Colors.backgroundWhite
      }
 
});
