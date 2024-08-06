import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    Savecontainers: {
        position: 'absolute',
        bottom: 10,
        left:15       
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
      textWhite:{
        color:Colors.backgroundWhite,
        marginLeft:5
      },
      mainContainer:{
        padding:10,
        marginLeft:5,
        marginRight:5
      },
      titletextInput: {
        height: 95,
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
      spaceView:{
        justifyContent:'space-between',
        flexDirection:'row',
      },
      attachmentView:{
        flexDirection:'row',
        backgroundColor:Colors.quizBlue,
        padding:10,
        borderRadius:5,
        marginTop:10,
        alignItems:'center'
      },
      submissionView:{
        backgroundColor:'#F0F9FF',
        justifyContent:'space-between',
        marginTop:20,
        padding:10,
        flexDirection:'row',
        borderRadius:5,
      },
      rowFlex:{
        flexDirection:'row',
        alignItems:'center'
      } ,

      rowFlex1:{
        flexDirection:'row',
        alignItems:'center',
        left:50
      } ,
      blueeTxt:{
        color:'#38BDF8',
        fontSize:12,
        marginLeft:5,
        width:deviceWidth/2.5
        
      } ,
      redTxt:{
        color:'#EF4444',
        fontSize:12,
        marginLeft:5,
        width:deviceWidth/2.5
        
      }   
});
