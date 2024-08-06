import React from 'react';
import { Dimensions, View } from 'react-native';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import styles from './styles';

const Graph = () => {
  const gradeValues = {
    'A+': 50,
    A:30,
    'B+': 80,
    B: 80,
    'C+': 90,
    C: 90,
    D: 60,
    F: 50,
  };

  const graphData = Object.entries(gradeValues).map(([grade, value]) => ({
    x: grade,
    y: value,
  }));


  function checkColor() {
    return '#3B82F6';
  }

  return (
    <View style={styles.containers}>
      <VictoryChart
        domainPadding={15}
        theme={VictoryTheme.material}
        width={Dimensions.get('window').width}
        padding={{ left: 52, right: 42, top: 20, bottom: 40 }}
        height={Dimensions.get('window').height / 3.5}
      >
        <VictoryAxis
          style={{
            ticks: { stroke: "#D3D3D3" },
            tickLabels: { fill: "#D3D3D3" },
          }}
          tickValues={graphData.map(data => data.x)}
          
        />
        <VictoryAxis
          dependentAxis
          label="% Attainments"
          tickValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          tickFormat={(t) => `${t}%`}
          style={{
            axisLabel: {
              padding: 40
            }
          }}
        />
        <VictoryBar
          animate={{
            onLoad: { duration: 1000 },
            duration: 1000
          }}
          labels={({ datum }) => `${datum.y + '%'}`}
          cornerRadius={{ top: 6, bottom: 6 }}
          data={graphData}
          style={{
            data: {
              fill: checkColor(),
              width: 12,
              fontSize: 10,
              
            },
            labels: {
              fontSize: 10,
              color: '#000000'
            }
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Graph;
