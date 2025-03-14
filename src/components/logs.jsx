import "./logs.css"

const Logs = () =>{

    return(
        /* define os logs*/
<ul class="logset">
  
    <li class="com-log">
        <p class="titulo-log">
            temperatura
        </p>
        <label class="info-log">
            36.4ºC
        </label>
    </li>
    <li class="com-log">
        <p class="titulo-log">
            oxigenação
        </p>
        <label class="info-log">
            98%
        </label>
    </li>
    <li class="com-log">
        <p class="titulo-log">
            bpm
        </p>
        <label class="info-log">
            87
        </label>
    </li>
    <li class="com-log">
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