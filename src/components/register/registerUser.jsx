import './registerUser.css'

const RegisterUser = () => {
    return (
        <div className="register-container">
            <h2>— CADASTRO DE USUÁRIO —</h2>
            <div className="form-wrapper">
                <div className="profile-pic">
                    <div className="profile-text">FOTO DE PERFIL</div>
                </div>
                <div className="form-fields">
                    <input type="text" placeholder="NOME" className="input-field" />
                    <input type="text" placeholder="SOBRENOME" className="input-field" />
                    <input type="date" className="input-field" />
                </div>
            </div>
            <button className="submit-button">CONCLUIR CADASTRO</button>
        </div>
    );
};

export default RegisterUser;
      //  cadastro de usuario guia numero 1 
        // se alguen mecher nesse codigo e não for eu é gay