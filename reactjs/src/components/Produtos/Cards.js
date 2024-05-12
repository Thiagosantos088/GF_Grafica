import "./Cards.css"
function Cards (props){
    return(
        <>
        <div className="card">
        <img id='imagem' src={props.imagem} alt='' />
        <h1 id="titulo">{props.nome}</h1>
        <p id="valor">{props.valor}</p>
        </div>
        </>
    )
}
    export default Cards;