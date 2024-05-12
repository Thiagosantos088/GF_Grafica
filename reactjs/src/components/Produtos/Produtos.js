import Cards from "../Produtos/Cards";
import cartao from "../../image/Cartao_de_visita.png"
import Header from "../Header/Header"
import Footer from "../Footer/Footer";


function Produtos(nome,imagem, valor) {
        return(
            <>
            <Header/>
            <Cards nome='Cartão de visita' imagem= {cartao} valor="R$ 20,00" />
            <Cards nome='teste' sub='teste1'  />
            <Footer/>

            </>
        )
    }



export default Produtos;
