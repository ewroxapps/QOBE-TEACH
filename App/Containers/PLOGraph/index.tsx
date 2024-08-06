import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useClass_plo_attainmentQuery } from '../../RTK/Api/CourseApi';
import { Header, StudentDetail } from './components';
import Graph from './components/Graph';
import styles from './styles';
const SLOGraph = (props: any) => {
  const myID = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
    useClass_plo_attainmentQuery({
      id: myID
    });
  const [CLO, setCLO] = useState<PLODataaa[] | null>(null);

  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    //changeRight();
    if (!isFetching && !isLoading) {
      const allBatchIdsAndSummaries: PLODataaa[] = data.summary.map(
        (summary: SummaryPLO) => {
          const { batch_id, summary: summaryItems } = summary;
          return {
            batch_id,
            summary: summaryItems
          };
        }
      );

      setCLO(allBatchIdsAndSummaries);
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
  const ploData: PLODataaa[] = [];
  data.summary.forEach((summary: SummaryPLO) => {
    const { batch_id, summary: summaryItems } = summary;

    summaryItems.forEach(summaryItem => {
      const { plo_id, plo_code, total, pass } = summaryItem;
      var per: number = Math.round((pass / total) * 100);

      const batch = data.batches.find(
        (batch: BatchPLO) => batch.batch_id === batch_id
      );
      const ploName = data.plos
        .find((plo: any) => plo.batch_id === batch_id)
        ?.plos_list.find((plo: any) => plo.plo_id === plo_id)?.plo_code;

      if (batch && ploName) {
        ploData.push({
          plo_code: ploName,
          batch_name: batch.name,
          percentage: per
        });
      }
    });
  });

  return (
    <Screen>
      <View style={styles.topContainer} />
      <View style={styles.graphContainer}>
        <View style={styles.justifyView}>
          <Text style={styles.textCLO}>PLO Graph</Text>
        </View>
        <Graph PLO={ploData} />
      </View>

      <View style={styles.markItTop}>
        <View style={styles.topHeading}>
          <View style={styles.txtView}>
            <Text style={styles.whitTxt}>PLO</Text>
          </View>
          <View style={styles.txtView}>
            <Text style={styles.whitTxt}>Total Students</Text>
          </View>
          <View style={styles.txtView}>
            <Text style={styles.whitTxt}>Students Attaine PLO {'>'} 50</Text>
          </View>
          <View style={styles.txtView}>
            <Text style={styles.whitTxt}>Percentage</Text>
          </View>
          <View style={styles.txtView}>
            <Text style={styles.whitTxt}>Average</Text>
          </View>
        </View>
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
          renderItem={({ item, index }) => (
            <StudentDetail data={item} batchData={data?.batches} />
          )}
        />
      ) : null}
    </Screen>
  );
};

export default SLOGraph;
