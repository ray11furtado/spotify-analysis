import React from 'react';
import
{ VictoryBar,
  VictoryChart,
  VictoryAxis,
 } from 'victory';

export default props => (
  <div>
    <VictoryChart
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness']}
        style={{
          axis: { stroke: 'whitesmoke' },
          tickLabels: { fontSize: 16, padding: 5, fill: 'whitesmoke' },
        }}
      />
    <VictoryAxis
      dependentAxis
      tickValues={[0, 0.25, 0.50, 0.75, 1.0]}
      style={{
        axis: { stroke: 'whitesmoke' },
        grid: { stroke: 'whitesmoke' },
        tickLabels: { fontSize: 16, padding: 5, fill: 'whitesmoke' },
      }}
    />
      <VictoryBar
        data={props.emotion}
        style={{
          data: { fill: d => d.y > 0.5 ? '#5cb85c' : '#d9534f' },
        }}
        x="emotion"
        y="score"
      />
    </VictoryChart>
  </div>
);
