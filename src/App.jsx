
import { useEffect } from 'react'
import './App.css'
import ConnApi from './conn'
function App() {
  useEffect(()=>{
    
  })
  const dados = [
    {

    },
    {

    },
    {

    }
  ]
  const Card = ()=>{

    return(
      {
        dados.map(()=>{
          return(
            <div class="container">
              <div class="card">
                  <div>              
                  </div>
                  <div>
                      <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                          <text x="10" y="35" font-family="Arial" font-size="24" fill="#007bff" font-weight="bold">O₂</text>
                          <rect x="40" y="10" width="90" height="40" rx="10" fill="#007bff" opacity="0.2"/>
                          <text x="85" y="38" font-family="Arial" font-size="24" fill="#007bff" text-anchor="middle" id="spo2-value">98%</text>
                      </svg>
                      <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                          <text x="10" y="35" font-family="Arial" font-size="24" fill="#ff5733" font-weight="bold">🌡️</text>
                          <rect x="40" y="10" width="90" height="40" rx="10" fill="#ff5733" opacity="0.2"/>
                          <text x="85" y="38" font-family="Arial" font-size="24" fill="#ff5733" text-anchor="middle" id="temp-value">36.5°C</text>
                      </svg>
                      <svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                          <text x="10" y="35" font-family="Arial" font-size="24" fill="#e63946" font-weight="bold">❤️</text>
                          <rect x="40" y="10" width="90" height="40" rx="10" fill="#e63946" opacity="0.2"/>
                          <text x="85" y="38" font-family="Arial" font-size="24" fill="#e63946" text-anchor="middle" id="bpm-value">75 BPM</text>
                      </svg>
                  </div>
              </div>
          </div>   
          )
        })
      }   
    )
  }
  return(
    <>
    </> 
  )
}

export default App
