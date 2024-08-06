import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import {
  useClass_clo_attainmentQuery
} from '../../RTK/Api/CourseApi';
import { CLOList, Header, MarksRightHeader, SearchBox } from './components';
import styles from './styles';
const SLOAttainment = (props:any) => {
  var from = props.route.params.from
  const myID = props.route.params.id;
  const { t: errorsTranslations } = useTranslation('errors');
  const { data, refetch, isFetching, isLoading, isError } =
  useClass_clo_attainmentQuery({
      id: myID
    });
  const [selectedValue, setSelectedValue] = useState('');
  const [name, setName] = useState('');

  const [click, setClick] = useState(false);
  const [selectedScore, setSelectedScore] = useState<Score | null>(null); // Declare the state here
  const [currentIndex, setCurrentIndex] = useState(0);


  const navigation = useNavigation();
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header type={from}/>
    });
  };

 

   const changeRightMarks = () => {
    navigation?.setOptions({
      headerRight: () => <MarksRightHeader/>
    });
  };

  useEffect(() => {
    changeHeaderTitle();
   // if(from==='Marks'){
   //   changeRightMarks ()
   // }else{
   //   changeRight();
   // }
    if(click){
      refetch()
      setClick(false)
    }
   if (!isFetching && !isLoading) {
    setSelectedScore(data.scores.find((score: Score) => score.reg_no === selectedValue));
  }
}, [data, selectedValue, isFetching, isLoading]);
  if(isFetching || isLoading){
    return(
      <Spinner/>
    )
  }
  
  if (isError ) {
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
        <SearchBox
          string={selectedValue}
          setString={setSelectedValue}
          data={data}
          click={click} setClick={setClick}
          name={name}
          setName={setName}
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
            <Text style={styles.whiteTxt}>SLO</Text>
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

  

      <FlatList
            style={{  }}
            data={selectedScore?.clo}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={false} />
            }
            ListEmptyComponent={() => (
              <View style={styles.noResults}>
                <NoResults message={'Please select a student from drop down'} />
              </View>
            )}
            renderItem={({ item, index }) => (
              <CLOList  data={item} index={index+1} kpi={data.marks_threshold}/>
            )}
          
          />
      
        



      
    </Screen>
  );
};

export default SLOAttainment;
