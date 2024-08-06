import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import { useClass_plo_attainmentQuery } from '../../RTK/Api/CourseApi';
import { Header, PLOList, SearchBox, SearchBoxBatch } from './components';
import styles from './styles';
const PLOAttainment = (props: any) => {
  const myID = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
    useClass_plo_attainmentQuery({
      id: myID
    });

  const [selectedValue, setSelectedValue] = useState('');
  const [name, setName] = useState('');
  const [click, setClick] = useState(false);
  const [selectedScore, setSelectedScore] = useState<ScorePLO | null>(null);
  const [id, setID] = useState(-1);
  const [selectedBatch, setSelectedBatch] = useState<BatchPLO | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  useEffect(() => {
    changeHeaderTitle();
    // if(from==='Marks'){
    //   changeRightMarks ()
    // }else{
    //   changeRight();
    // }
    if (click) {
      refetch();
      setClick(false);
    }
    if (!isFetching && !isLoading) {

      const selectedBatch = data.batches.find((batch:BatchPLO) => batch.batch_id === id);
      setSelectedBatch(selectedBatch || null);

      const selectedStudentScores = selectedBatch
    ? data.scores.find((batch:any) => batch.batch_id === id)?.scores.filter(
        (score:ScorePLO) => score.reg_no === selectedValue
      )
    : [];
    setSelectedScore(selectedStudentScores)
    }
  }, [data, selectedValue, isFetching, isLoading]);
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
      <View style={styles.topContainer}>

        <SearchBoxBatch
          setID={setID}
          id={id}
          click={click}
          setClick={setClick}
          batchData={data?.batches}
        />
         <SearchBox
          string={selectedValue}
          setString={setSelectedValue}
          data={data}
          click={click}
          setClick={setClick}
          name={name}
          setName={setName}
          id={id}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </View>

      <View
        style={
          selectedValue.length === 0 ? styles.container : styles.container2
        }>
        <View style={styles.justifyView}>
          <View style={styles.inerView}>
            <Text style={styles.whiteTxt}>PLO</Text>
          </View>
          <View style={styles.inerView}>
            <Text style={styles.whiteTxt}>Activity</Text>
          </View>
          <View style={styles.inerView}>
            <Text style={styles.whiteTxt}>%Weight</Text>
          </View>
          <View style={styles.inerView}>
            <Text style={styles.whiteTxt}>Total/Attained</Text>
          </View>
        </View>
      </View>
      {selectedScore!=null ?(
        <FlatList
          style={{ flex: 1 }}
          data={selectedScore[0]?.plo}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={false} />
          }
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <NoResults message={'Select a student from drop down'} />
            </View>
          )}
          renderItem={({ item, index }) => (
            <PLOList data={item} index={index + 1} kpi={data.marks_threshold} />
          )}
        />
      ):(
        <View style={styles.noResults}>
              <NoResults message={'Select a student from drop down'} />
            </View>
      )

      }
      
        

    </Screen>
  );
};

export default PLOAttainment;
