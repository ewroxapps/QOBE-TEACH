import React, { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme
} from 'victory-native';
import Backwards from '../../../../Assets/SVGs/Backwards';
import Forwards from '../../../../Assets/SVGs/Forwards';
import { Colors } from '../../../../Themes';
import styles from './styles';
import { CloGraphProps } from './types';
const Graph = (props: CloGraphProps) => {
  const [currentBatchIndex, setCurrentBatchIndex] = useState(0);

  // Extract batch names from the data
  const batchNames = Object.keys(
    (props.PLO || []).reduce((acc, data) => {
      acc[data.batch_name] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );
  // Wrap around batch index for backward and forward buttons
  const nextBatchIndex = (currentBatchIndex + 1) % batchNames.length;
  const prevBatchIndex =
    (currentBatchIndex - 1 + batchNames.length) % batchNames.length;

  // Get the current batch name
  const currentBatchName = batchNames[currentBatchIndex];

  // Organize the data into batches based on batch_name
  const batchData: { [batchName: string]: { x: string; y: number }[] } = {};
  props.PLO?.forEach(data => {
    if (!batchData[data.batch_name]) {
      batchData[data.batch_name] = [];
    }
    batchData[data.batch_name].push({ x: data.plo_code, y: data.percentage });
  });

  const sortedData = currentBatchName ? batchData[currentBatchName] : [];

  return (
    <View style={styles.containers}>
      <View
        style={{
          marginTop: -30,
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}>
        <TouchableOpacity onPress={() => setCurrentBatchIndex(prevBatchIndex)}>
          <Backwards width={18} height={18} style={{ marginRight: 5 }} />
        </TouchableOpacity>
        <Text style={{ color: Colors.black, fontSize: 12 }}>
          {currentBatchName}
        </Text>
        <TouchableOpacity onPress={() => setCurrentBatchIndex(nextBatchIndex)}>
          <Forwards width={18} height={18} style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <VictoryChart
          domainPadding={45}
          theme={VictoryTheme.material}
          width={
            sortedData.length > 6
              ? Dimensions.get('window').width +
                Dimensions.get('window').width / 3
              : Dimensions.get('window').width
          }
          padding={{ left: 50, right: 42, top: 20, bottom: 40 }}
          height={Dimensions.get('window').height / 3.5}>
          <VictoryAxis
            style={{
              ticks: { stroke: '#D3D3D3' },
              tickLabels: { fill: '#D3D3D3' }
            }}
          />
          <VictoryAxis
            dependentAxis
            label={'% Attainments'}
            tickFormat={t => `${Math.round(t)}%`}
            style={{
              axisLabel: {
                padding: 40
              }
            }}
          />
          <VictoryGroup>
            <VictoryBar
              animate={{
                onLoad: { duration: 1000 },
                duration: 1000
              }}
              labels={({ datum }) => `${datum.y + '%'}`}
              data={sortedData}
              style={{
                data: {
                  fill: '#663399',
                  width: 20,
                  fontSize: 10
                },
                labels: {
                  fontSize: 10,
                  color: Colors.black
                }
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </ScrollView>
    </View>
  );
};

export default Graph;
