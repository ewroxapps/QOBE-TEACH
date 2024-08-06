import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PieCharts from 'react-native-pie-chart';
import { Colors } from '../../../../Themes';
import CircluarView from '../CircularView';
import styles from './styles';

const PieChart = () => {
  const widthAndHeight = 250;
  const series = [45, 33, 22]; // Values for Cognitive, Psychomotor, and Affective
  const sliceColor = ['#16A34A', '#EA580C', '#0284C7']; // Green, Orange, Blue colors

  const renderSliceLabel = ({
    label,
    value
  }: {
    label: string;
    value: number;
  }) => <Text style={{ color: Colors.black }}>{value}</Text>;

  const pieChartConfig = {
    series,
    sliceColor,
    widthAndHeight,
    renderSliceLabel
  };

  return (
    <ScrollView style={{ flex: 1, marginTop:10 }}>
      <View style={styles.container}>
        <Text style={[styles.textColor,{marginBottom:10}]}>Learning Types Breadth-Distribution-Comp 111-Fall-2022</Text>
        <PieCharts {...pieChartConfig} />
      </View>
      <View style={styles.flexDirection}>
        <CircluarView color="#16A34A" size={15} title='Cognitive' />
      </View>
      <View style={styles.flexDirection}>
        <CircluarView color="#EA580C" size={15} title='Phsycomotor'/>
      </View>
      <View style={styles.flexDirection}>
        <CircluarView color="#0284C7" size={15} title='Affective' />
      </View>
    </ScrollView>
  );
};

export default PieChart;
