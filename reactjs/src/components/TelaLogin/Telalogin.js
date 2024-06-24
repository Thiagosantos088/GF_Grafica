import './Telalogin.css';
import { Link, useNavigate } from 'react-router-dom';
import insta from '../../image/instagram2.png';
import face from '../../image/facebook2.png';
import gmail from '../../image/gmail.png';
import logo from '../../image/logoatu.png';
import axios from 'axios';
import { useState } from 'react';

function Telalogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/usuario/login', { email, senha });
            if (response.data.user) {
                console.log('Usuário:', response.data.user);
                // Redirecionar para outra página após login bem-sucedido
                navigate('/areadocliente'); 
            }
        } catch (error) {
            setError(error.response.data.message || 'Erro ao fazer login');
        }
    };

    return (
        <>
            <div className='logo'>
                <Link to='/'>
                    <img id='logotl' src={logo} alt='' />
                </Link>
            </div>
            <div className='container-login'>
                <p id='txtlogin'>Login</p>
                <div className='login'>
                    <input
                        className='email'
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='senha'
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                {error && <p className='error'>{error}</p>}
                <div className='botaologin'>
                    <Link to='/teladeregistro'>
                        <button id='criar' type="button">Criar conta</button>
                    </Link>
                    <button id='entrar' type="button" onClick={handleLogin}>Entrar</button>
                </div>
                <div className='redeslogin'>
                    <p>Login com:</p>
                    <img id='instatl' src={insta} alt='' />
                    <img id='facetl' src={face} alt='' />
                    <img id='gmailtl' src={gmail} alt='' />
                </div>
            </div>
        </>
    );
}

export default Telalogin;
