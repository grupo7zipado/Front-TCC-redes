import "./middle.css"
import "../usuarioesp/styles.css"
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

    const UsuarioEsp= ()=>{
        const usuarios = [
            {
                usu_id:1,
                usu_nome: "ze",
                usu_nascimento: "2000-10-10"
            },
            {
                usu_id:2,
                usu_nome: "ola",
                usu_nascimento: "2000-10-10"
            },
            {
                usu_id:3,
                usu_nome: "dsa",
                usu_nascimento: "2000-10-10"
            },
            {
                usu_id:4,
                usu_nome: "abc",
                usu_nascimento: "2000-10-10"
            }
        ]
        const esps = [
            {
                esp_id:1,
                esp_mac: "aa"
            },
            {
                esp_id:2,
                esp_mac: "aaa"
            },
            {
                esp_id:3,
                esp_mac: "aaaa"
            },
            {
                esp_id:4,
                esp_mac: "aaaaa"
            },
            {
                esp_id:5,
                esp_mac: "aaaaaa"
            },
        ]
        return(
            <div className="usuariosesp df jcsa ac fdc w600 h300 wmax090">
                <div className="fs1_5 p002">
                    CADASTRO USUÁRIO ESP
                </div>
                <div className="usuariosespcorpo w1 h050 df jcc ">
                    <div className="usuariosespcorpointerno w080 h1 df fdc ac jcsa">
                        <div className="titleselect df fdr w1 df ac jcsa mt20">
                            <div  className=" w045_80 w045 tal">
                                USUARIO SELECIONADO
                            </div>
                            <select name="usuario" className="selectue w045_80 w045 h30" id="usuario">
                                <option value="" selected hidden></option>
                                {
                                    usuarios
                                    ?
                                    usuarios.map(
                                        usuario =>
                                            <option value={usuario.usu_id}>{usuario.usu_nome}</option>
                                    )
                                    :
                                    ""
                                }
                            </select>
                        </div>
                        <div className="titleselect df fdr w1 df ac jcsa mt20">
                            <div className="w045_80 w045 tal">
                                ESP SELECIONADO
                            </div>
                            <select name="esp" className="selectue w045_80 w045 h30" id="esp">
                                <option value="" selected hidden></option>
                                {
                                    esps
                                    ?
                                    esps.map(
                                        esp =>
                                            <option value={esp.esp_id}>{esp.esp_mac}</option>
                                    )
                                    :
                                    ""
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <input type="button" value="ANEXAR ESP" className="cadastrar-button h50"/>
            </div>
        )
    }


    return(
        /* Função apenas para facilitar a organização da pagina*/
        <div class="meio-pagina">
            {
                <>
                    {/* <Card setUserData = {setUserData} /> */}
                     {/* <Title/>
                    <GraficoLog/>
                    <Logs/> 
                    <Logs/> 
                    <Logs/> 
                    <Logs/> 
                    <Logs/> 
                    <Logs/>   */}
                    <UsuarioEsp/>
                </>
            } 

        </div>
    )
}

export default Middle;