import { useEffect, useState } from "react"
import Footer from "../footer"
import Header from "../header"
import Middle from "../middle/middle"
import RegisterUser  from "../register/registerUser"
const Main = ()=>{
    const [tela, setTela] = useState("card");



    return(
        <>  
            <Header setTela = {setTela}/>
            {/* <RegisterUser /> */}
            <Middle tela = {tela} setTela = {setTela}/>
            {/* <Footer/> */}
        </>
    )
}

export default Main