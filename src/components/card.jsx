import "./card.css"
import ConnApi from "../conn"
import { useState } from "react"
import { useEffect } from "react"
import mqtt from "mqtt"
const Card = ()=>{
    const [dados, setDados] = useState()
    useEffect( ()=>{
      const fetchData = async () =>{
        try {
          const resposta = await ConnApi.get("/lastDataUsers")
          console.log(resposta);
          setDados(resposta.data.data)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[])
    const MQTT_BROKER = "ws://localhost:9001"; // Altere para seu broker MQTT
    const MQTT_TOPIC =[ "oxigenacao", "bpm", "temperatura"]; // Altere para o tópico desejado
    const [message, setMessage] = useState([]);
    const atualizarValor = (esp_id, chave, novoValor) => {
      const teste = dados.find((dados) => dados.id === esp_id)
      console.log(teste);
      
      // if(dados.find((elemento) => elemento.id === esp_id)){
      //   setDados((dadosAnteriores) =>
      //     dadosAnteriores.map((item) =>
      //       item.esp_id === esp_id ? { ...item, [chave]: novoValor } : item
      //     )
      //   );
      // }else{
      //   setDados((prevTermos) => [...prevTermos, {esp_id: esp_id, chave:novoValor}]);
      // }
    };
    useEffect(() => {
      const client = mqtt.connect(MQTT_BROKER);
  
      client.on("connect", () => {
        console.log("Conectado ao broker MQTT");
        client.subscribe(MQTT_TOPIC, (err) => {
          if (err) console.error("Erro ao se inscrever no tópico", err);
        });
      });
  
      client.on("message", (topic, payload) => {
        const newMessage = JSON.parse(payload.toString());
        //console.log(newMessage);
  
        // Usando a função de atualização para garantir que pega o estado mais recente
        const id = newMessage.esp_id
        const tipo = newMessage.dados_tipo
        const valor = newMessage.dados_valor
        let chave
        if (tipo == "temperatura") {
          chave = "temp_valor"
        }
        if (tipo == "bpm") {
          chave = "bpm_valor"
        }
        if (tipo == "oxigenacao") {
          chave = "oxig_valor"
        }
        console.log({id: id,tipo: tipo, chave: chave, valor: valor});
        atualizarValor(id , chave, valor)
        setMessage((prevMessages) => [...prevMessages, newMessage]);
      });
  
      return () => {
        client.end();
      };
    }, []);
      /*Replico a matrix e refaço os dados
      
      const dados = [
        {
          id:1,
          ox: 99,
          temp: 36,5,
          bpm: 75,
        },
          {
          id:2,
          ox: 99,
          temp: 36,7,
          bpm: 72,
        },
          {
          id:3,
          ox: 98,
          temp: 37,5,
          bpm: 80,
        },
          {
          id:4,
          ox: 99,
          temp: 36,8,
          bpm: 78,
        },
          {
          id:5,
          ox: 97,
          temp: 37,1,
          bpm: 98,
        },
          {
          id:6,
          ox: 99,
          temp: 36,6,
          bpm: 84,
        },
          {
          id:7,
          ox: 99,
          temp: 37,
          bpm: 79,
        },
            
         
      ]

      
      */

      
      
    return(
        <>
        
            {
              /*
              Vou tentar fazer algo aqui
              dados.map(item)=> {

                <div class="container">
                <div class="card">
                    <div>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#007bff" font-weight="bold">O₂</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#007bff" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#007bff" text-anchor="middle" id="spo2-value">{item.ox}%</text>
                        </svg>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#ff5733" font-weight="bold">🌡️</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#ff5733" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#ff5733" text-anchor="middle" id="temp-value">{item.temp} °C</text>
                        </svg>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#e63946" font-weight="bold">❤️</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#e63946" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#e63946" text-anchor="middle" id="bpm-value">{item.bpm} BPM</text>
                        </svg>
                    </div>
                </div>
              </div>   
              }
                
              */
            dados?
            dados.map(dado=>(
              <>
                <div class="container">
                <div class="card">
                    <div>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#007bff" font-weight="bold">O₂</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#007bff" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#007bff" text-anchor="middle" id="spo2-value">{dado.oxig_valor}%</text>
                        </svg>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#ff5733" font-weight="bold">🌡️</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#ff5733" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#ff5733" text-anchor="middle" id="temp-value">{dado.temp_valor/10} °C</text>
                        </svg>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#e63946" font-weight="bold">❤️</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#e63946" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#e63946" text-anchor="middle" id="bpm-value">{dado.bpm_valor} BPM</text>
                        </svg>
                    </div>
                </div>
              </div>   
              </>
            ))
            :
            ""
          } 
        </> 
    )
}

export default Card;