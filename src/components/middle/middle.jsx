import "./middle.css"
import Footer from "../footer"
import Logs from "../logs"
import GraficoLog from "../chart"
import Title from "../title"
import Card from "../card/card"
import { useState } from "react"

const Middle = () =>{
    const [ pagina, setPagina ] = useState("card");
    return(
        /* Função apenas para facilitar a organização da pagina*/
        <div class="meio-pagina">
            {
                pagina ===  "card"
                ?
                <Card/>
                :
                <>
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
                </>
            } 
        </div>
    )
}

export default Middle;