import { useState } from "react";
import "./config.css";

const Config = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [tipoExcluir, setTipoExcluir] = useState("");
  
    const abrirModal = (tipo) => {
      setTipoExcluir(tipo);
      setMostrarModal(true);
    };
  
    const confirmarExclusao = () => {
      console.log(`${tipoExcluir} excluído`);
      setMostrarModal(false);
    };
  
    const cancelarExclusao = () => {
      setMostrarModal(false);
    };
  
    return (
      <section className="config">
        <div className="campo-config">
          <label>Excluir Usuário</label>
          <ul className="lista-config">
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>


            {/*  */}
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>
            <li className="item">
              <label className="option-config">Usuário</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("usuário")}
              >
                Excluir
              </button>
            </li>


          </ul>
        </div>

        {/* Aqui fudeu */}
      
         {/* Aqui fudeu */}
  
        <div className="campo-config">
          <label>Excluir Dispositivo</label>
          <ul className="lista-config">
            <li className="item">
              <label className="option-config">Dispositivo</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("dispositivo")}
              >
                Excluir
              </button>
            </li>
          </ul>
        </div>
  
        {mostrarModal && (
          <div className="modal-overlay">
            <div className="modal">
              <p>Certeza que deseja excluir este {tipoExcluir}?</p>
              <div className="botoes-modal">
                <button onClick={confirmarExclusao} className="confirmar">Sim</button>
                <button onClick={cancelarExclusao} className="cancelar">Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };
  
  export default Config;