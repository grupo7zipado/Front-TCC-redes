import { useEffect, useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ConnApi from "../service/conn";
import { useMQTT } from "../service/mqtt";


const GraficoLog = ({user}) => {



  const [mudarGrafico, setMudarGrafico] = useState('');


  const [values, setValues] = useState();
  // REQUEST API
  useEffect( ()=>{
    const fetchData = async () =>{
      try {
        const resposta = await ConnApi.get(`/allDataUser/${user.usu_id}`)
        console.log(resposta);
        const dadosConvertidos = resposta.data.data.map(item => ({
          ...item,
          dados_valor: Number(item.dados_valor),
        }));
        setValues(dadosConvertidos)
        setMudarGrafico("temperatura")

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])

  const [dadosExibidos , setDadosExibidos] = useState("");

  useEffect(()=>{
    // filtra o itens de acordo com o dados_tipo e seleciona os 10 ultimos 
    setDadosExibidos(values? values.filter((item)=>item.dados_tipo == mudarGrafico).slice(-10):"")
    //console.log(dadosExibidos);
    console.log(values);
    
  },[mudarGrafico,values])



  const { client, isConnected } = useMQTT();
  useEffect(() => {
    if (client && isConnected) {

      const topic = `${user.esp_mac}/#`;
      console.log(topic);
      
      client.unsubscribe(['+/temperatura', '+/bpm', '+/oxigenacao'], (err) => {
          if (err) {
              console.error('Erro ao desinscrever:', err);
          } else {
              console.log('Desinscrito com sucesso!');
          }
      })
      client.subscribe(topic, (err) => {
        if (err) {
          console.error('Erro ao se inscrever:', err);
        } else {
          console.log(`Inscrito no tópico: ${topic}`);
        }
      });

      const handleMessage = (topic, message) => {
        const [esp_mac, action] = topic.split('/');

        //LOG
        
        if (esp_mac === user.esp_mac) {
          
          // TRANSFORMA A MESSAGEM EM JSON
          const novoItem = JSON.parse(message.toString());

          //TROCA O VALOR DO DADO PARA NUMBER
          novoItem.dados_valor =  Number(novoItem.dados_valor);
          
          //ADICIONA ELE NO ARRAY DE VALORES
          setValues(prevItens => [...prevItens, novoItem]);
        }
      };

      client.on('message', handleMessage);

      return () => {
        client.unsubscribe(topic);
        client.off('message', handleMessage);
      };
    }
  }, [client, isConnected]);




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