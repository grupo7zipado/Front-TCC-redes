import "./card.css"
import ConnApi from "../conn"
import { useState } from "react"
import { useEffect } from "react"
import mqtt from "mqtt"
const Card = ()=>{
    const [dados, setDados] = useState([
      {
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },{
        oxig_valor: "100",
        temp_valor: "319",
        bpm_valor: "99"
      },
      {}
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
       
      
      
    return(
        <>
        
            {
              
            dados?
            dados.map(dado=>(
              <>
              <div class="container">
                <div class="card">
                  <div class="title">Nome Sobrenome</div>      {/*fazer funçao para pegar nome user*/}
                    <div class="metric-um bpm">
                         ❤️<span>100bpm</span>
                    </div>
                    <div class="metric-dois temp">
                        🌡️<span>36°C</span>
                    </div>
                    <div class="metric-tres spo2">
                        🩸<span>99%</span>
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