import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../Themes';
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'#F1F5F9',
    padding:20
  },
  innerContainer:{
    
    justifyContent:'space-between',
    flexDirection:'row',
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  header:{
    color:'#64748B',
    fontSize:12
  },
  headers:{
    color:'#64748B',
    fontSize:12,
    marginLeft:30
  },
  containers: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#38BDF8',
    elevation:15
  },
  textWhite:{
    color:Colors.backgroundWhite
  },
  innerContainers:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: Colors.backgroundWhite,
  },
  innerContainer2:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 23,
    height: 23,
    borderRadius: 30,
    backgroundColor: '#38BDF8',
  }

});
