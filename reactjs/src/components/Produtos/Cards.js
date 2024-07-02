import "./Cards.css"
import { Link } from 'react-router-dom';


function Cards (props){
    return(
        
        <div className="card">
        <Link to={props.link}>
        <div id="potad">
        <img id='imagem' src={props.imagem} alt='' />
        <h1 id="titulo">{props.nome}</h1>
        <h2 id="titlo">{props.apartir}</h2>
        <p id="valor">{props.valor}</p> 
        <h3 id="un">{props.un}</h3>
        </div>
        </Link>
        </div>
        
    

    )
}

    export default Cards;