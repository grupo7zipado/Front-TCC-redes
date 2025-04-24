import GraficoLog from "../chart"
import Logs from "../logs"
import Title from "../title"

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