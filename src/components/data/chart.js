import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register the necessary components
ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const chartData = {
    labels: [
      "2024-10-24T01:09:45.000Z", "2024-10-24T01:09:56.000Z", "2024-10-24T01:10:07.000Z",
      "2024-10-24T01:10:19.000Z", "2024-10-24T01:10:30.000Z", "2024-10-24T01:10:42.000Z",
      "2024-10-24T01:10:53.000Z", "2024-10-24T01:11:04.000Z", "2024-10-24T01:11:15.000Z",
      "2024-10-24T01:11:27.000Z"
    ],
    datasets: [
      {
        label: 'Temperature',
        data: [
          114, 864, 52, 870, 386, 1023, 349, 767, 550, 389
        ],
        fill: false,
        backgroundColor: '#6fbf73',
        borderColor: '#6fbf73',
      },
    ],
  };

  return (
    <div>
      <div style={{ width: '800px', height: '300px' }}>
        <Line
          data={chartData}
          options={{
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'minute',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
