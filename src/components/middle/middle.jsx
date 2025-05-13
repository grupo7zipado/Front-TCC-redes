import "./middle.css"
import Card from "../card/card"
import { useRef, useState } from "react"
import { useEffect } from "react"
import UsuarioEsp from "../usuarioesp/usuariosEsp"
import RegisterUser from "../register/registerUser"
import Grafico from "../grafico/grafico"
import Teste from "../teste"
import mqtt from "mqtt"
import ConnApi from "../../service/conn"
import { MQTTProvider, useMQTT } from "../../service/mqtt"
const Middle = ({tela, setTela}) =>{
    //const [subInscrito, setSubInscrito] = useState(false);
    const [requests_esp, setEspMac] = useState([]);
    const [ user, setUser] = useState("")
    const [ esp, setEsp] = useState("")
    //const conectadoRef = useRef(false);
    //const dadosRef = useRef([]);
    // const [ dados, setDados] = useState([
    //     {
    //       "use_id": 2,
    //       "usu_id": 2,
    //       "esp_id": 2,
    //       "usu_nome": "Arnaldo Miguel da Silva",
    //       "usu_nascimento": "01-04-2000",
    //       "temp_valor": "67",
    //       "bpm_valor": "80",
    //       "oxig_valor": "28"
    //     }
    // ])
    const [usuValues , setUsuValues]= useState([])


      const { client, isConnected } = useMQTT();
      useEffect(() => {
        if (client && isConnected) {
    
          const topic = "+/request_user";
    
          client.subscribe(topic, (err) => {
            if (err) {
              console.error('Erro ao se inscrever:', err);
            } else {
              console.log(`Inscrito no tópico: ${topic}`);
            }
          });
    
          const handleMessage = (topic, message) => {
            console.log(`Mensagem recebida em ${topic}: ${message.toString()}`);
          };
    
          client.on('message', handleMessage);
    
          return () => {
            client.unsubscribe(topic);
            client.off('message', handleMessage);
          };
        }
      }, [client, isConnected]);
    // useEffect(() => {
    //     dadosRef.current = dados;
    // }, [dados]);
    
    // // useEffect(()=>{ console.log(user) },[user])
    // // useEffect(()=>{ console.log(tela) },[tela])
    // // useEffect(()=>{ console.log(dados) },[dados])

    
    // // REQUEST API
    // const lastDataUsers = async () =>{
    //     try {
    //     const resposta = await ConnApi.get("/lastDataUsers")
    //     setDados(resposta.data.data)
    //     } catch (error) {
    //     console.log(error);
    //     }
    // }
    // useEffect(()=>{ lastDataUsers() },[])


    // const MQTT_BROKER = "ws://localhost:9001"; // Altere para seu broker MQTT
    // //const MQTT_TOPIC =[ "oxigenacao", "bpm", "temperatura" , "esp32/envio " , "esp32/teste"]; // Altere para o tópico desejado


    // const client = mqtt.connect(MQTT_BROKER); // ou o IP do seu servidor

    // useEffect(() => {
    //     if (conectadoRef.current) return;

    //     conectadoRef.current = true;

    //     client.on('connect', () => {
    //         console.log('Conectado');
    //         client.subscribe('+/request_user');

    //     });

    //     client.on('message', (topic, message) => {
    //         console.log("a");
            
    //         const [esp_mac, action] = topic.split('/');
    //         if (action === 'request_user') {
    //             setEspMac((prev) => [...prev, {Topico: topic, esp_mac: message?.toString() || ''}]);
    //         }
    //         if (action === "temperatura"  || action === "bpm" || action === "oxigenacao") {
    //             const menssage = JSON.parse(message.toString());
    //             const use_id = menssage.use_id;
    //             const dados_tipo = menssage.dados_tipo
    //             const dados_valor = menssage.dados_valor
    //             let chave
    //             if (dados_tipo == "temperatura") {
    //             chave = "temp_valor"
    //             }
    //             if (dados_tipo == "bpm") {
    //             chave = "bpm_valor"
    //             }
    //             if (dados_tipo == "oxigenacao") {
    //             chave = "oxig_valor"
    //             }
    //             // aaaa
    //             setDados(
    //                 (prevData)=> 
    //                     prevData.map(
    //                         dataItem=> dataItem.use_id === use_id ? { ...dataItem , [chave] : dados_valor} : dataItem
    //                     )
    //             )
    //         }
            
    //     });

    //     return () => {
    //         if (client.connected) {
    //         client.end();
    //         }
    //     };
    // }, []);


    //QUANDO O CARA CLICA NO CARDZINHO DO NOVO ESP
    const newEsp = (esp)=>{
        setEsp(esp);
        setTela("espUser")
    }


    //TROCA AS SUBSCRIÇÕES DE ACORDO COM A TELA 
    // useEffect(() => {
    //     if( tela === "card"){
    //         client.subscribe('+/temperatura');
    //         client.subscribe('+/bpm');
    //         client.subscribe('+/oxigenacao');

    //         client.unsubscribe(`${user.esp_mac}/*`, (err) => {
    //             if (err) {
    //                 console.error('Erro ao desinscrever:', err);
    //             } else {
    //                 console.log('Desinscrito com sucesso!');
    //             }
    //         })
    //     }
    //     if (tela === "grafico") {
    //         client.subscribe(`${user.esp_mac}/*`);
    //         client.unsubscribe(['+/temperatura', '+/bpm', '+/oxigenacao'], (err) => {
    //             if (err) {
    //                 console.error('Erro ao desinscrever:', err);
    //             } else {
    //                 console.log('Desinscrito com sucesso!');
    //             }
    //         })
    //     }
    // }, [tela]);
    
    return(
        /* Função apenas para facilitar a organização da pagina*/
        <div class="meio-pagina">
            {
                <>
                        {

                            tela === "card"
                            ?
                            <Card setUser = {setUser} setTela = {setTela}/>
                            :
                            tela === "espUser"
                            ?
                            <UsuarioEsp esp={esp} setEsp={setEsp} setEspMac={setEspMac}/> 
                            :
                            tela === "cadUser"
                            ?
                            <RegisterUser/>
                            :
                            tela === "grafico"
                            ?
                            <Grafico user={user} usuValues = {usuValues} setUsuValues = {setUsuValues}/>
                            :
                            ""
                        }
                        {
                            <div className="Requests">
                                {
                                    requests_esp
                                    ? 
                                    requests_esp.map(
                                        (esp)=>{
                                            return(
                                                <div className="RequestCard" onClick={()=>{newEsp(esp)}}>
                                                    <strong>Novo ESP conectado</strong>
                                                    <div>MAC: {esp.esp_mac}</div>
                                                </div>
                                            )
                                        }
                                    )
                                    :
                                    ""
                                }
                            </div>
                        }
                </>
            } 

        </div>
    )
}

export default Middle;