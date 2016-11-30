/*eslint-disable*/
import React, { Component } from 'react';
import
{ VictoryBar,
  VictoryTheme,
  VictoryChart,
  VictoryAxis,
 } from 'victory';

 const songEmotion = [
   {emotion: 'anger', score: 0.554},
   {emotion: 'disgust' , score: 0.0553},
   {emotion: 'fear', score: 0.049712},
   {emotion: 'joy', score: 0.12736},
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
        <svg width={800} height={300}>
        <VictoryChart
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={['anger','disgust','fear','joy']}
          />
        <VictoryAxis
          dependentAxis
          tickValues={[0, .25, .50, .75, 1.0]}
        />
          <VictoryBar
            data={songEmotion}
            style={{
              data: {fill: (d)=> d.y > 0.5 ? "#5cb85c" : "#d9534f" },
              axis: {stroke: "white"},
              axisLabel: {fontSize: 16, padding: 20, color: "blue"},
            }}
            x="emotion"
            y="score"
          />
        </VictoryChart>
      </svg>
      </div>
    );
  }
}
