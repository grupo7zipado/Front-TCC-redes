import mqtt from "mqtt"
import { useEffect, useState } from "react"

const Teste = ()=>{
    let client = null // conexão persistente

const conectarAoBroker = () => {
    if (!client || client.disconnected) {
        client = mqtt.connect('ws://localhost:9001')

        client.on('connect', () => {
            console.log('✅ Conectado ao broker')
        })

        client.on('error', (err) => {
            console.error('❌ Erro na conexão:', err)
            client.end()
        })
    }
}

const publicarMensagem = () => {
    if (client && client.connected) {
        client.publish('meu/topico', 'Mensagem enviada do front')
    } else {
        console.warn('⚠️ Broker não conectado')
    }
}

const desconectarDoBroker = () => {
    if (client && client.connected) {
        client.end(() => {
            console.log('🔌 Conexão encerrada')
        })
    }
    client = null
    console.log(client);
    
}

    return (
        <div>
            <button onClick={conectarAoBroker}>Conectar</button>
            <button onClick={publicarMensagem}>Publicar</button>
            <button onClick={desconectarDoBroker}>Desconectar</button>
        </div>
    )
}
export default Teste