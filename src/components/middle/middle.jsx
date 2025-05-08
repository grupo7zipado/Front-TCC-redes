import "./middle.css"
import Card from "../card/card"
import { useRef, useState } from "react"
import { useEffect } from "react"
import UsuarioEsp from "../usuarioesp/usuariosEsp"
import RegisterUser from "../register/registerUser"
import Grafico from "../grafico/grafico"
import Teste from "../teste"
import mqtt from "mqtt"

const Middle = ({tela, setTela}) =>{

    const [requests_esp, setEspMac] = useState([]);
    const [ user, setUser] = useState("")
    const [ esp, setEsp] = useState("")
    const conectadoRef = useRef(false);
    // useEffect(()=>{ console.log(user) },[user])
    //useEffect(()=>{ console.log(tela) },[tela])
    useEffect(()=>{ console.log(requests_esp) },[requests_esp])

    
    const MQTT_BROKER = "ws://localhost:9001"; // Altere para seu broker MQTT
    //const MQTT_TOPIC =[ "oxigenacao", "bpm", "temperatura" , "esp32/envio " , "esp32/teste"]; // Altere para o tópico desejado


    const client = mqtt.connect(MQTT_BROKER); // ou o IP do seu servidor

    useEffect(() => {
        if (conectadoRef.current) return;

        conectadoRef.current = true;

        client.on('connect', () => {
            console.log('Conectado');
            client.subscribe('+/request_user');
        });

        client.on('message', (topic, message) => {
            setEspMac((prev) => [...prev, {Topico: topic, Mensagem: message?.toString() || ''}]);
        });

        return () => {
            if (client.connected) {
            client.end();
            }
        };
    }, []);

    const newEsp = (esp)=>{
        console.log(esp);
        setEsp(esp);
        setTela("espUser")
    }

    return(
        /* Função apenas para facilitar a organização da pagina*/
        <div class="meio-pagina">
            {
                <>
                    {/* <Teste/> */}
                    {
                        tela === "card"
                        ?
                        <Card setUser = {setUser} setTela = {setTela} />
                        :
                        tela === "espUser"
                        ?
                        <UsuarioEsp esp={esp}/> 
                        :
                        tela === "cadUser"
                        ?
                        <RegisterUser/>
                        :
                        tela === "grafico"
                        ?
                        <Grafico user={user}/>
                        :
                        ""
                    }
                    {/*  */}
                    {
                        <div className="Requests">
                             {
                                requests_esp
                                ? 
                                requests_esp.map(
                                    (esp)=>{
                                        return(
                                            <div className="RequestCard" onClick={()=>{newEsp(esp)}}>
                                                <strong>Novo ESP conectado:</strong>
                                                <div>MAC: {esp.Mensagem}</div>
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