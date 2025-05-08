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
            <div className="">
                lembrar
                1. Render (https://render.com)
                Roda Node.js, Express e até brokers pequenos.

                Fácil de configurar com GitHub.

                Plano gratuito com limite de uso (free tier com sleep mode).

                2. Railway (https://railway.app)
                Hospeda backend e frontend.

                Integração com GitHub.

                Bom para projetos de pequeno porte.

                3. Fly.io
                Permite rodar containers com Node, bancos de dados etc.

                Requer Docker (mas é poderoso).
            </div>
            <button onClick={conectarAoBroker}>Conectar</button>
            <button onClick={publicarMensagem}>Publicar</button>
            <button onClick={desconectarDoBroker}>Desconectar</button>
        </div>
    )
}
export default Teste