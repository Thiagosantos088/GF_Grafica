import C from '../../image/logoatu.png'
import './Header.css';
import {Link} from 'react-router-dom';

function Header () {
return(
    <>
    <header>
        <div className='menu'>
        <img src={C} alt='' />
        <Link to="home">Home</Link>
        <Link to="produtos">Produtos</Link>
        <Link to="produtos">Sobre nos</Link>
        <Link to="contatos">Contatos</Link>
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