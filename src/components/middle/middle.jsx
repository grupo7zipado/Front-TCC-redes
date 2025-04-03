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
            <div className="usuariosesp df jcc ac fdc w600 h400 wmax090">
                <div className="fs1_5 p002">
                    CADASTRO USUÁRIO ESP
                </div>
                <div className="usuariosespcorpo w080 h050">
                    <div className="df fdr">
                        <div>
                            USUARIO SELECIONADO
                        </div>
                        <select name="usuario" id="usuario">
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
                    <div className="df fdr">
                        <div>
                            ESP SELECIONADO
                        </div>
                        <select name="esp" id="esp">
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
                <input type="button" value="ANEXAR ESP" />
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