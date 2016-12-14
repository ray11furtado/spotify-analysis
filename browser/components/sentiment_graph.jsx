import React from 'react';
import
{ VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
 } from 'victory';

 export default props => (
   <div>
     <VictoryChart
       domainPadding={20}
     >
     <VictoryLabel
       x={150} y={45}
       text="Sentimental Analysis"
       style={{
         fill: 'ghostwhite',
         fontSize: 16,
         fontWeight: 'bold',
       }}
      />

     <VictoryAxis
       dependentAxis
       tickValues={[-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]}
       tickCount={9}
       style={{
         axis: { stroke: 'whitesmoke' },
         tickLabels: { fontSize: 12, fill: 'whitesmoke' },
       }}
     />

       <VictoryBar
         data={props.sentiment}
         style={{
           data: { fill: d => d.y > 0.0 ? '#5cb85c' : '#d9534f' }
         }}
         y="score"
       />
     </VictoryChart>
    </div>
 )
