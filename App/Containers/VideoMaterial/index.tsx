import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useVideoMaterialQuery } from '../../RTK/Api/CourseApi';
import { Header } from './components';
import VideoDetail from './components/VideoDetail';
import styles from './styles';
const VideoMaterial = (props: any) => {
  const [modal, setModal] = React.useState(false);
  var myid = props.route.params.id;
  const { isLoading, isError, data, refetch, isFetching } =
    useVideoMaterialQuery({
      id: myid
    });

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  });

  if (isError) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }
  if (isFetching || isLoading) {
    return <Spinner />;
  }
  const onRefresh = () => {
    refetch();
  };

  return (
    <Screen>
      

      <FlatList
        style={{ marginBottom: 10 }}
        data={data}
        refreshing={isFetching}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) =><VideoDetail data={item} />}
        ListEmptyComponent={
          <View style={styles.noResults}>
            <NoResults message={'No teaching plan found'} />
          </View>
        }
      />

      {/*}  <View style={styles.containers}>
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
      {modal ?(
        <AddVideoModal
          modalVisible={modal}
          setModalVisible={setModal}
        />
      ):(null)

      }*/}
    </Screen>
  );
};
export default VideoMaterial;
