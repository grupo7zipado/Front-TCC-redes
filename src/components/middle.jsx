import "./middle.css"
import Footer from "./footer"
import Card from "./card"
import Logs from "./logs"
import GraficoLog from "./chart"

const Middle = () =>{

    return(
        /* Função apenas para facilitar a organização da pagina*/
<div class="meio-pagina">
    {/* <Logs/> */}
    
    <GraficoLog/>
    <Footer/>
</div>
    )
}

export default Middle;