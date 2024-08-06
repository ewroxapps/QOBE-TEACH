import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { VectorIcons } from './../../../../Components/VectorIcons';
import { ICON_TYPES } from './../../../../Components/VectorIcons/VectorIcons';
const HeaderLeft = (props:any) => {
  const navigation = useNavigation<IHomeNavigationProp>();
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => {
        navigation.navigate('Profile',{from:'ProfileDetail'}); 
       
      }}>
      <VectorIcons name="arrow-back" iconType={ICON_TYPES.Ionicons} size={24} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
