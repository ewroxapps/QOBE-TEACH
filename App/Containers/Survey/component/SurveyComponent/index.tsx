import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Bigtrash from '../../../../Assets/SVGs/Bigtrash';
import BlueEdit from '../../../../Assets/SVGs/BlueEdit';
import WhitePreview from '../../../../Assets/SVGs/WhitePreview';
import Whiteye from '../../../../Assets/SVGs/Whiteye';
import { useClassSurveyQuery } from '../../../../RTK/Api/CourseApi';
import { Colors } from '../../../../Themes';
import DeleteModal from '../DeleteModal';
import styles from './styles';
import { SurveyComponentProps } from './types';
const SurveyComponent = (props: SurveyComponentProps) => {
  const { data, refetch, isFetching } = useClassSurveyQuery({ id: 0 });
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [required, setRequired] = useState(false);
  const handleDelete = () => {
    setShowDeleteAlert(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingTxt}>Survey {props.index}</Text>

        {required ? (
          <View style={styles.iconflex}>
            <TouchableOpacity style={styles.touchableView}>
              <BlueEdit width={18} height={18} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableView}
              onPress={() => setShowDeleteAlert(true)}>
              <Bigtrash width={18} height={18} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <Text style={styles.discriptionTxt}>{props.data.name}</Text>
      <View style={styles.marksView}>
        <View style={styles.topContainer}>
          <View style={styles.centerView}>
            <Text style={[styles.txt, { color: '#10B981' }]}>
              {props.data.complete === '0' ? 'No' : 'Yes'}
            </Text>
            <Text style={styles.greyTxt}>Completed</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.centerView}>
            <Text style={[styles.txt, { color: '#F59E0B' }]}>
              {props.data.totalpublished}
            </Text>
            <Text style={styles.greyTxt}>Publish</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.centerView}>
            <Text style={[styles.txt, { color: '#3B82F6' }]}>
              {props.data.totalfilled}
            </Text>
            <Text style={styles.greyTxt}>Total Filled</Text>
          </View>
        </View>
      </View>
      {required ? (
        <View style={styles.resultView}>
          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.blueView}>
              <Text style={[styles.textBlueC, { fontSize: 12 }]}>Result</Text>
              <Text style={[styles.textBlueC, { fontSize: 9 }]}>
                (CLOs, PLOs, PEOs)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blueView}>
              <Text style={[styles.textBlueC, { fontSize: 12 }]}>Result</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {required ? (
        <View style={styles.resultView}>
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={[styles.Preview, { backgroundColor: '#64748B' }]}>
              <Whiteye />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.backgroundWhite,
                  left: 5
                }}>
                Preview
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Preview, { backgroundColor: '#16A34A' }]}>
              <WhitePreview />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.backgroundWhite,
                  left: 5
                }}>
                Publish
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {showDeleteAlert ? (
        <DeleteModal
          visible={showDeleteAlert}
          onCancel={() => setShowDeleteAlert(false)}
          onDelete={handleDelete}
        />
      ) : null}
    </View>
  );
};

export default SurveyComponent;
