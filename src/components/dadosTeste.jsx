export const DadosTeste= [
    {
        dados_id: 2,
        dados_tipo: "bpm",
        dados_valor: "80",
        dados_generate: "2025-03-03T17:00:00.000Z"
      },
      {
        dados_id: 2,
        dados_tipo: "bpm",
        dados_valor: "80",
        dados_generate: "2025-03-03T17:00:00.000Z"
      },
      {
        dados_id: 2,
        dados_tipo: "bpm",
        dados_valor: "80",
        dados_generate: "2025-03-03T17:00:00.000Z"
      },
      {
        dados_id: 1,
        dados_tipo: "bpm",
        dados_valor: "80",
        dados_generate: "2025-03-03T17:00:00.000Z"
      },
    
     
  
  ];
  
  // Função genérica para filtrar valores por tipo
  export const getFiltragem = (DadosTeste, dados_tipo) =>
    DadosTeste
      .filter((item) => item.tipo === dados_tipo)
      .map((item, index) => (
        <span key={index}>{item.valor} {dados_tipo === "temperatura" ? "°C" : ""} </span>
      ));