import { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = ({setTela}) => {

    


    const [mostrarCard, setMostrarCard] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const cardRef = useRef(null); 

    // Fecha o card quando clicar fora dele
    useEffect(() => {
        const handleClickFora = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setMostrarCard(false);
            }
        };

        // Adiciona o event listener
        document.addEventListener("mousedown", handleClickFora);
        
        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-buttons">
                {/* Botão do Menu */}
                <button className="header-button-menu" onClick={() => setMostrarCard(!mostrarCard)}>
                    <div className="button-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </div>
                </button>
                
                {/* Título */}
                <div className="titulo">
                    <h1>Monitoramento de Sinais Vitais</h1>
                </div>
                
                {/* Botão de saída */}
                <button className="header-button-saida" 
                    onMouseEnter={() => setMostrarMensagem(true)} 
                    onMouseLeave={() => setMostrarMensagem(false)}
                >
                    {mostrarMensagem && <p className="mensagem-saida">Votar</p>}
                    <div className="button-saida" onClick={()=>{setTela("card")}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" x2="9" y1="12" y2="12" />
                        </svg>
                    </div>
                </button>
            </div>
            
            {/* Card do Menu */}
            {mostrarCard && (
                <div className="menu-card" ref={cardRef}>
                    <button className="menu-item" onClick={()=>{setTela("card")}} >➕card Adicionar Usuário</button>
                    <button className="menu-item" onClick={()=>{setTela("cadUser")}} >➕cadastro usuario  Adicionar Usuário</button>
                    <button className="menu-item" onClick={()=>{setTela("espUser")}} >➕esp usuario</button>

                    <button className="menu-item">⚙️ Configurações</button>
                    <button className="menu-item">❓ Ajuda</button>
                </div>
            )}
        </header>
    );
};

export default Header;
