import Cards from "../Produtos/Cards";
import cartao from "../../img/PC.png"
import banner from '../../img/PB.png'
import envelope from '../../img/PENVOL.png'
import pasta from '../../img/PP.png'
import folheto from '../../img/PF.png'
import blocos from '../../img/PENVOLOP.png'
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import "./Produtos.css"
import CartaoVisita from "../Cartao_de_visita/CartaoVisita";


function Produtos(nome,imagem, valor,apartir,un) {
        return(
            <>
            <Header/>
            <div className="bloco1">
            <Cards nome='Cartão de visita' imagem= {cartao} apartir="A partir de" valor="R$ 80,00"un="500 un" link="/cartaovisita" />
            </div>
            {/* <Cards nome='Banner' imagem= {banner} apartir="A partir de" valor="R$ 60,00" un="1 un" link="/banner"/>
            <Cards nome='Envelope Personalizado' imagem= {envelope} apartir="A partir de" valor="R$ 140,00" un="500 un"/> */}
            {/* < div className="bloco2">
            <Cards nome='Pastas' imagem= {pasta} apartir="A partir de" valor="R$ 400,00" un="500 un" />
            <Cards nome='Folheto' imagem= {folheto} apartir="A partir de" valor="R$ 200,00" un="1000 un"/>
            <Cards nome='Blocos' imagem= {blocos} apartir="A partir de" valor="R$ 140,00" un="10 un"/>
            </div>
            <Footer/> */}

            </>
        )
    }



export default Produtos;
