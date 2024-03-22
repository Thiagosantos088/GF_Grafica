import './Telalogin.css'
import barra1 from'../../image/barra1.png'
import barra2 from '../../image/barra2.png'
import insta from '../../image/instagram2.png'
import face from '../../image/facebook2.png'
import gmail from '../../image/gmail.png'
import logo from '../../image/logoatu.png'
function Telalogin() {

    return(
        
        <>
            <img id='logo' src={logo} alt='' />
            
            <div className='caixa'>
            <input className='botao' type="text" name="email" id="email" placeholder='Email'  />
            <input className='botao' type="text" name="busca" id="busca" placeholder='Senha'  />
            <button type="submit">Criar conta</button>
            <button type="submit">Entrar</button>
            <p>Login com:</p>
            <img id='logo' src={insta} alt='' />
            <img id='logo' src={face} alt='' />
            <img id='logo' src={gmail} alt='' />
            </div>


        </>
    )
    
}

export default Telalogin