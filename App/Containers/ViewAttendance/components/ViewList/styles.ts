import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
container:{
    backgroundColor:Colors.backgroundWhite,
    marginLeft:10,
    marginRight:10,
    marginBottom:5,
    padding:10,
    borderRadius:5,
    elevation:2
},
justifyContainer:{
    justifyContent:'space-between',
    flexDirection:'row'
},
flexView:{
},
flexViews:{
    flexDirection:'row',
    paddingRight:25,
    marginTop:5
   
},
flexViewss:{
    flexDirection:'row'
   
},
BlueText:{
    color:Colors.quizBlue,
    textAlign:'justify',
  
},
BlackText:{
    color:Colors.black,
    textAlign:'justify'
},
deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: '#EF4444',
    marginBottom:10,
    marginTop:10
  },

  deleteButtonText: {
    color: 'white',
  },
});
