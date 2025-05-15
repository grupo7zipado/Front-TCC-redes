import { useState } from "react";
import "./config.css";

const usuariosFake = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" }
];

const dispositivosFake = [
  { id: 101, nome: "ESP - João" },
  { id: 102, nome: "ESP32 - Maria" }
];

const Config = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tipoExcluir, setTipoExcluir] = useState(""); // "usuario" ou "dispositivo"
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [pesquisaUsuario, setPesquisaUsuario] = useState("");
  const [pesquisaDispositivo, setPesquisaDispositivo] = useState("");

  const abrirModal = (tipo, item) => {
    setTipoExcluir(tipo);
    setItemSelecionado(item);
    setMostrarModal(true);
  };

  const confirmarExclusao = () => {
    console.log(`${tipoExcluir} ${itemSelecionado.nome} excluído`);
    setMostrarModal(false);
    // Aqui você implementa a exclusão real
  };

  const cancelarExclusao = () => {
    setMostrarModal(false);
  };

  const usuariosFiltrados = usuariosFake.filter((u) =>
    u.nome.toLowerCase().includes(pesquisaUsuario.toLowerCase())
  );

  const dispositivosFiltrados = dispositivosFake.filter((d) =>
    d.nome.toLowerCase().includes(pesquisaDispositivo.toLowerCase())
  );

  return (
    <section className="config">
      {/* ==== USUÁRIOS ==== */}
      <div className="campo-config">
        <label>Pesquisar Usuário</label>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={pesquisaUsuario}
          onChange={(e) => setPesquisaUsuario(e.target.value)}
          className="barra-pesquisa"
        />

        <ul className="lista-config">
          {usuariosFiltrados.map((user) => (
            <li className="item" key={user.id}>
              <label className="option-config">{user.nome}</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("Usuário", user)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ==== DISPOSITIVOS ==== */}
      <div className="campo-config">
        <label>Pesquisar Dispositivo</label>
        <input
          type="text"
          placeholder="Digite o nome do dispositivo"
          value={pesquisaDispositivo}
          onChange={(e) => setPesquisaDispositivo(e.target.value)}
          className="barra-pesquisa"
        />

        <ul className="lista-config">
          {dispositivosFiltrados.map((dispositivo) => (
            <li className="item" key={dispositivo.id}>
              <label className="option-config">{dispositivo.nome}</label>
              <button
                className="excluir-option"
                onClick={() => abrirModal("Dispositivo", dispositivo)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ==== MODAL ==== */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Certeza que deseja excluir {tipoExcluir.toLowerCase()} "{itemSelecionado.nome}"?</p>
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