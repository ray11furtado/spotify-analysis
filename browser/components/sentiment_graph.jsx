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
