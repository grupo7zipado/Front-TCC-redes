import { useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



// Função para criar um gráfico de linha, usando as informações dos dados vitais do usuário //


const GraficoLog = () => {
  const [mudarGrafico, setMudarGrafico] = useState('temp');
  return (
    <section className="grafico-area">
{/* Botões para mudar os parâmetros do grafico */}
        {/* Botões para mudar os parâmetros do grafico */}
        <ul class="filtro-graphics">
            <li onClick={() => setMudarGrafico("temp")} className=" style-button"> Temperatura</li>
            <li onClick={() => setMudarGrafico("bpm")} className=" style-button"> BPM</li>
            <li onClick={() => setMudarGrafico("ox")} className=" style-button"> oxidação</li>
        </ul>
        {/* Construção do gráfico */}
          <ResponsiveContainer  width="70%" height={400}>
          <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={'auto'} />
              <Tooltip />
              <Legend   />
         

              <Line 
                key={mudarGrafico} 
                type="monotone" 
                dataKey={mudarGrafico} 
                stroke={mudarGrafico === "temp" ? "#8884d8" : mudarGrafico === "bpm" ? "#82ca9d" : "#ff7300"} 
                isAnimationActive={true} 
                animationDuration={800} 
              />



          </LineChart>
          </ResponsiveContainer>
       

    </section>
  );
};

export default GraficoLog;