import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
var width = Dimensions.get('screen').width
export default StyleSheet.create({

    topContainer: {
        height: 100,
        backgroundColor: Colors.lightBlue,
        zIndex: -10
      },

      container:{
        justifyContent:'space-between'
      },
      mycontainer:{
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        paddingTop: 10,
        backgroundColor:Colors.backgroundWhite
      },
      topHeading:{
        backgroundColor:'#64748B',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

      },
      whitTxt:{
        color:Colors.backgroundWhite,
        fontSize:10,
        fontWeight:'600',
        width:'80%'
      },
      txtView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },
      containers: {
        backgroundColor: Colors.backgroundGrey,
        flex: 1,
        justifyContent:'space-between'
      },
      headerContainer: {
        height: width / 6,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:20,
        justifyContent:'space-between',
      },
      innerView:{
        flexDirection:'row',
        paddingRight:-70,
      },
      textHeader: {
        color: '#475569',
        fontSize: 14,
        fontWeight: '600',
        paddingRight:30
      },
      text:{
        color: '#475569',
        fontSize: 14,
        fontWeight: '600',
        marginTop:3,
        marginLeft:2,
        marginRight:2
      },
      textCLO:{
        color:'#475569',
        fontSize:20,
        marginLeft:10
      },
      avg:{
        width:"20%",
        height:"45%",
        marginTop:6,
        backgroundColor:'#EF4444',
      },
      my:{
        backgroundColor:'#3B82F6',
        width:"14%",
        height:"60%",
        marginTop:6,
      },
      max:{
        backgroundColor:'#F97316',
        width:"20%",
        height:"45%",
        marginTop:6,
      },
      min:{
        backgroundColor:'#22C55E',
        width:"20%",
        height:"45%",
        marginTop:6,
    
      },
      texts:{
        color:Colors.black,
        fontWeight:'800',
        marginLeft:3,
        marginRight:3,
        fontSize:10,
      },
      texts1:{
        color:Colors.black,
        fontWeight:'800',
        marginLeft:3,
        marginRight:3,
        fontSize:10,
        paddingTop:3
      },
      markItTop:{
       top:-60
      },
      noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },
      graphContainer:{
        backgroundColor: Colors.backgroundWhite,
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        elevation: 5,
        height: '40%',
        top: -80
      },
      justifyView:{
        flexDirection: 'row',
              justifyContent: 'space-between'
      }
});
