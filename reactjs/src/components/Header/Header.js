import logo from '../../image/logoatu.png'
import usuario from '../../image/icons8-usuário-72.png'
import './Header.css';
import {Link} from 'react-router-dom';

function Header () {
return(
    <>
    <header>
        <div  className='menu'>
        <img id='logo' src={logo} alt='' />
        <Link to="home">Home</Link>
        <Link to="produtos">Produtos</Link>
        <Link to="produtos">Sobre nos</Link>
        <Link to="contatos">Contatos</Link>
        <img cl src={usuario} alt='' />
        </div>
        <div className='busca'>
        <input className='botao' type="text" name="busca" id="busca" placeholder='     Procure seu produto' />
        <button type="button">Buscar</button>
        </div>
    </header>
    </>
    );
    
}

export default Header;