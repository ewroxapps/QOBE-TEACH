import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
    container:{
        backgroundColor:Colors.backgroundGrey,
        flex:1,
        margin:20,
        borderColor:'black',
        borderWidth:0.5
    },
    centerView:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10
    },
    flexRow:{
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        marginTop:10
    },
    flexRows:{
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        marginTop:15
    },
    heading:{
        fontSize:15,
        fontWeight:'500',
        color:Colors.black,
      
    },
    discription:{
        fontSize:15,
        fontWeight:'300',
        color:Colors.black,
        
      
    },
    justifyView:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    yesTxT:{
        color:'#10B981',
        fontSize:15,
        fontWeight:'300',
        flex:1
    },
    noTxt:{
        color:'red',
        fontSize:15,
        fontWeight:'300',
        flex:1
    },
    noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },

      questionView:{
        backgroundColor:Colors.backgroundWhite,
        margin:10,
        elevation:3,
        borderRadius:5,
        paddingTop:5,
        paddingBottom:5
      }
});
