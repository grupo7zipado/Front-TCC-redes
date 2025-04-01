import "./middle.css"
import Footer from "../footer"
import Logs from "../logs"
import GraficoLog from "../chart"
import Title from "../title"
import Card from "../card/card"
import { useState } from "react"
import Modal from "../modal/modal"
import { useEffect } from "react"

const Middle = () =>{



    const [ userData, setUserData] = useState();



    return(
        /* Função apenas para facilitar a organização da pagina*/
        <div class="meio-pagina">
            {
                <>
                    {/* <Card setUserData = {setUserData} /> */}
                     <Title/>
                    <GraficoLog/>
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