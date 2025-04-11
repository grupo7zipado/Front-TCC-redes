import "./card.css"
import ConnApi from "../../conn"
import { useState } from "react"
import { useEffect } from "react"
import mqtt from "mqtt"
import Modal from "../modal/modal"
import Title from "../title"
import GraficoLog from "../chart"
import Logs from "../logs"
const Card = ({setUserData})=>{
    const [dados, setDados] = useState([
      {
        "use_id": 2,
        "usu_id": 2,
        "esp_id": 2,
        "usu_nome": "Arnaldo Miguel da Silva",
        "usu_nascimento": "2000-04-01T03:00:00.000Z",
        "temp_valor": "67",
        "bpm_valor": "80",
        "oxig_valor": "28"
      }
    ])
    // REQUEST API
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


    const MQTT_BROKER = "ws://localhost:9001"; // Altere para seu broker MQTT
    const MQTT_TOPIC =[ "oxigenacao", "bpm", "temperatura"]; // Altere para o tópico desejado



    useEffect(() => {
      const client = mqtt.connect(MQTT_BROKER); // ou o IP do seu servidor
  
      client.on('connect', () => {
        console.log('Conectado ao MQTT via WebSocket');
        client.subscribe(MQTT_TOPIC, (err) => {
          if (!err) {
            console.log(`Inscrito no tópico ${MQTT_TOPIC}`);
          }
        });
      });
  
      client.on('message', (topic, message) => {
        console.log(`Mensagem no tópico ${topic}:`, message.toString());
        const menssage = JSON.parse(message.toString());
        const use_id = menssage.use_id;
        const dados_tipo = menssage.dados_tipo
        const dados_valor = menssage.dados_valor
        let chave
        if (dados_tipo == "temperatura") {
          chave = "temp_valor"
        }
        if (dados_tipo == "bpm") {
          chave = "bpm_valor"
        }
        if (dados_tipo == "oxigenacao") {
          chave = "oxig_valor"
        }

        setDados(
          (prevData)=> 
            prevData.map(
              dataItem=> dataItem.use_id === use_id ? { ...dataItem , [chave] : dados_valor} : dataItem
            )
        )
      });
  
      client.on('error', (error) => {
        console.error('Erro na conexão MQTT:', error);
      });
  
      return () => {
        if (client.connected) {
          client.end();
        }
      };
    }, []);

    // REQUEST 
    // useEffect(() => {
    //     const client = mqtt.connect(MQTT_BROKER);
      
    //     client.on("connect", () => {
    //       console.log("Conectado ao broker MQTT");
    //       client.subscribe(MQTT_TOPIC, (err) => {
    //         if (err) console.error("Erro ao se inscrever no tópico", err);
    //       });
    //     });
      
    //     client.on("message", (topic, payload) => {
    //       console.log(payload.toString())
    //       const newMessage = JSON.parse(payload.toString());
    //       //console.log(newMessage);
      
    //       // Usando a função de atualização para garantir que pega o estado mais recente
    //       const id = newMessage.esp_id
    //       const tipo = newMessage.dados_tipo
    //       const valor = newMessage.dados_valor
    //       let chave
    //       if (tipo == "temperatura") {
    //         chave = "temp_valor"
    //       }
    //       if (tipo == "bpm") {
    //         chave = "bpm_valor"
    //       }
    //       if (tipo == "oxigenacao") {
    //         chave = "oxig_valor"
    //       }
    //       console.log({id: id,tipo: tipo, chave: chave, valor: valor});
    //       atualizarValor(id , chave, valor)
    //       setMessage((prevMessages) => [...prevMessages, newMessage]);
    //     });
      
    //     return () => {
    //       client.end();
    //     };
    //   }, [])
      
    return(
        <>
          {
            dados?
            dados.map(dado=>(
              <>
                <div className="container wmin250 m001 " 
                  onClick={
                    () => {
                      setUserData(dado.usu_id);
                    }
                  }
                >
                  <div class="card wmin250">
                    <div class="title">{dado.usu_nome}</div>      
                      <div class="metric-um bpm w1">
                        ❤️<span>{dado.bpm_valor}bpm</span>
                      </div>
                      <div className="df w1 ac jcsb ">
                        <div class="metric-dois temp w040">
                          🌡️<span>{dado.temp_valor}°C</span>
                        </div>
                        <div class="metric-tres spo2 w040">
                          🩸<span>{dado.oxig_valor}%</span>
                        </div>  
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


// // salvar

// useEffect( ()=>{
//   const fetchData = async () =>{
//     try {
//       const resposta = await ConnApi.get("/lastDataUsers")
//       console.log(resposta);
//       setDados(resposta.data.data)
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   fetchData();
// },[])
// const MQTT_BROKER = "ws://localhost:9001"; // Altere para seu broker MQTT
// const MQTT_TOPIC =[ "oxigenacao", "bpm", "temperatura"]; // Altere para o tópico desejado
// const [message, setMessage] = useState([]);
// const atualizarValor = (esp_id, chave, novoValor) => {
//   const teste = dados.find((dados) => dados.id === esp_id)
//   console.log(teste);
  
//   // if(dados.find((elemento) => elemento.id === esp_id)){
//   //   setDados((dadosAnteriores) =>
//   //     dadosAnteriores.map((item) =>
//   //       item.esp_id === esp_id ? { ...item, [chave]: novoValor } : item
//   //     )
//   //   );
//   // }else{
//   //   setDados((prevTermos) => [...prevTermos, {esp_id: esp_id, chave:novoValor}]);
//   // }
// };
// useEffect(() => {
//   const client = mqtt.connect(MQTT_BROKER);

//   client.on("connect", () => {
//     console.log("Conectado ao broker MQTT");
//     client.subscribe(MQTT_TOPIC, (err) => {
//       if (err) console.error("Erro ao se inscrever no tópico", err);
//     });
//   });

//   client.on("message", (topic, payload) => {
//     const newMessage = JSON.parse(payload.toString());
//     //console.log(newMessage);

//     // Usando a função de atualização para garantir que pega o estado mais recente
//     const id = newMessage.esp_id
//     const tipo = newMessage.dados_tipo
//     const valor = newMessage.dados_valor
//     let chave
//     if (tipo == "temperatura") {
//       chave = "temp_valor"
//     }
//     if (tipo == "bpm") {
//       chave = "bpm_valor"
//     }
//     if (tipo == "oxigenacao") {
//       chave = "oxig_valor"
//     }
//     console.log({id: id,tipo: tipo, chave: chave, valor: valor});
//     atualizarValor(id , chave, valor)
//     setMessage((prevMessages) => [...prevMessages, newMessage]);
//   });

//   return () => {
//     client.end();
//   };
// }, []);

export default Card;