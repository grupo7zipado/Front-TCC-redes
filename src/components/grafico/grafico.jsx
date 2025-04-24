import GraficoLog from "../chart"
import Logs from "../logs"
import Title from "../title"


// Organiza o Gráfico do usuário junto dos logs de seus sinais vitais //
const Grafico = ({user})=>{
    
    return(
        <>
            <Title/>
            <GraficoLog user={user}/>
            <Logs/> 
            <Logs/> 
            <Logs/> 
            <Logs/> 
            <Logs/> 
            <Logs/> 
        </>
    )
}
export default Grafico