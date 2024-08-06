import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Attachment } from '../../../../../../Assets/SVGs';
import { BASE_URL } from '../../../../../../Config/Api';
import { downloadFile } from '../../../../../../Utils/DownloadUtils';
import styles from './styles';
import { AttachmentItemProps } from './types';
const Attachments = (props: AttachmentItemProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      downloadFile(`${BASE_URL}${props.resource?.path}`, props.resource?.filename);
    }}>
      <View style={styles.justifyView}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Attachment width={19} height={19} />
          <Text style={[styles.blueTxt,{width:'80%'}]}>{props.resource?.filename}
          </Text>
        </View>
       
      </View>
      <View style={{marginTop:16}}>

        <View style={styles.justifyView}>
          <View style={{ flex: 1, marginTop:5 }}>
            <Text style={styles.texts}>Creation Date</Text>
          </View>
          <View style={{ flex: 1, marginTop:5 }}>
            <Text style={styles.texts}>{props.resource?.cdate}</Text>
          </View>
        </View>

        <View style={styles.justifyView}>
          <View style={{ flex: 1, marginTop:5  }}>
            <Text style={styles.texts}>Discription</Text>
          </View>
          <View style={{ flex: 1, marginTop:5  }}>
            <Text style={styles.texts}>{props.resource?.description}</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default Attachments;
