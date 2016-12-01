/*eslint-disable*/
import React, { Component } from 'react';
import
{ VictoryBar,
  VictoryTheme,
  VictoryChart,
  VictoryAxis,
 } from 'victory';

 const songEmotion = [
   {emotion: 'Anger', score: 0.554},
   {emotion: 'Disgust' , score: 0.0553},
   {emotion: 'Fear', score: 0.049712},
   {emotion: 'Joy', score: 0.12736},
];

const actual = {
  emotion: {
    anger: '0551',
  },
  sentiment: {
    type: '3',
    score: '123',
  }
}

export default class Graph extends Component {
  render() {
    return (
      <div>
        <VictoryChart
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={['Anger','Disgust','Fear','Joy']}
            style={{
              axis: {stroke: "whitesmoke"},
              tickLabels: {fontSize: 16, padding: 5, fill: "whitesmoke"},
            }}
          />
        <VictoryAxis
          dependentAxis
          tickValues={[0, .25, .50, .75, 1.0]}
          style={{
            axis: {stroke: "whitesmoke"},
            grid: {stroke: "whitesmoke"},
            tickLabels: {fontSize: 16, padding: 5, fill: "whitesmoke"},
          }}
        />
          <VictoryBar
            data={songEmotion}
            style={{
              data: {fill: (d)=> d.y > 0.5 ? "#5cb85c" : "#d9534f" },
            }}
            x="emotion"
            y="score"
          />
        </VictoryChart>
      </div>
    );
  }
}
