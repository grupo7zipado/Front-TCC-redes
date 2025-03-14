import "./middle.css"
import Footer from "./footer"
import Card from "./card"
import Logs from "./logs"

const Middle = () =>{

    return(
        /* Função apenas para facilitar a organização da pagina*/
<div class="meio-pagina">
    {/* <Logs/> */}
    <Card/>
    <Footer/>
</div>
    )
}

export default Middle;