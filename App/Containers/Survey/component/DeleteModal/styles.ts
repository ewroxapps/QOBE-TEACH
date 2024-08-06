import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      alertContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: '80%',
      },
      alertText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      button: {
        padding: 10,
        borderRadius: 4,
        marginLeft: 10,
      },
      cancelButton: {
        backgroundColor: 'gray',
      },
      deleteButton: {
        backgroundColor: 'red',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
});
