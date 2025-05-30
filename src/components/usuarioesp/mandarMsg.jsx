import React, { useState } from 'react';
import { useMQTT } from '../context/MQTTContext';

const EnviarMensagem = () => {
  const { client, isConnected } = useMQTT();
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () => {
    if (isConnected && client && mensagem.trim() !== '') {
      client.publish('kiraz/cliente/mensagem', mensagem);
      alert('Mensagem enviada!');
      setMensagem('');
    } else {
      alert('MQTT não conectado ou mensagem vazia.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Enviar mensagem ao display</h2>
      <input
        type="text"
        className="w-full p-2 border mb-2 rounded"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite a mensagem..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={enviarMensagem}
      >
        Enviar
      </button>
      {!isConnected && <p className="text-red-500 mt-2">MQTT desconectado.</p>}
    </div>
  );
};

export default EnviarMensagem;