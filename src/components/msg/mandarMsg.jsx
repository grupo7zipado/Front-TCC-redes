import React, { useState } from 'react';
import { useMQTT } from '../../service/mqtt';
import "./enviarMsg.css";

const EnviarMensagem = ({esp_mac}) => {
  const { client, isConnected } = useMQTT();
  const [mensagem, setMensagem] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const enviarMensagem = () => {
    

    //client.publish(`${esp?esp: esps[espSelecionado-1].esp_mac}/response_user`,  String(resposta.data.data.insertId));
    if (isConnected && client && mensagem.trim() !== '') {
      client.publish(`${esp_mac}/msg`, mensagem);
      console.log('Mensagem enviada!');
      setMensagemEnviada(true); // mostra a mensagem
      setTimeout(() => setMensagemEnviada(false), 3000); // some em 3s
      setMensagem('');
    } else {
      console.log('MQTT não conectado ou mensagem vazia.');
    }
 };

 return (
  <div className="Box-MSG">
    <h2 className="Titulo">Enviar mensagem ao display</h2>
    {mensagemEnviada && (
  <p style={{ color: 'lightgreen', marginTop: '10px', fontSize: '15px', position: 'absolute', height: '20px', width: '300px', left: '45px', top: '30px'
  }}>
    Mensagem enviada com sucesso!
  </p>
)}

    <div style={{ position: 'relative', width: '100%' }}>
    <textarea
  className="msg"
  value={mensagem}
  onChange={(e) => setMensagem(e.target.value)}
  placeholder="Mensagem..."
  maxLength={100}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // impede quebra de linha
      enviarMensagem();  // chama a função
    }
  }}
/>
      <div style={{
        
        position: 'absolute',
        bottom: '10px',
        right: '20px',
        fontSize: '12px',
        color: '#ccc'
      }}>
        {mensagem.length}/100
      </div>
    </div>

    <button className="botao" onClick={enviarMensagem}>
      Enviar
    </button>
  </div>
);
};

export default EnviarMensagem;