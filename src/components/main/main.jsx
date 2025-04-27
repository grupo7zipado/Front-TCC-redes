import { useState } from "react"
import Header from "../header"
import Middle from "../middle/middle"
const Main = ()=>{
    const [tela, setTela] = useState("card");



    return(
        <>  
            <Header setTela = {setTela}/>
            <Middle tela = {tela} setTela = {setTela}/>
        </>
    )
}

export default Main