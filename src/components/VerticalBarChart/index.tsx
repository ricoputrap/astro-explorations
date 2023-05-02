import type React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
import { useMemo } from 'react';
import useOptions from './useOptions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      font: {
        size: 24,
      }
    },
  },
};

type TBarData = {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface Props {
  title: string;
  labels: string[];
  datasets: TBarData[];
}

const VerticalBarChart: React.FC<Props> = ({ title, labels, datasets }) => {
  const data = useMemo(() => ({ labels, datasets }), [labels, datasets]);
  const options = useOptions(title);

  return (
    <div>
      <h1>Vertical Bar Chart</h1>
      <Bar options={options} data={data} />;
    </div>
  )
}

export default VerticalBarChart