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
      },
      {
        "use_id": 11,
        "usu_id": 3,
        "esp_id": 4,
        "usu_nome": "Bruno Henrique dos Santos",
        "usu_nascimento": "1998-07-15T03:00:00.000Z",
        "temp_valor": "360",
        "bpm_valor": "96",
        "oxig_valor": "97"
      },
      {
        "use_id": 13,
        "usu_id": 4,
        "esp_id": 4,
        "usu_nome": "Camila Fernanda Oliveira",
        "usu_nascimento": "2001-12-03T02:00:00.000Z",
        "temp_valor": "354",
        "bpm_valor": "66",
        "oxig_valor": "100"
      },
      {
        "use_id": 5,
        "usu_id": 5,
        "esp_id": 5,
        "usu_nome": "Diego Rafael Lima",
        "usu_nascimento": "1995-09-27T03:00:00.000Z",
        "temp_valor": "346",
        "bpm_valor": "71",
        "oxig_valor": "98"
      },
      {
        "use_id": 6,
        "usu_id": 6,
        "esp_id": 6,
        "usu_nome": "Eduarda Cristina Mendes",
        "usu_nascimento": "1999-06-10T03:00:00.000Z",
        "temp_valor": "355",
        "bpm_valor": "90",
        "oxig_valor": "97"
      },
      {
        "use_id": 7,
        "usu_id": 7,
        "esp_id": 7,
        "usu_nome": "Fernando Augusto Pereira",
        "usu_nascimento": "2002-02-18T03:00:00.000Z",
        "temp_valor": "356",
        "bpm_valor": "99",
        "oxig_valor": "97"
      },
      {
        "use_id": 8,
        "usu_id": 8,
        "esp_id": 8,
        "usu_nome": "Gabriela Nunes de Souza",
        "usu_nascimento": "1997-11-22T02:00:00.000Z",
        "temp_valor": "343",
        "bpm_valor": "85",
        "oxig_valor": "98"
      },
      {
        "use_id": 9,
        "usu_id": 9,
        "esp_id": 9,
        "usu_nome": "Henrique Matheus Rocha",
        "usu_nascimento": "2000-08-05T03:00:00.000Z",
        "temp_valor": "343",
        "bpm_valor": "67",
        "oxig_valor": "100"
      },
      {
        "use_id": 10,
        "usu_id": 10,
        "esp_id": 10,
        "usu_nome": "Isabela Vitória Cardoso",
        "usu_nascimento": "1996-05-30T03:00:00.000Z",
        "temp_valor": "355",
        "bpm_valor": "97",
        "oxig_valor": "99"
      }
    ])
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