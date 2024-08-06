import React from 'react';
import { Dimensions, View } from 'react-native';
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryTheme
} from 'victory-native';
import styles from './styles';

interface GraphData {
  category: string;
  min: number;
  max: number;
  average: number;
}

const Graph = () => {
  const graphData: GraphData[] = [
    { category: 'cognitive', min: 50, max: 90, average: 80 },
    { category: 'psychomotor', min: 70, max: 95, average: 90 },
    { category: 'affective', min: 0, max: 0, average: 0 },
  ];

  const categories = graphData.map((item) => item.category);

  const cornerRadius = { top: 6, bottom: 6 };

  const colorMappings = {
    min: '#EA580C',     
    max: '#0284C7',     
    average: '#16A34A', 
  };

  const data = graphData.reduce<{ x: number; y: number; color: string }[]>(
    (acc, item, index) => {
      const barWidth = 0.35;
      const x = index - barWidth *-0.8;
      const minData = { x, y: item.min, color: colorMappings.min };
      const maxData = { x: x + barWidth, y: item.max, color: colorMappings.max };
      const averageData = { x: x + barWidth / 2, y: item.average, color: colorMappings.average };
      return [...acc, minData, maxData, averageData];
    },
    []
  );
  const legendData = [
    { name: 'Min', symbol: { fill: '#EA580C' } },
    { name: 'Max', symbol: { fill: '#0284C7' } },
    { name: 'Average', symbol: { fill: '#16A34A' } },
  ];


  return (
    <View style={styles.containers}>
      <VictoryChart
        domainPadding={30}
        theme={VictoryTheme.material}
        width={Dimensions.get('window').width}
        padding={{ left: 52, right: 42, top: 20, bottom: 40 }}
        height={Dimensions.get('window').height / 3.5}
      >
        <VictoryAxis
          tickValues={categories.map((_, index) => index)}
          tickFormat={categories}
          style={{ ticks: { stroke: '#D3D3D3' }, tickLabels: { fill: '#D3D3D3' } }}
        />
        <VictoryAxis
          dependentAxis
          label={'% Attainments'}
          tickFormat={(t) => `${Math.round(t)}%`}
          style={{ axisLabel: { padding: 40 } }}
          domain={[0, 100]}
        />
         <VictoryLegend
          x={Dimensions.get('window').width / 2 - 100}
          y={10}
          orientation="horizontal"
          gutter={20}
          style={{ title: { fontSize: 12 } }}
          data={legendData}
        />
        <VictoryGroup offset={0}>
          <VictoryBar
            data={data}
            cornerRadius={cornerRadius}
            style={{
              data: {
                width: 12,
                fill: ({ datum }) => datum.color,
                
              },
              labels: {
                fontSize: 10,
                color: 'black',
              },
            }}
            labels={({ datum }) => `${datum.y}%`}
            
            barWidth={12}
          />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default Graph;
