import logo from '../../image/logoatu.png'
import usuario from '../../image/icons8-usuário-72.png';
import Footer from '../Footer/Footer';
import lupa from '../../image/lupa.png'
import whats from '../../image/whatsapp.png'
import face from '../../image/facebook.png'
import insta from '../../image/instagram.png'
import './Header.css';
import {Link} from 'react-router-dom';

function Header () {
return(
    <>
    <header>
        <div  className='menu'>
        <Link to='home'>
        <img id='logo' src={logo} alt='' />
        </Link>
        <Link to="home">Home</Link>
        <Link to="produtos">Produtos</Link>
        <Link to="produtos">Sobre nos</Link>
        <Link to="contatos">Contatos</Link>
        <Link to="telalogin">
        <img id='usuario' src={usuario} alt='' />
        </Link>
        </div>
        <div className='busca'>
        <input className='botao' type="text" name="busca" id="busca" placeholder='     Procure seu produto'  />
        <img id='lupa' src={lupa} alt='' />
        </div>
    </header>
    <footer>
       <div className='menufooter'>
        <Link to="home">Home</Link>
        <Link to="produtos">Produtos</Link>
        <Link to="produtos">Sobre nos</Link>
        <Link to="contatos">Contatos</Link>
        </div> 
        <div className='logofooter'>
        <img id='logo' src={logo} alt=''/>
        </div>
        <div className='redesfooter'>
        <img id='whats' src={whats} alt=''/>
        <img id='face' src={face} alt=''/>
        <img id='insta' src={insta} alt=''/>
        </div> 

    
    
    </footer>
    
    
    </>
    );
    
}

export default Header;