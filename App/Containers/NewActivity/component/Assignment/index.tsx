import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ActivityDesign from '../ActivityDesign';
import AddActivityModal from '../AddActivityModal';
import styles from './styles';
const Assignment = (props:any) => {
  const [modal, setModal] = React.useState(false);
  return (
    <View style={styles.container}>
      <ActivityDesign from={'No Quiz'}/>
      {!modal && (
        <View style={styles.containers}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              setModal(!modal)
            }}
          >
            <View style={styles.innerContainer}>
              <View style={styles.innerContainer2}>
                <Text style={styles.textWhite}>+</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
      }
      {modal ? (
        <AddActivityModal
          modalVisible={modal}
          setModalVisible={setModal}
          activityName={props.route.name}
        />
      ) : null
      }
    </View>
  );
};

export default Assignment;
