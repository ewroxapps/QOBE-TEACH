import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { NoResults } from '../../../../Components';
import ScrollDetail from '../ScrollDetail';
import styles from './styles';
import { SLODetailsProps } from './types';
const SLODetail = (props: SLODetailsProps) => {
  const [modal, setModal] = React.useState(false);
  var screenWidth = Dimensions.get('screen').width;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModal(!modal);
        }}>
        <View
          style={modal === true ? styles.topContainer2 : styles.topContainer}>
          <View style={styles.flexDirection}>
            <View style={{ marginRight: 10 }}>
              <Text style={styles.whitetxt}>{props.index}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.greyTxt}>{props.data.code}</Text>
              <Text style={[styles.whitetxt, { width: '90%' }]}>
                {props.data.description}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 40 }}>
              <Text style={styles.whitetxt}>
                {' '}
                {'\n'} {props.data.type}
              </Text>
            </View>
            <View style={{ right: 10, top: -4 }}>
              <Text style={styles.greentxt}>
                {' '}
                {'\n'} {props.data.active}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {modal ? (
        <ScrollView horizontal={true}>
          <View>
            <FlatList
            
              data={props.data.plos}
              ListEmptyComponent={() => (
                <View style={styles.noResults}>
                  <NoResults message={'Currently no data found'} />
                </View>
              )}
              ListHeaderComponent={() => (
                <View style={styles.scroollView}>
                  <View style={styles.justify}>
                    <View style={{ width: screenWidth / 9 }}>
                      <Text style={styles.txt}>#</Text>
                    </View>
                    <View style={{ width: screenWidth / 3 }}>
                      <Text style={styles.txt}>Program Batch</Text>
                    </View>
                    <View style={{ width: screenWidth / 3 }}>
                      <Text style={styles.txt}>PLO</Text>
                    </View>
                    <View style={{ width: screenWidth / 3 }}>
                      <Text style={styles.txt}>Learning type</Text>
                    </View>
                    <View style={{ width: screenWidth / 3 }}>
                      <Text style={styles.txt}>Level</Text>
                    </View>
                    <View style={{ width: screenWidth / 3 }}>
                      <Text style={styles.txt}>Emphasis Level</Text>
                    </View>
                  </View>
                </View>
              )}
              renderItem={({ item, index }) => (
                <ScrollDetail index={index + 1} data={item} />
              )}
            />
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default SLODetail;
