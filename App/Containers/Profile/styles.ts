import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({

    container:{
        justifyContent:'space-between',
        flex:1
    },
    pictureContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.backgroundGrey,
        padding:20
    },
    profile: {
        height: 190,
        width: 190,
        borderRadius: 50
      },
      profiles: {
        height: 180,
        width: 180,
        borderRadius: 90
      },
      TeacherName:{
        color:'#475569',
        fontSize:20,
        fontWeight:'600',
      },
      teacherDetails:{
        color:'#475569'
      },
      header:{
        color:'#475569',
        left:5
      },
      detailContainer:{
        justifyContent:'space-between', 
        flexDirection:'row', 
        backgroundColor:'#F8FAFC',
        padding:15,
        borderRadius:5
      },
      directionView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      camerView:{
        flexDirection:'row',
        backgroundColor:'#38BDF8',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        right:10,
        width:'45%'
      },
      camerView2:{
        flexDirection:'row',
        backgroundColor:'#38BDF8',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:10,
        right:10,
        width:'45%'
      },

      saveView:{
        flexDirection:'row',
        backgroundColor:'#22C55E',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        left:10,
        width:'45%'
      },

      saveView2:{
        flexDirection:'row',
        backgroundColor:'#22C55E',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:10,
        left:10,
        width:'45%'
      },
      whiteTxt:{
        color:Colors.backgroundWhite,
        bottom:2,
        marginLeft:2
      }
});
