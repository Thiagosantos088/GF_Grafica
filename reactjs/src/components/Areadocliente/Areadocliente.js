// AreaDoCliente.js
import React, { useContext } from 'react';
import { UserContext } from '../Contextogeral/UserGeral.js';
import Header from '../Header/Header.js';

function AreaDoCliente() {
    const { user } = useContext(UserContext);

    return (
        <>            
            <Header/>
            <div className='testearea'>
            <p>Bem-vindo, {user ? user.nome : 'Visitante'}!</p>
            </div>

        </>
    );
}

export default AreaDoCliente;
