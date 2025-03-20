import "./middle.css"
import Footer from "./footer"
import Card from "./card"
import Logs from "./logs"
import GraficoLog from "./chart"
import Title from "./title"

const Middle = () =>{

    return(
        /* Função apenas para facilitar a organização da pagina*/
<div class="meio-pagina">
  
    <Title/>
    
    <GraficoLog/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    <Logs/>
    
    <Footer/>
</div>
    )
}

export default Middle;