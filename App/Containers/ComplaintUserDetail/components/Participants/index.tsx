import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { BASE_URL } from '../../../../Config/Api';
import { Images } from '../../../../Themes';
import styles from './styles';
import { HeaderProps } from './types';
const Participants = (props: HeaderProps) => {
  const [visibleItems, setVisibleItems] = useState(false);
  const usersAndDpsDictionary: Record<string, string> = {}; // Define the type here
  props.data.chat.forEach(chatItem => {
    const user = chatItem.user;
    const dp = chatItem.dp;
    if (!usersAndDpsDictionary[user]) {
      usersAndDpsDictionary[user] = dp;
    }
  });

  // Convert the dictionary to an array of objects
  const uniqueUsersAndDps = Object.entries(usersAndDpsDictionary).map(
    ([user, dp]) => ({
      user,
      dp
    })
  );

  console.log(uniqueUsersAndDps);

  return (
    <View style={styles.container}>
      <View style={styles.justifyView}>
        <Text style={styles.userTxt}>
          {uniqueUsersAndDps.length} Participants
        </Text>
      </View>
      {uniqueUsersAndDps.map((medias, index) => {
        return (
          <View style={styles.participantView} key={index}>
            <View style={styles.viewImage}>
              <Image
                source={{
                  uri: `${BASE_URL}${medias.dp}`
                }}
                defaultSource={Images.profilePlaceholder}
                style={styles.profile}
              />
              <Text>{medias.user}</Text>
            </View>
            {props.data.student.name === medias.user ?    
               <View style={styles.createrView}>
                 <Text style={styles.textColor}>Creater</Text>
               </View> : null}
          </View>
        );
      })}
    </View>
  );
};

export default Participants;
