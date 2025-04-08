import './registerUser.css'

const RegisterUser = () => {
    return (
        <div className="register-container fdc ac df jcsa w600 h400 br20 wmax090">
            <h2 className='fs1_5'>— CADASTRO DE USUÁRIO —</h2>
            <div className="form-wrapper jcc w090 h050 br20 wmax090">
                <div className="form-fields w080">
                    <input type="text" placeholder="NOME" className="input-field " />
                    <input type="text" placeholder="SOBRENOME" className="input-field" />
                    <input type="date" className="input-field" />
                </div>
            </div>
            <button className="submit-button h50">CONCLUIR CADASTRO</button>
        </div>
    );
};

export default RegisterUser;
      //  cadastro de usuario guia numero 1 
        // se alguen mecher nesse codigo e não for eu é gay
        // mais sou eu que tou mechendo