import "./logs.css"

const Logs = () =>{

    return(
        /* define os logs do usuário com suas informações (temperatura, nivel de oxigenação do sangue, batimentos cardiacos e a hora em que os dados foram inseridos*/
<ul class="logset">
  
    <li class="com-log w025">
        <p class="titulo-log">
            temperatura
        </p>
        <label class="info-log">
            36.4ºC
        </label>
    </li>
    <li class="com-log w020">
        <p class="titulo-log">
            oxigenação
        </p>
        <label class="info-log">
            98%
        </label>
    </li>
    <li class="com-log w020">
        <p class="titulo-log">
            bpm
        </p>
        <label class="info-log">
            87
        </label>
    </li>
    <li class="com-log w035">
        <p class="titulo-log">
            Hora
        </p>
        <label class="info-log">
            17:65 04/03/2025
        </label>
    </li>
   
    
</ul>
    )
}

export default Logs;