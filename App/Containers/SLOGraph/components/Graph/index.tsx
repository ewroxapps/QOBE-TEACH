import React from 'react';
import { Dimensions, View } from 'react-native';

import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory-native";
import { Colors } from '../../../../Themes';
import styles from './styles';
import { CloGraphProps } from './types';
const Graph = (props:CloGraphProps) => {
    const graphData = {
        clodata: props.CLO?.map(data => ({ x: data.clo_code, y: data.percentage }))
      };
      const sortedData =  graphData.clodata?.sort(
        (a, b) => parseFloat(a.y.toString()) - parseFloat(b.y.toString()))

    return (
        <View style={styles.containers}>
            <VictoryChart
                domainPadding={15}
                theme={VictoryTheme.material}
                width={Dimensions.get('window').width}
                padding={{ left: 52, right: 42, top: 20, bottom: 40 }}
                height={Dimensions.get('window').height / 3.5}
            >
                <VictoryAxis style={{
                    ticks: { stroke: "#D3D3D3" },
                    tickLabels: { fill: "#D3D3D3" }
                }}
                />
                <VictoryAxis
                    dependentAxis
                    label={'% Attainments'}
                    tickFormat={(t) => `${Math.round(t)}%`}
                    style={{
                        axisLabel: {
                            padding: 40,
                        },

                    }}

                />
                <VictoryGroup >
                    <VictoryBar
                    
                        labels={({ datum }) => `${datum.y + "%"}`}
                        data={sortedData}
                        style={
                            {
                                data: {
                                    fill:   '#663399',
                                    width: 20,
                                    fontSize: 10

                                },
                                labels: {
                                    fontSize: 10,
                                    color: Colors.black
                                }

                            }
                        }
                    />
                </VictoryGroup>
            </VictoryChart>     
        </View>
    );
};

export default Graph;
