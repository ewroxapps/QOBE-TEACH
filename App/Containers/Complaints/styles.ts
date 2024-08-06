import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({

    contaner:{
        backgroundColor:Colors.backgroundGrey,
        flex:1
    },
    paginationContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        flexDirection:'row'
    },
    blueTxt:{
        color:Colors.quizBlue
    },
    pageNumber: {
        padding: 8,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
      },
      
      selectedPage: {
        backgroundColor: 'blue',
        borderColor: 'blue',
        color: 'white',
      },
      noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },
});
