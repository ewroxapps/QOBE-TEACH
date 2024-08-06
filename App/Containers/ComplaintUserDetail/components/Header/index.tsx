import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import { VectorIcons } from './../../../../Components/VectorIcons';
import { ICON_TYPES } from './../../../../Components/VectorIcons/VectorIcons';
import styles from './styles';
import { HeaderProps } from './types';
const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={()=>{
        navigation.goBack()
      }}>
        <VectorIcons
          name="arrow-back"
          iconType={ICON_TYPES.Ionicons}
          size={24}
        />
      </TouchableOpacity>
      <View style={styles.innerProfileView}>
        {props.data.student.dp ? (
          <Image
            source={{
              uri: `${BASE_URL}${props.data.student.dp}`
            }}
            defaultSource={Images.profilePlaceholder}
            style={styles.profile}
          />
        ) : (
          <Image source={Images.profilePlaceholder} style={styles.profile} />
        )}
      </View>
      <View style={styles.userDetailView}>
        <Text style={styles.userTxt}>{props.data.student.name}</Text>
        <Text style={styles.userTxt}>{props.data.student.reg_no}</Text>
      </View>
    </View>
  );
};

export default Header;
