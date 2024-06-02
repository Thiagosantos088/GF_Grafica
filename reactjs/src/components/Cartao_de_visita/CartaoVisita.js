import Paginacompras from "../Paginacompras/Paginadecompras";
import cartao from "../../image/Cartao_de_visita.png"
import './CartaoVisita.css'
 
function CartaoVisita () {
    return(
       <>
       <div className="form">
        <img id="imagem"src={cartao} alt=''  />
       <div className="blocoesq">
       <Paginacompras id="teste" titulo='Escolha o material:' opcao1='Material 1' opcao2='Material 2' opcao3='Material 3' opcao4='Material 4'/>
       <Paginacompras  titulo='Escolha o Formato:' opcao1='Material 1' opcao2='Material 2' opcao3='Material 3' opcao4='Material 4'/>
       <Paginacompras  titulo='Escolha a cor:' opcao1='Material 1' opcao2='Material 2' opcao3='Material 3' opcao4='Material 4'/>
       </div>
       <Paginacompras  titulo='Escolha o acabamento:' opcao1='Material 1' opcao2='Material 2' opcao3='Material 3' opcao4='Material 4'/>
       </div>
    </>
    
    
        
    )
}

export default CartaoVisita;