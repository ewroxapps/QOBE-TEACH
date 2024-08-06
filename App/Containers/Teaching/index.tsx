import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import { useClassPlansQuery } from '../../RTK/Api/CourseApi';
import { Header, PlanDetail, RightHeader } from './components';
import styles from './styles';
const Teaching = (props: any) => {
  var classid = props.route.params.id;
  const navigation = useNavigation();
  const { isLoading, isError, isFetching, data, refetch } = useClassPlansQuery({
    id: classid
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };
  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader />
    });
  };
  useEffect(() => {
    changeHeaderTitle();
    // changeRight()
  });

  const onRefresh = () => {
    refetch();
  };

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  if (isError && isModalVisible) {
    return (
      <GenericMessage
        title={'Something went wrong'}
        onClosePress={() => {
          setIsModalVisible(false);
          navigation.goBack();
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={data}
        refreshing={isFetching}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => <PlanDetail data={item} />}
        ListEmptyComponent={
          <View style={styles.noResults}>
            <NoResults message={'No teaching plan found'} />
          </View>
        }
      />

      {/*} <View style={styles.containers}>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            setIsModalVisible(!isModalVisible)
          }}
        >
          <View style={styles.innerContainer}>
            <View style={styles.innerContainer2}>
              <Text style={styles.textWhite}>+</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {isModalVisible ?(
        <AddTeaching
        setModalVisible={setIsModalVisible}
         modalVisible={isModalVisible}
        />

      ):(null)

      }*/}
    </View>
  );
};

export default Teaching;
