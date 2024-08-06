import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  RefreshControl,
  Text,
  View
} from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useClass_clo_attainmentQuery } from '../../RTK/Api/CourseApi';
import { Header, RightClick, StudentDetail } from './components';
import Graph from './components/Graph';
import styles from './styles';
const SLOGraph = (props: any) => {
  var from = props.route.params.from;

  const myID = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
    useClass_clo_attainmentQuery({
      id: myID
    });
  const [CLO, setCLO] = useState<CLOData[] | null>(null);
  const [marks, setMarks] = useState(false);
  const [gender, setGender] = useState('');
  const [cqi, setCQI] = useState(false);
  const [download, setDownload] = useState(false);

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header type={from} />
    });
  };

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => (
        <RightClick
          marks={marks}
          setMarks={setMarks}
          gender={gender}
          setGender={setGender}
          cqi={cqi}
          setCql={setCQI}
          download={download}
          setDownload={setDownload}
        />
      )
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    //changeRight();
    if (!isFetching && !isLoading) {
      const extractedCLOData: CLOData[] = data.summary.map(
        (summary: Summary) => ({
          clo_code: summary.clo_code,
          percentage: summary.percentage
        })
      );

      setCLO(extractedCLOData);
    }
  }, [data, isFetching, isLoading]);

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if (isError) {
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
    refetch();
  };

  return (
    <Screen>
      <View style={styles.topContainer} />
      <View style={styles.graphContainer}>
        <View style={styles.justifyView}>
          <Text style={styles.textCLO}>CLO Graph</Text>
        </View>
          <Graph CLO={CLO} setCLO={setCLO} />
      </View>

      {data?.summary != undefined ? (
        <FlatList
          style={{ top: -60, flex: 1 }}
          data={data?.summary}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={false} />
          }
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <NoResults message={'Currently no data found'} />
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.markItTop}>
              <View style={styles.topHeading}>
                <View style={styles.txtView}>
                  <Text style={styles.whitTxt}>CLO</Text>
                </View>
                <View style={styles.txtView}>
                  <Text style={styles.whitTxt}>Total Students</Text>
                </View>
                <View style={styles.txtView}>
                  <Text style={styles.whitTxt}>
                    Students Attaine SLO {'>'} 50
                  </Text>
                </View>
                <View style={styles.txtView}>
                  <Text style={styles.whitTxt}>Percentage</Text>
                </View>
                <View style={styles.txtView}>
                  <Text style={styles.whitTxt}>Average</Text>
                </View>
              </View>
            </View>
          )}
          renderItem={({ item, index }) => <StudentDetail data={item} />}
        />
      ) : null}
    </Screen>
  );
};

export default SLOGraph;
