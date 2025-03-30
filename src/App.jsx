
import './App.css'
import './reset.css'
import Main from './components/main/main'
import RegisterUser from'./components/register/registerUser'
import Title from './components/title'
import GraficoLog from './components/chart'
import Logs from './components/logs'

function App() {
  const TelaGrafico = ()=>{
    return(
        <>
            <div className="df ac jcc ww1 hh1 fdc">

                {/* <Title/>
                <GraficoLog/>
                <Logs/> */}
            </div>
        </>
    )
}

  return(
    <> 
      
      <Main/>
      <RegisterUser/>
      {/* <TelaGrafico/> */}

    </> 
  )
}

export default App
