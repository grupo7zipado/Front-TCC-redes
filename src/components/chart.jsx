import { useEffect, useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ConnApi from "../service/conn";
import { useMQTT } from "../service/mqtt";


const GraficoLog = ({values}) => {



  const [mudarGrafico, setMudarGrafico] = useState('');



  const [dadosExibidos , setDadosExibidos] = useState("");


  useEffect(()=>{
    // filtra o itens de acordo com o dados_tipo e seleciona os 10 ultimos 
    setDadosExibidos(values? values.filter((item)=>item.dados_tipo == mudarGrafico).slice(-10):"")
    //console.log(dadosExibidos);
    console.log(values);
    
  },[mudarGrafico,values])
  useEffect(()=>{
    setMudarGrafico("temperatura")
  },[])

 



  return (
    <section className="grafico-area df ac jcc ">

        <ul class="filtro-graphics">
            <li onClick={() => setMudarGrafico("temperatura")} className=" style-button" > Temperatura</li>
            <li onClick={() => setMudarGrafico("bpm")} className=" style-button"> BPM</li>
            <li onClick={() => setMudarGrafico("oxigenacao")} className=" style-button"> Oxigenação</li>
            {/* <li onClick={() => setMudarGrafico("temp")} className=" style-button"> Temperatura</li>
            <li onClick={() => setMudarGrafico("bpm")} className=" style-button"> BPM</li>
            <li onClick={() => setMudarGrafico("ox")} className=" style-button"> oxidação</li> */}
        </ul>
        
          <div className="graficoEstilo">
            <ResponsiveContainer  width="100%" height={400}>

            {/* <LineChart data={data}> */}
            <LineChart data={dadosExibidos}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dados_generate" />
                <YAxis 
                  domain={["auto"]} 
                />
                <Tooltip />
                <Legend   />
          

                <Line 
                  key={mudarGrafico} 
                  type="monotone" 
                  dataKey={"dados_valor"} 
                  stroke={mudarGrafico === "temperatura" ? "#fdb44b" : mudarGrafico === "bpm" ? "#f4a3a3" : "#e0e0e0"} 
                  // dataKey={mudarGrafico} 
                  // stroke={mudarGrafico === "temp" ? "#8884d8" : mudarGrafico === "bpm" ? "#82ca9d" : "#ff7300"} 
                  // rever
                  name={mudarGrafico == "oxigenacao"? "OXIGENAÇÃO": mudarGrafico.toUpperCase() }
                  isAnimationActive={true} 
                  animationDuration={800} 
                />



            </LineChart>
            </ResponsiveContainer>
          </div>
       

    </section>
  );
};

export default GraficoLog;