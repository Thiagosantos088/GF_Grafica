import "./Paginadecompras.css"


function Paginacompras (props){
    return(
        <>        
        
    <form id='formulario'>
       <label id='opcoes' >{props.titulo}</label>
       <select id="escolha">
         <option>{props.opcao1}</option>
         <option>{props.opcao2}</option>
         <option>{props.opcao3}</option>
         <option>{props.opcao3}</option>
      </select>
     </form>

     </>

       
        
    

    )
}

    export default Paginacompras;