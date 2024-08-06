import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

var height= Dimensions.get('screen').height
export default StyleSheet.create({
  totaView:{
    marginBottom:10
  },
   container:{
     

      height:height/1.84
   },

   questionContainer: {
    padding:10,
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    marginBottom:6,
    backgroundColor:Colors.backgroundWhite,
    borderRadius:5,
    elevation:2,

  },

  ErrorquestionContainer: {
    padding:10,
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    marginBottom:6,
    backgroundColor:Colors.backgroundWhite,
    borderRadius:5,
    elevation:2,
    borderColor:'red',
    borderWidth:1

  },

  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  addButton: {
    backgroundColor: '#38BDF8',
    marginBottom: 15,
    marginLeft:10,
    marginRight:10,
    borderRadius:5,
    paddingTop:5,
    paddingBottom:5,
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    color:Colors.backgroundWhite
  },
  textClr:{
    color:'#475569',
  },
  textClrRemove:{
    color:'#EF4444',
    fontSize:10,
    right:3,
    top:1
  },

  removeContainer:{
    flexDirection:'row',
  },
  squenceView:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#F8FAFC',
    height:45,
    
  },
  input: {
    height: 45,
    backgroundColor: '#F8FAFC',
    textAlignVertical: 'top',
    borderRadius: 5,
    marginRight:3,
    marginTop:2.5,
    marginBottom:2.5,
  },

  innerContainr:{
    flex:1,
    marginLeft:5,
    marginRight:5
  },

  touchableClick:{

  },
  square: {
    width: 15, 
    height: 15,
    backgroundColor: Colors.quizBlue, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    fontSize: 10,
    color: 'white',
  },

  emptySquare:{   
    width: 15, 
    height: 15,
    backgroundColor: '#F8FAFC', 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'black',
    borderWidth:0.6
  },
  touchableView:{
    flexDirection:'row',
    marginTop:10,
    marginLeft:5,
  },
  activeTxt:{
    color:Colors.black,
    left:5,
    fontSize:12
  },
    questionsContainer: {
      flex: 1,
    },
   
   addQuestionview:{
    flex:1,justifyContent:'center', alignItems:'center',marginTop:180
   },
   surveyTxt:{
    color:Colors.black,
    fontSize:16,
    fontWeight:'500'
   }
});
