import "./middle.css"
import Card from "../card/card"
import { useState } from "react"
import { useEffect } from "react"
import UsuarioEsp from "../usuarioesp/usuariosEsp"
import RegisterUser from "../register/registerUser"
import Grafico from "../grafico/grafico"
import Teste from "../teste"

const Middle = ({tela, setTela}) =>{


    const [ user, setUser] = useState("")

    const [ userData, setUserData] = useState();

    // useEffect(()=>{
    //     console.log(user);
        
    // },[user])


    useEffect(()=>{
        console.log(tela);
        
    },[tela])
    
    return(
        /* Função apenas para facilitar a organização da pagina*/
        <div class="meio-pagina">
            {
                <>
                    {/* <Teste/> */}
                    {
                        tela === "card"
                        ?
                        <Card setUser = {setUser} setTela = {setTela} />
                        :
                        tela === "espUser"
                        ?
                        <UsuarioEsp/> 
                        :
                        tela === "cadUser"
                        ?
                        <RegisterUser/>
                        :
                        tela === "grafico"
                        ?
                        <Grafico user={user}/>
                        :
                        ""
                    }
                    {/*  */}
                </>
            } 

        </div>
    )
}

export default Middle;