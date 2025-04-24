import { useEffect, useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ConnApi from "../conn";



let data = [
  { time: '14:00' , temp: 36.4, bpm: 95, ox: 98 },
  { time: '14:05' , temp: 36.8, bpm: 99, ox: 97 },
  { time: '14:10' , temp: 36.4, bpm: 95, ox: 98 },
  { time: '14:15' , temp: 37.0, bpm: 102, ox: 94 },
  { time: '14:20' , temp: 37.2, bpm: 105, ox: 96 },
  { time: '14:25' , temp: 37.0, bpm: 100, ox: 98 },
  { time: '14:30' , temp: 36.9, bpm: 98, ox: 99 },
  { time: '14:35' , temp: 36.9, bpm: 98, ox: 94 },
  { time: '14:40' , temp: 36.9, bpm: 98, ox: 98 },
  { time: '14:45' , temp: 36.2, bpm: 102, ox: 97 },
  { time: '14:50' , temp: 36.0, bpm: 105, ox: 99 },
  { time: '14:55' , temp: 36.3, bpm: 100, ox: 96 },
  { time: '15:00' , temp: 36.5, bpm: 96, ox: 99 },

];


const GraficoLog = ({user}) => {



  const [mudarGrafico, setMudarGrafico] = useState('');


  const [values, setValues] = useState();
  // REQUEST API
  useEffect( ()=>{
    const fetchData = async () =>{
      try {
        const resposta = await ConnApi.get(`/allDataUser/${user}`)
        console.log(resposta);
        const dadosConvertidos = resposta.data.data.map(item => ({
          ...item,
          dados_valor: Number(item.dados_valor),
        }));
        setValues(dadosConvertidos)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])

  const [oi , setOi] = useState("")
  useEffect(()=>{
    setOi(values? values.filter((item)=>item.dados_tipo == mudarGrafico):"")
    
  },[mudarGrafico])

  useEffect(()=>{
    setMudarGrafico("temperatura")
  },[])
  useEffect(()=>{
  //   console.log(values);
  console.log(oi);

  },[oi])


  return (
    <section className="grafico-area">
{/* Botões para mudar os parâmetros do grafico */}
        <ul class="filtro-graphics">
            <li onClick={() => setMudarGrafico("temperatura")} className=" style-button"> Temperatura</li>
            <li onClick={() => setMudarGrafico("bpm")} className=" style-button"> BPM</li>
            <li onClick={() => setMudarGrafico("oxigenacao")} className=" style-button"> oxidação</li>
            {/* <li onClick={() => setMudarGrafico("temp")} className=" style-button"> Temperatura</li>
            <li onClick={() => setMudarGrafico("bpm")} className=" style-button"> BPM</li>
            <li onClick={() => setMudarGrafico("ox")} className=" style-button"> oxidação</li> */}
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