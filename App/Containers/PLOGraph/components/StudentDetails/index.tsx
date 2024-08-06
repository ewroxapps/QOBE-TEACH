import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { studentDetailProps } from './types';
const StudentDetail = (props: studentDetailProps) => {
  function getBatchNameFromSummary(
    summaryBatchId: number,
    batchPLOData: BatchPLO[]
  ): string | undefined {
    const foundBatch = batchPLOData.find(
      batch => batch.batch_id === summaryBatchId
    );
    return foundBatch ? foundBatch.name : undefined;
  }

  const batchName = getBatchNameFromSummary(
    props.data.batch_id,
    props.batchData
  );

  return (
    <View>
      {props.data?.summary.length > 0 ? (
        <View style={styles.batchView}>
          <Text style={[styles.batchTxt]}>Batch Name: </Text>
          <Text style={[styles.batchTxt]}>{batchName}</Text>
        </View>
      ) : null}

      <FlatList
        data={props.data?.summary}
        renderItem={({ item, index }) => (
          <View style={styles.topHeading}>
            <View style={styles.txtView}>
              <Text style={[styles.whitTxt, { color: Colors.quizBlue }]}>
                {item.plo_code}
              </Text>
            </View>
            <View style={styles.txtView}>
              <Text style={[styles.whitTxt, { marginLeft: 5 }]}>
                {item.total}
              </Text>
            </View>
            <View style={styles.txtView}>
              <Text style={[styles.whitTxt, { marginLeft: 5 }]}>
                {item.pass}
              </Text>
            </View>
            <View style={styles.txtView}>
              <Text style={[styles.whitTxt, { marginLeft: 5 }]}>
                {item.pass && item.total
                  ? Math.round((item.pass / item.total) * 100)
                  : 0}
              </Text>
            </View>
            <View style={styles.txtView}>
              <Text style={[styles.whitTxt, { marginLeft: 5 }]}>
                {item.average}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default StudentDetail;
