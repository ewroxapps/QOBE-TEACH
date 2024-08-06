import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Details, EditDetails, Header, HeaderLeft, HeaderRight } from './components';
const ProfileDetail = (props: any) => {
  var header: String = props.route.params.label;
  var data: FacultyData = props.route.params.data;
  var icon: () => JSX.Element = props.route.params.icon;
  const [edit, setEdit] = React.useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => (
        <HeaderRight
          edit={edit}
          setEdit={setEdit}
        />
      )
    });
    navigation.setOptions({
      headerTitle: () => <Header header={header} icon={icon} />
    });
    navigation?.setOptions({
      headerLeft: () => <HeaderLeft/>
    });
    
  });
  return (
    <View>
      {edit ? (
        <EditDetails header={header} data={data} refetch={props.route.params.refetch}/>
      ) : (
        <Details header={header} data={data} />
      )}
    </View>
  );
};

export default ProfileDetail;
