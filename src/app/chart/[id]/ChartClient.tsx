'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const initialData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export default function ChartClient({ id }: { id: string }) {
  const [chartData, setChartData] = useState(initialData);

  const handleDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const newData = JSON.parse(e.target.value);
      setChartData(newData);
    } catch (error) {
      console.error('Invalid JSON data : ', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          {id.charAt(0).toUpperCase() + id.slice(1)} Chart
        </h1>
        <div className="aspect-video">
          <Line options={options} data={chartData} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Playground</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="chartData" className="block text-sm font-medium text-gray-700 mb-2">
              Chart Data (JSON)
            </label>
            <textarea
              id="chartData"
              className="w-full h-48 p-4 border border-gray-300 rounded-lg font-mono text-sm"
              value={JSON.stringify(chartData, null, 2)}
              onChange={handleDataChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 