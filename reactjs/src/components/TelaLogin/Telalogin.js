import './Telalogin.css';
import { Link, useNavigate } from 'react-router-dom';
import insta from '../../image/instagram2.png';
import face from '../../image/facebook2.png';
import gmail from '../../image/gmail.png';
import logo from '../../image/logoatu.png';
import axios from 'axios';
import { useState, useContext } from 'react';
import { UserContext } from '../../components/Contextogeral/UserGeral.js'; // Verifique o caminho correto do contexto

function Telalogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext); // Use o contexto corretamente

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/usuario/login', { email, senha });
            if (response.data.user) {
                setUser(response.data.user); // Armazene os dados do usuário no contexto
                navigate('/areadocliente'); // Redirecione para a área do cliente após o login
            } else {
                setError('Credenciais inválidas.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Erro ao fazer login');
        }
    };

    return (
        <>
            <div className='logo'>
                <Link to='/'>
                    <img id='logotl' src={logo} alt='Logo' />
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
                    <img id='instatl' src={insta} alt='Instagram' />
                    <img id='facetl' src={face} alt='Facebook' />
                    <img id='gmailtl' src={gmail} alt='Gmail' />
                </div>
            </div>
        </>
    );
}

export default Telalogin;
