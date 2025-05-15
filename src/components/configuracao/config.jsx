import "./config.css";


const Config = ()=>{
    return(
        <section className="config">
            
            <div className="campo-config">
                <label> Excluir Usuario</label>
                <ul className="lista-config">
                    <li className="item"> 
                        <label className="option-config">Usuario</label>
                        <button className="excluir-option"> Excluir</button>
                    </li>
                </ul>
            </div>
            <div className="campo-config">
                <label> Excluir Dispositivo</label>
                <ul className="lista-config">
                    <li className="item"> 
                        <label className="option-config">Dispositivo</label>
                        <button className="excluir-option"> Excluir</button>
                    </li>
                </ul>
            </div>
        </section>


    )
    
}

export default Config;