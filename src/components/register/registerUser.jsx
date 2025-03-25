import './registerUser.css'


const RegisterUser = () => {
    return ( 

        //  cadastro de usuario guia numero 1 
        // se alguen mecher nesse codigo e não for eu é gay

        <div className="register-user">
            <h2>Cadastro de Usuário</h2>
            <form>
                <label htmlFor="username">Nome</label>
                <input type="text" id="username" name="username" required />
                
                <label htmlFor="email">Sobrenome</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="password">Data de Nacimento</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Concluir Cadastro</button>
            </form>
        </div>
    );
};

export default RegisterUser;