import "./card.css"
const Card = ()=>{
    const dados = [
        {
          esp_id:1,
          dados:{
            temperatura:{
              dados_id:1,
              dados_valor: 36.9,
              dados_generate: '2025-02-22 11:44:12'
            },
            bpm:{
              dados_id:2,
              dados_valor: 90,
              dados_generate: '2025-02-22 11:44:12'
            },
            oxigenacao:{
              dados_id:3,
              dados_valor: 99,
              dados_generate: '2025-02-22 11:44:12'
            }
          }
        },
      ]
    return(
        <>
        
            {
            dados.map(e=>(
              <div class="container">
                <div class="card">
                    <div>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#007bff" font-weight="bold">O₂</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#007bff" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#007bff" text-anchor="middle" id="spo2-value">{e.dados.oxigenacao.dados_valor}%</text>
                        </svg>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#ff5733" font-weight="bold">🌡️</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#ff5733" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#ff5733" text-anchor="middle" id="temp-value">{e.dados.temperatura.dados_valor} °C</text>
                        </svg>
                        <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="35" font-family="Arial" font-size="24" fill="#e63946" font-weight="bold">❤️</text>
                            <rect x="40" y="10" width="90" height="40" rx="10" fill="#e63946" opacity="0.2"/>
                            <text x="85" y="38" font-family="Arial" font-size="24" fill="#e63946" text-anchor="middle" id="bpm-value">{e.dados.bpm.dados_valor} BPM</text>
                        </svg>
                    </div>
                </div>
              </div>   
            ))
            }   
        </> 
    )
}

export default Card;