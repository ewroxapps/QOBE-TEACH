import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor:Colors.backgroundWhite,
    elevation:2,

  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
    marginTop:5
  },
  profileContainer: {
    borderRadius: 50
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  topTextContainer: {
    flex: 1,
    marginLeft: 10
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lectureNumber: {
    color: Colors.black,
    fontWeight:'700',
    fontSize:12
  },
  classLabel: {
    color: Colors.black,
    fontWeight:'700',
    fontSize:13,
    width:'80%'
  },
  time: {
    fontSize:12,
    color:Colors.black,
    fontWeight:'500',
    top:2
  },
  instructorName: {
    fontSize:12,
    color:'#475569'
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 7
  },
  planned: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 15,
    top:9
  },
 
  plannedText: {
    ...Fonts.style.regular,
    color: Colors.backgroundWhite
  },

  menuOptionsContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
    marginLeft: -10,
    paddingVertical: 4,
    borderRadius: 4,
    width: 100
  },
  menuOptionContainer: {
    flexDirection: 'row'
  },

  remove:{
    color:'#EF4444',
    fontSize:12,
    marginLeft:2,
  },
  edit:{
    color:Colors.black,
    fontSize:12,
    marginLeft:2,  
  },
  unclickedConfig:{
    paddingRight:15,
    paddingLeft:5
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

editButton: {
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  backgroundColor: Colors.quizBlue,
  marginBottom:10,
  marginTop:10
},
});
