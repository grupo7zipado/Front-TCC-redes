import { useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const [currentDataType, setCurrentDataType] = useState('temp'); // Controla se estamos mostrando temperatura ou bpm

// // Função para alternar entre temperatura, bpm e oxigenação:
// const MudarGrafico = () => {
//     if (currentDataType === 'temp') {
//         setCurrentDataType('temp');
//       } else if (currentDataType === 'bpm') {
//         setCurrentDataType('bpm');
//       } else {
//         setCurrentDataType('ox');
//       } 
// };

const data = [
  { time: '14:00' , temp: 36.4, bpm: 95, ox: 98 },
  { time: '14:05' , temp: 36.8, bpm: 99, ox: 97 },
  { time: '14:00' , temp: 36.4, bpm: 95, ox: 98 },
  { time: '14:00' , temp: 37.0, bpm: 102, ox: 94 },
  { time: '14:00' , temp: 37.2, bpm: 105, ox: 96 },
  { time: '14:00' , temp: 37.0, bpm: 100, ox: 98 },
  { time: '14:00' , temp: 36.9, bpm: 98, ox: 99 },

];

const GraficoLog = () => {
  return (
    <section class="grafico-area">

        <ul class="filtro-graphics">
            {/* <li onClick={MudarGrafico} class=" style-button"> Temperatura</li> */}
            <li class=" style-button"> BPM</li>
            <li class=" style-button"> oxidação</li>
        </ul>
        {/* <ResponsiveContainer  width="70%" height={400}>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {currentDataType === 'temp' && (
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          )}
          {currentDataType === 'bpm' && (
            <Line type="monotone" dataKey="bpm" stroke="#82ca9d" />
          )}
          {currentDataType === 'ox' && (
            <Line type="monotone" dataKey="ox" stroke="#ff7300" />
          )}
        </LineChart>
        </ResponsiveContainer> */}

    </section>
  );
};

export default GraficoLog;