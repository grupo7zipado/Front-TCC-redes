import { useEffect } from "react";
import "./logs.css"

const Logs = ({values}) =>{
    // useEffect(()=>{console.log(values);
    // },[])
    return(
        /* define os logs do usuário com suas informações (temperatura, nivel de oxigenação do sangue, batimentos cardiacos e a hora em que os dados foram inseridos*/
        /* define os logs do usuario de sinais vitais como temperatura, oxigenação, bpm e hora em que os dados foram gerados*/
<ul class="logset">
  
    <li class="com-log w020">
        <p class="titulo-log">
            {values.dados_tipo}
        </p>
        <label class="info-log">
            {values.dados_valor}
        </label>
    </li>
    <li class="com-log w035">
        <p class="titulo-log">
            Hora
        </p>
        <label class="info-log">
            {values.dados_generate}
        </label>
    </li>
   
    
</ul>
    )
}

export default Logs;