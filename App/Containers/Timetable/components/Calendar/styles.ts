import { StyleSheet } from 'react-native';
import { Colors } from '../../../../Themes';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginBottom:20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:10,
    marginRight:10
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekday: {
    flex: 1,
    textAlign: 'center',
    color: Colors.black
  },
  dateCell: {
    color: Colors.black,
    textAlign: 'center',
    paddingVertical: 10,
  },

  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: Colors.textBlack,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  emptyCell: {
    flex: 1,
    paddingVertical: 10,
  },
  dateContainer: {
    flex: 1,
  },
  sundayDate: {
    color: 'red',
  },
  dateCircle: {
    borderRadius: 30,
    borderColor:Colors.black,
    borderWidth: 1,
    width: 40,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    right:10,
    bottom:5,
    top:3
  },
  normalCircle:{
    flexDirection: 'row',
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    right:10,
    bottom:5,
    top:3
  },


  classs: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 3,
    height: 3,
    borderRadius: 30,
    backgroundColor: '#62D0A2',
    bottom:8,
    left:2
  },
  con: {
    backgroundColor: Colors.backgroundWhite,
    borderRadius: 15,
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    elevation: 15,
   
  },
  heading: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 5
  },
  container2:{
    marginTop:10,
    paddingBottom:20
  },
  headingstyle: {
    color: Colors.black,
    fontWeight: '600',
    fontSize: 16
  },
  dateContainers: {
    marginTop: 5
  },
  dateText: {
    color: '#475569',
    fontSize: 14,

  },
});
