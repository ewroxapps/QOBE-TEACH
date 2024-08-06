import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../../../Themes';

export default StyleSheet.create({
  container:{
    marginLeft:20,
    marginRight:20,
    flexDirection:'row',
  
  },
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 2,
    marginRight: 4,
    marginTop:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCheckboxBlue: {
    backgroundColor: Colors.quizBlue,
    borderColor: Colors.quizBlue,
  },
  checkedCheckboxGreen: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 13,
    color:'#475569',
    marginTop:5,
  },
});
