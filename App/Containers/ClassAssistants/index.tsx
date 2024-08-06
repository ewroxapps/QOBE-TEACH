import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Spinner } from '../../Components';
import { useClassAssistantListQuery } from '../../RTK/Api/CourseApi';
import { Header, RightHeader } from './components';
import AssistantList from './components/AssistantList';
import styles from './styles';

const ClassAssistants = (props: any) => {
  const navigation = useNavigation();
  var myId = props.route.params.id;
  const { data, refetch, isFetching, isLoading } = useClassAssistantListQuery({
    id: myId,
  });
  var myData:AssistantData=data

  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />,
    });
  };

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightHeader />,
    });
  };

  useEffect(() => {
    changeHeaderTitle();
  }, []);

  const onRefresh = () => {
    refetch();
  };

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  return (
    <View style={styles.Container}>
      <View style={styles.topContainer}>
        <View style={styles.textView}>
          <Text style={styles.textWhite}>Name of Assistants</Text>
        </View>
      </View>

      {Object.keys(myData).map((key, index) => (
        <AssistantList index={index} name={myData[key]}/>
))}
    </View>
  );
};

export default ClassAssistants;
