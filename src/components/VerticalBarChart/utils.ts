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

export type TOptions = {
  title: string;
}

export const computeOptions = ({ title }: TOptions) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 24,
        }
      },
    },
  };
}