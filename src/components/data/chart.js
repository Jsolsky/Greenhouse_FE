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

const Chart = ({loading , timeData}) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (!timeData) {
    return <p>No Data</p>;
  } 
  else {
    console.log('DATA DATA');
    const chartData = {
      labels: timeData.map((item) => item.time),
      datasets: [
        {
          label: 'Temperature',
          data: timeData.map((item) => item.temperature),
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
  }
};

export default Chart;
