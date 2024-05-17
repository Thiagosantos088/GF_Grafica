import "./Cards.css"

function Cards (props){
    return(
        <>
        <div className="card">
        <img id='imagem' src={props.imagem} alt='' />
        <h1 id="titulo">{props.nome}</h1>
        <h2 id="titulo">{props.apartir}</h2>
        <p id="valor">{props.valor}</p> 
        <h3 id="un">{props.un}</h3>
        
        </div>
        </>
    )
}

    export default Cards;