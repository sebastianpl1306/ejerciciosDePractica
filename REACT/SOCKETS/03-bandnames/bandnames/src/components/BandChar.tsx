import { useContext, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartData,
  BarElement
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { SocketContext } from '../context';
import { Band } from '../interfaces';


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
      text: 'Chart.js Line Chart',
    },
  },
};

export const BandChar = () => {
  const { socket } = useContext( SocketContext );
  const [dataBands, setDataBands] = useState<ChartData<"line">>({ datasets: []});

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      crearGrafica( bands );
    });
  }, [])

  const crearGrafica = ( bands: Band[] = []) => {
      // const ctx = document.getElementById('myChart');
      setDataBands({
        labels: bands.map( band => band.name ),
        datasets: [{
            label: '# of Votes',
            data: bands.map( band => band.votes ),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    })
  }

  return (
    <Chart data={dataBands} type='bar' options={options}/>
  )
}