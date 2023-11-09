import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ cal, total, carbs, fats, protein }: { cal: number, total: number, carbs: number, fats: number, protein: number }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const myChart = new Chart(chartContainer.current, {
        type: 'bar',
        data: {
          labels: ['Carbs', 'Fats', 'Protein'],
          datasets: [
            {
              label: `Nutrition (${Math.round(cal)} kCal, total weight: ${Math.round(total)} g)`,
              data: [carbs, fats, protein],
              backgroundColor: [
                '#285A0F'
              ],
              borderColor: 'black',
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return () => myChart.destroy();
    }
  }, [cal, total, carbs, fats, protein]);

  return <canvas ref={chartContainer} />;
};

export default ChartComponent;