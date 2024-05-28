import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const Chart = ({ data }) => {
  // Calculate the min and max values for the left Y-axis
  const leftMin = Math.min(...data.map(d => d.article_amount));
  const leftMax = Math.max(...data.map(d => d.article_amount));

  // Calculate the min and max values for the right Y-axis
  const rightMin = Math.min(...data.map(d => d.average_sentiment));
  const rightMax = Math.max(...data.map(d => d.average_sentiment));

  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month">
          <Label value="DATE" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis yAxisId="left" domain={[0, 1500]}>
          <Label value="Amount" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
        </YAxis>
        <YAxis yAxisId="right" orientation="right" domain={[-1, 1]}>
          <Label value="Sentiment" angle={90} position="insideRight" style={{ textAnchor: 'middle' }} />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="article_amount" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="average_sentiment" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;