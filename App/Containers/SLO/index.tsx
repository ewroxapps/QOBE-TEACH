import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { GenericMessage, NoResults, Spinner } from '../../Components';
import { useClass_closQuery } from '../../RTK/Api/CourseApi';
import { Header, SLODetail } from './component';
import styles from './styles';
const SLO = (props: any) => {
  const navigation = useNavigation();

  const myID = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');

    const { data:CLO, refetch:CLORefetch, isFetching:CLOFetch, isLoading:CLOLoad, isError:CLOError,error } =
    useClass_closQuery({
      id: myID
    });
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  });

  if ( CLOFetch || CLOLoad) {
    return <Spinner />;
  }

  if (CLOError ) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  const onRefresh = () => {
    CLORefetch();
  };

  return (
    <View>
      {CLO != undefined ? (
        <FlatList
          data={CLO}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={false} />
          }
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <NoResults message={'Currently no data found'} />
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.topContainer}>
              <View style={styles.flexDirection}>
                <View style={{ marginRight: 10 }}>
                  <Text style={styles.whitetxt}>#</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.whitetxt}>Code Discription</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 40 }}>
                  <Text style={styles.whitetxt}>Type</Text>
                </View>
                <View style={{ right: 10 }}>
                  <Text style={styles.whitetxt}>Active</Text>
                </View>
              </View>
            </View>
          )}
          renderItem={({ item, index }) => <SLODetail data={item} index={index+1}/>}
        />
      ) : null}
    </View>
  );
};

export default SLO;
