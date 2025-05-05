import "./title.css"


const Title = ({user}) =>{
return(
    <section class="titular-title">
        <h1 class="nome-title">     {user.usu_nome}    </h1>
        <h2 class="idad-title reset"> {user.usu_nascimento}</h2>
    </section>

)

}

export default Title;