import { useEffect, useState } from "react"
import "./styles.css"
import ConnApi from "../../service/conn"
const UsuarioEsp= ({esp})=>{
    const [usuarios, setUsuarios] = useState([
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
    ])
    const [esps, setEsps] =useState([
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
    ])
    const [esp, setEsp] = useState();
    const [usuario, setUsuario] = useState()
    const [values, setValues] = useState();
    // REQUEST API
    useEffect( ()=>{
        const fetchData = async () =>{
        try {
            const resposta = await ConnApi.get(`/usuariosEsp`)
            setUsuarios(resposta.data.data.usuarios);
            setEsps(resposta.data.data.esps)
        } catch (error) {
            console.log(error);
        }
        }
        fetchData();
    },[])

    const CadastroUsuariosEsp = async ()=>{
        const fetchData = async () =>{
            try {

                const resposta = await ConnApi.get(`/usuariosEsp`, dados)
                setUsuarios(resposta.data.data.usuarios);
                setEsps(resposta.data.data.esps)
            } catch (error) {
                console.log(error);
            }
            }
            fetchData();
    }

    
    return(
        <div className="usuariosesp df jcsa ac fdc w600 h400 wmax090 br20">
            <div className="fs1_5 p002">
                CADASTRO USUÁRIO ESP
            </div>
            <div className="usuariosespcorpo w1 h050 df jcc ">
                <div className="usuariosespcorpointerno w080 h1 df fdc ac jcsa br20">
                    <div className="titleselect df fdr w1 df ac jcsa mt20">
                        <div  className=" w045_80 w045 tal">
                            USUARIO SELECIONADO
                        </div>
                        <select name="usuario" className="selectue w045_80 w045 h30 br5" id="usuario" onChange={(e)=>{setUsuario(e.target.value)}}>
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
                        <select name="esp" className="selectue w045_80 w045 h30 br5" id="esp" onChange={(e)=>{setEsp(e.target.value)}}>
                            <option value="" selected hidden></option>
                            {
                                esp
                                ?
                                <option value='' selected>{esp.Mensagem}</option>
                                :
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
export default UsuarioEsp;